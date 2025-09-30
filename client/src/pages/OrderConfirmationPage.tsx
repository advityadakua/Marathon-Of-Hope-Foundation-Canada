import { useLocation } from "wouter";
import Header from "@/components/Header";
import OrderConfirmation from "@/components/OrderConfirmation";
import Footer from "@/components/Footer";

export default function OrderConfirmationPage() {
  const [location] = useLocation();
  
  // Parse query params
  const params = new URLSearchParams(location.split('?')[1] || '');
  const orderId = params.get('id') || 'UNKNOWN';
  const customerName = params.get('name') || 'Customer';
  const email = params.get('email') || '';
  const total = parseFloat(params.get('total') || '0');

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={0} />
      
      <OrderConfirmation 
        orderId={orderId}
        customerName={customerName}
        email={email}
        total={total}
      />
      
      <Footer />
    </div>
  );
}
