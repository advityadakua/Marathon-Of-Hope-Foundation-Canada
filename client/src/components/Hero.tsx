import { Button } from "@/components/ui/button";
import heroImage from "../../../attached_assets/terry-marathon_1759512927473.jpg";

interface HeroProps {
  onShopClick?: () => void;
  onLearnClick?: () => void;
}

export default function Hero({ onShopClick, onLearnClick }: HeroProps) {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
          Run With Purpose
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-serif italic">
          "Anything's possible if you try. Dreams are made if people try."
          <span className="block text-base mt-2 not-italic">— Terry Fox</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={onShopClick}
            data-testid="button-shop-now"
          >
            Shop Merchandise
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
            data-testid="button-learn-more"
            onClick={onLearnClick}
          >
            Learn Our Mission
          </Button>
        </div>
        <p className="mt-8 text-white/80 text-sm">
          100% of profits support cancer research
        </p>
      </div>
    </div>
  );
}
