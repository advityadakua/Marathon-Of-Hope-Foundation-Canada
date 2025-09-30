import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import CartSheet from "@/components/CartSheet";
import { useToast } from "@/hooks/use-toast";

// todo: remove mock functionality
import tshirt1 from "@assets/stock_images/white_t-shirt_mockup_3d560599.jpg";
import tshirt2 from "@assets/stock_images/white_t-shirt_mockup_c30c5479.jpg";
import shorts1 from "@assets/stock_images/athletic_shorts_spor_6e5c9880.jpg";
import shorts2 from "@assets/stock_images/athletic_shorts_spor_9badef95.jpg";

export default function ProductPage() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [cartOpen, setCartOpen] = useState(false);
  
  // todo: remove mock functionality
  const [cartItems, setCartItems] = useState<any[]>([]);

  // todo: remove mock functionality
  const mockProducts: Record<string, any> = {
    "1": {
      id: "1",
      name: "Marathon of Hope T-Shirt",
      description: "Premium quality cotton t-shirt featuring the iconic Marathon of Hope logo. Comfortable, durable, and perfect for your daily run or casual wear. Every purchase supports cancer research and honors Terry Fox's incredible legacy.",
      price: 34.99,
      category: "T-Shirts",
      image: tshirt1,
      colors: ['#2563eb', '#dc2626', '#000000', '#ffffff'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    "2": {
      id: "2",
      name: "Classic Runner Tee",
      description: "Breathable athletic t-shirt designed for runners. Features moisture-wicking fabric and a comfortable fit. Perfect for training or everyday wear while supporting a great cause.",
      price: 32.99,
      category: "T-Shirts",
      image: tshirt2,
      colors: ['#000000', '#ffffff', '#22c55e'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    "3": {
      id: "3",
      name: "Athletic Running Shorts",
      description: "High-performance running shorts with built-in liner and zippered pocket. Lightweight and designed for maximum mobility during your runs. Support cancer research with every stride.",
      price: 29.99,
      category: "Shorts",
      image: shorts1,
      colors: ['#000000', '#2563eb', '#dc2626'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    "4": {
      id: "4",
      name: "Performance Shorts",
      description: "Premium athletic shorts with advanced moisture-wicking technology. Ideal for intense workouts and long-distance running. Join the marathon of hope with your purchase.",
      price: 31.99,
      category: "Shorts",
      image: shorts2,
      colors: ['#000000', '#2563eb'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    }
  };

  const product = params?.id ? mockProducts[params.id] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartItemCount={0} onCartClick={() => {}} />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = (productId: string, size: string, color: string) => {
    const colorNames: Record<string, string> = {
      '#2563eb': 'Blue',
      '#dc2626': 'Red',
      '#000000': 'Black',
      '#ffffff': 'White',
      '#22c55e': 'Green',
    };

    const newItem = {
      id: `${productId}-${size}-${color}-${Date.now()}`,
      productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color: colorNames[color] || color,
      quantity: 1
    };

    setCartItems([...cartItems, newItem]);
    
    toast({
      title: "Added to cart",
      description: `${product.name} (${size}, ${colorNames[color]})`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
      />
      
      <ProductDetail 
        product={product}
        onAddToCart={handleAddToCart}
      />
      
      <Footer />

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={(id, quantity) => {
          setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity } : item
          ));
        }}
        onRemove={(id) => {
          setCartItems(cartItems.filter(item => item.id !== id));
        }}
        onCheckout={() => {
          setCartOpen(false);
          setLocation('/checkout');
        }}
      />
    </div>
  );
}
