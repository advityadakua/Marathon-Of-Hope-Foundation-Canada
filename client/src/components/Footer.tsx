import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About the Foundation</h3>
            <p className="text-sm text-muted-foreground">
              The Marathon of Hope Foundation continues Terry Fox's legacy by funding cancer research.
              Every purchase directly supports life-saving research.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded-md inline-block">Our Mission</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded-md inline-block">Shop</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded-md inline-block">Donate</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded-md inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Email: info@marathonofhope.ca<br />
              Charitable Registration: 12345 6789 RR0001
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground italic font-serif mb-2">
            "I'm not a dreamer, and I'm not saying this will initiate any kind of definitive answer or cure to cancer. But I believe in miracles."
          </p>
          <p className="text-sm text-muted-foreground">— Terry Fox</p>
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for cancer research
          </p>
        </div>
      </div>
    </footer>
  );
}
