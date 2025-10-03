import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [, setLocation] = useLocation();
  
  // todo: remove mock functionality
  const [mockCartItems] = useState([
    {
      id: '1',
      name: 'Marathon of Hope T-Shirt',
      price: 34.99,
      size: 'M',
      color: 'Blue',
      quantity: 2
    },
    {
      id: '2',
      name: 'Maple Leaf Running Shoes',
      price: 89.99,
      size: '10',
      color: 'White',
      quantity: 1
    }
  ]);

  const handleSubmit = (data: { name: string; email: string; }) => {
    // Generate a fake order ID for demo purposes
    const orderId = `MOH-${new Date().getFullYear()}-${Math.floor(Math.random() * 100000).toString().padStart(6, '0')}`;
    const total = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Log to console only - no data is saved to database or backend
    console.log('Demo order submitted (not saved):', { orderId, ...data, total });
    
    // Redirect to order confirmation with demo data
    setLocation(`/order-confirmation?id=${orderId}&name=${encodeURIComponent(data.name)}&email=${encodeURIComponent(data.email)}&total=${total}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={mockCartItems.length} />
      
      <CheckoutForm 
        items={mockCartItems}
        onSubmit={handleSubmit}
      />
      
      <Footer />
    </div>
  );
}
