import { useState, useEffect } from "react";
import { Film } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-cinematic-gold/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-cinematic-gold rounded-lg">
              <Film className="w-6 h-6 text-cinematic-black" />
            </div>
            <span className="font-cinematic font-bold text-xl text-foreground">Reframe</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
