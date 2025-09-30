import ProductCard from '../ProductCard';
import tshirtImage from '@assets/stock_images/white_t-shirt_mockup_3d560599.jpg';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard 
        id="1"
        name="Marathon of Hope T-Shirt"
        price={34.99}
        image={tshirtImage}
        category="T-Shirts"
        colors={['#2563eb', '#dc2626', '#000000', '#ffffff']}
        onViewClick={(id) => console.log('View product:', id)}
      />
    </div>
  );
}
