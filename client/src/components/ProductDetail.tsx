import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    colors: string[];
    sizes: string[];
  };
  onAddToCart?: (productId: string, size: string, color: string) => void;
}

export default function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = () => {
    onAddToCart?.(product.id, selectedSize, selectedColor);
  };

  const colorNames: Record<string, string> = {
    '#2563eb': 'Blue',
    '#dc2626': 'Red',
    '#000000': 'Black',
    '#ffffff': 'White',
    '#22c55e': 'Green',
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-product-detail"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3" data-testid="badge-category">
              {product.category}
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-product-name">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary mb-4" data-testid="text-product-price">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-foreground" data-testid="text-product-description">
              {product.description}
            </p>
          </div>

          <Card className="p-6 bg-muted/30">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold mb-3 block">
                  Size: {selectedSize}
                </label>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="lg"
                      onClick={() => setSelectedSize(size)}
                      data-testid={`button-size-${size}`}
                      className="min-w-16"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 block">
                  Color: {colorNames[selectedColor] || selectedColor}
                </label>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-md border-2 hover-elevate active-elevate-2 relative ${
                        selectedColor === color ? 'border-primary' : 'border-border'
                      }`}
                      style={{ backgroundColor: color }}
                      data-testid={`button-color-${color}`}
                    >
                      {selectedColor === color && (
                        <Check className="absolute inset-0 m-auto h-6 w-6" 
                          style={{ color: color === '#ffffff' || color === '#22c55e' ? '#000' : '#fff' }} 
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Button 
            size="lg" 
            className="w-full"
            onClick={handleAddToCart}
            data-testid="button-add-to-cart"
          >
            Add to Cart
          </Button>

          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-sm text-center">
              <strong>100% of profits</strong> support cancer research in Terry Fox's honor
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
