import { Search, PlayCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <PlayCircle className="h-8 w-8 text-primary" fill="currentColor" />
            <span className="text-xl font-bold text-foreground">MiniTube</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search videos..."
                className="w-full bg-secondary border-border pl-4 pr-12 h-10 rounded-full focus-visible:ring-primary"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-4 rounded-full bg-primary hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
