import ProductDetail from '../ProductDetail';
import tshirtImage from '@assets/stock_images/white_t-shirt_mockup_3d560599.jpg';

export default function ProductDetailExample() {
  const product = {
    id: '1',
    name: 'Marathon of Hope T-Shirt',
    description: 'Premium quality cotton t-shirt featuring the iconic Marathon of Hope logo. Comfortable, durable, and perfect for your daily run or casual wear. Every purchase supports cancer research.',
    price: 34.99,
    category: 'T-Shirts',
    image: tshirtImage,
    colors: ['#2563eb', '#dc2626', '#000000', '#ffffff'],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  };

  return (
    <ProductDetail 
      product={product}
      onAddToCart={(id, size, color) => console.log('Added to cart:', { id, size, color })}
    />
  );
}
