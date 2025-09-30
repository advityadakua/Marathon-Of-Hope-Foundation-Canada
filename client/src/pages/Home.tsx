import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CartSheet from "@/components/CartSheet";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

// todo: remove mock functionality
import tshirt1 from "@assets/stock_images/white_t-shirt_mockup_3d560599.jpg";
import tshirt2 from "@assets/stock_images/white_t-shirt_mockup_c30c5479.jpg";
import shorts1 from "@assets/stock_images/athletic_shorts_spor_6e5c9880.jpg";
import shorts2 from "@assets/stock_images/athletic_shorts_spor_9badef95.jpg";

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
      name: "Classic Runner Tee",
      price: 32.99,
      category: "T-Shirts",
      image: tshirt2,
      colors: ['#000000', '#ffffff', '#22c55e'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: "3",
      name: "Athletic Running Shorts",
      price: 29.99,
      category: "Shorts",
      image: shorts1,
      colors: ['#000000', '#2563eb', '#dc2626'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: "4",
      name: "Performance Shorts",
      price: 31.99,
      category: "Shorts",
      image: shorts2,
      colors: ['#000000', '#2563eb'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
