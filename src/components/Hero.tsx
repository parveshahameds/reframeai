import { Play, Camera, Film, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Film Strip Animation */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cinematic-gold to-transparent animate-film-roll opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-3 bg-card rounded-full border border-cinematic-gold/30 animate-glow">
            <Camera className="w-8 h-8 text-cinematic-gold" />
          </div>
          <div className="p-3 bg-card rounded-full border border-cinematic-gold/30">
            <Film className="w-8 h-8 text-cinematic-gold" />
          </div>
          <div className="p-3 bg-card rounded-full border border-cinematic-gold/30">
            <Code className="w-8 h-8 text-cinematic-gold" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-cinematic font-bold mb-6 leading-tight">
          <span className="text-cinematic-gold">Computer Vision</span>
          <br />
          <span className="text-foreground">Developer</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-tech leading-relaxed max-w-3xl mx-auto">
          Building AI systems that analyze cinematography techniques and narrative structure through advanced computer vision and machine learning
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-cinematic-gold text-cinematic-black hover:bg-cinematic-gold/90 font-semibold px-8 py-4 text-lg group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-cinematic-gold text-cinematic-gold hover:bg-cinematic-gold hover:text-cinematic-black px-8 py-4 text-lg"
          >
            Download Resume
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-cinematic-gold/20 rounded-full animate-pulse hidden md:block" />
      <div className="absolute top-20 right-20 w-12 h-12 border border-cinematic-silver/20 rounded-full animate-pulse hidden md:block" />
      <div className="absolute bottom-20 right-16 w-8 h-8 bg-cinematic-gold/10 rounded-full animate-pulse hidden md:block" />
    </section>
  );
};