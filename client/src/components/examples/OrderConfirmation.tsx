import OrderConfirmation from '../OrderConfirmation';

export default function OrderConfirmationExample() {
  return (
    <OrderConfirmation 
      orderId="MOH-2024-001234"
      customerName="John Doe"
      email="john@example.com"
      total={99.97}
    />
  );
}
