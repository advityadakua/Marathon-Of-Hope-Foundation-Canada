import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import CartSheet from "@/components/CartSheet";
import { useToast } from "@/hooks/use-toast";

// todo: remove mock functionality
import tshirt1 from "@assets/attached_assets/T-Shirt_1759512638377.png";
import shoes1 from "@assets/attached_assets/Shoe_1759512694171.png";
import shoes2 from "@assets/attached_assets/Shoe_1759512694171.png";

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
      name: "Maple Leaf Running Shoes",
      description: "Premium white running shoes featuring the iconic Canadian maple leaf. Designed for comfort and performance, these shoes honor Terry Fox's journey across Canada. Advanced cushioning and breathable materials make every step count.",
      price: 89.99,
      category: "Shoes",
      image: shoes1,
      colors: ['#ffffff', '#dc2626'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    "3": {
      id: "3",
      name: "Canadian Pride Sneakers",
      description: "White athletic sneakers with maple leaf detailing. Built for runners who want to make a statement while supporting cancer research. Lightweight construction with superior arch support for long-distance comfort.",
      price: 94.99,
      category: "Shoes",
      image: shoes2,
      colors: ['#ffffff', '#dc2626'],
      sizes: ['7', '8', '9', '10', '11', '12']
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
