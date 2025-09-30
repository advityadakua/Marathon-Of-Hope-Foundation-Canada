import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  onViewClick?: (id: string) => void;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category,
  colors,
  onViewClick 
}: ProductCardProps) {
  return (
    <Card className="hover-elevate overflow-hidden transition-transform duration-300">
      <CardContent className="p-0">
        <div className="aspect-[4/5] bg-muted relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
            data-testid={`img-product-${id}`}
          />
        </div>
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
            <h3 className="font-semibold text-lg" data-testid={`text-product-name-${id}`}>{name}</h3>
            <p className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
              ${price.toFixed(2)}
            </p>
          </div>
          
          <div className="flex gap-2">
            {colors.slice(0, 4).map((color, idx) => (
              <div 
                key={idx}
                className="w-6 h-6 rounded-full border-2 border-border"
                style={{ backgroundColor: color }}
                data-testid={`color-swatch-${id}-${idx}`}
              />
            ))}
          </div>

          <Button 
            className="w-full"
            onClick={() => onViewClick?.(id)}
            data-testid={`button-view-${id}`}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
