import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Header({ cartItemCount = 0, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <h1 className="text-xl font-bold text-primary">Marathon of Hope Foundation</h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" data-testid="link-shop">
              <span className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md">Shop</span>
            </Link>
            <Link href="/about" data-testid="link-about">
              <span className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md">Our Mission</span>
            </Link>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={onCartClick}
            data-testid="button-cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                data-testid="badge-cart-count"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
