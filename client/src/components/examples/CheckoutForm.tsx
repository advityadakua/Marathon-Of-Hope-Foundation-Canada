import CheckoutForm from '../CheckoutForm';

export default function CheckoutFormExample() {
  const items = [
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
  ];

  return (
    <CheckoutForm 
      items={items}
      onSubmit={(data) => console.log('Order placed:', data)}
    />
  );
}
