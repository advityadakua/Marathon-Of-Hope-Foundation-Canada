import { useState } from 'react';
import CartSheet from '../CartSheet';
import { Button } from '@/components/ui/button';
import tshirtImage from '@assets/stock_images/white_t-shirt_mockup_3d560599.jpg';
import shoesImage from '@assets/stock_images/white_athletic_shoes_cdbcb3e8.jpg';

export default function CartSheetExample() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: '1',
      productId: 'p1',
      name: 'Marathon of Hope T-Shirt',
      price: 34.99,
      image: tshirtImage,
      size: 'M',
      color: 'Blue',
      quantity: 2
    },
    {
      id: '2',
      productId: 'p2',
      name: 'Maple Leaf Running Shoes',
      price: 89.99,
      image: shoesImage,
      size: '10',
      color: 'White',
      quantity: 1
    }
  ]);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Cart</Button>
      <CartSheet 
        open={open}
        onOpenChange={setOpen}
        items={items}
        onUpdateQuantity={(id, quantity) => {
          setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
        }}
        onRemove={(id) => {
          setItems(items.filter(item => item.id !== id));
        }}
        onCheckout={() => console.log('Checkout clicked')}
      />
    </div>
  );
}
