import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CartSheet from "@/components/CartSheet";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

// todo: remove mock functionality
import tshirt1 from "@assets/attached_assets/T-Shirt_1759512638377.png";
import shoes1 from "@assets/attached_assets/Shoe_1759512694171.png";

export default function Home() {
  const [, setLocation] = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  
  // todo: remove mock functionality
  const [cartItems, setCartItems] = useState<any[]>([]);

  // todo: remove mock functionality
  const mockProducts = [
    {
      id: "1",
      name: "Marathon of Hope T-Shirt",
      price: 34.99,
      category: "T-Shirts",
      image: tshirt1,
      colors: ['#2563eb', '#dc2626', '#000000', '#ffffff'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
      id: "2",
      name: "Maple Leaf Running Shoes",
      price: 89.99,
      category: "Shoes",
      image: shoes1,
      colors: ['#ffffff', '#dc2626'],
      sizes: ['7', '8', '9', '10', '11', '12']
    }
  ];

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
      />
      
      <Hero onShopClick={scrollToProducts} />
      
      <section id="products" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop Merchandise</h2>
            <p className="text-lg text-muted-foreground">
              Every purchase supports life-saving cancer research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onViewClick={(id) => setLocation(`/product/${id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <MissionSection />
      
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
