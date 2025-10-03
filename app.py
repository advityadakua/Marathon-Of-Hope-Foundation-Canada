
from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from flask_cors import CORS
import json
import os
from datetime import datetime
import secrets

app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key = secrets.token_hex(16)
CORS(app)

# Mock product data
PRODUCTS = [
    {
        "id": 1,
        "name": "Terry Fox Foundation Marathon T-Shirt",
        "price": 29.99,
        "description": "Premium cotton t-shirt honoring Terry Fox's legacy",
        "image": "/static/images/white_t-shirt_mockup_3d560599.jpg",
        "category": "apparel",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["white", "blue", "red"]
    },
    {
        "id": 2,
        "name": "Athletic Running Shorts",
        "price": 39.99,
        "description": "High-performance athletic shorts",
        "image": "/static/images/athletic_shorts_spor_6e5c9880.jpg",
        "category": "apparel",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["black", "navy", "grey"]
    },
    {
        "id": 3,
        "name": "Marathon Runner Shoes",
        "price": 89.99,
        "description": "Professional running shoes for marathon training",
        "image": "/static/images/white_athletic_shoes_4586f7ea.jpg",
        "category": "footwear",
        "sizes": ["7", "8", "9", "10", "11", "12"],
        "colors": ["white", "black"]
    }
]

# Initialize cart in session
def get_cart():
    if 'cart' not in session:
        session['cart'] = []
    return session['cart']

@app.route('/')
def home():
    return render_template('home.html', products=PRODUCTS)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = next((p for p in PRODUCTS if p['id'] == product_id), None)
    if not product:
        return render_template('404.html'), 404
    return render_template('product_detail.html', product=product)

@app.route('/api/cart', methods=['GET'])
def get_cart_items():
    return jsonify(get_cart())

@app.route('/api/cart/add', methods=['POST'])
def add_to_cart():
    data = request.json
    cart = get_cart()
    cart.append({
        'product_id': data['product_id'],
        'quantity': data.get('quantity', 1),
        'size': data.get('size'),
        'color': data.get('color')
    })
    session['cart'] = cart
    return jsonify({'success': True, 'cart': cart})

@app.route('/api/cart/remove/<int:index>', methods=['DELETE'])
def remove_from_cart(index):
    cart = get_cart()
    if 0 <= index < len(cart):
        cart.pop(index)
        session['cart'] = cart
    return jsonify({'success': True, 'cart': cart})

@app.route('/api/cart/update/<int:index>', methods=['PUT'])
def update_cart_item(index):
    data = request.json
    cart = get_cart()
    if 0 <= index < len(cart):
        cart[index]['quantity'] = data.get('quantity', cart[index]['quantity'])
        session['cart'] = cart
    return jsonify({'success': True, 'cart': cart})

@app.route('/checkout')
def checkout():
    cart = get_cart()
    cart_items = []
    total = 0
    
    for item in cart:
        product = next((p for p in PRODUCTS if p['id'] == item['product_id']), None)
        if product:
            item_total = product['price'] * item['quantity']
            cart_items.append({
                **product,
                'quantity': item['quantity'],
                'size': item.get('size'),
                'color': item.get('color'),
                'total': item_total
            })
            total += item_total
    
    return render_template('checkout.html', cart_items=cart_items, total=total)

@app.route('/api/checkout', methods=['POST'])
def process_checkout():
    data = request.json
    # Mock payment processing
    order_id = secrets.token_hex(8)
    session['cart'] = []  # Clear cart
    return jsonify({
        'success': True,
        'order_id': order_id,
        'message': 'Order placed successfully! Your purchase supports cancer research.'
    })

@app.route('/order-confirmation/<order_id>')
def order_confirmation(order_id):
    return render_template('order_confirmation.html', order_id=order_id)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
