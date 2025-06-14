import { Brain, Camera, Code2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep expertise in computer vision, neural networks, and TensorFlow"
    },
    {
      icon: Camera,
      title: "Cinematography Analysis",
      description: "Advanced understanding of film techniques, composition, and narrative structure"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Python, React, OpenCV, and modern web technologies"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Bridging the gap between technology and creative storytelling"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-foreground">
            About <span className="text-cinematic-gold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cinematic-gold mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-cinematic font-semibold mb-6 text-cinematic-gold">
              Where Technology Meets Cinema
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-tech leading-relaxed">
              I'm a passionate developer specializing in computer vision and AI systems that analyze 
              the art of filmmaking. My work bridges the technical precision of machine learning with 
              the creative nuance of cinematic storytelling.
            </p>
            <p className="text-lg text-muted-foreground mb-6 font-tech leading-relaxed">
              With expertise in Python, OpenCV, TensorFlow, and React, I build sophisticated systems 
              that can understand camera movements, detect narrative beats, analyze color palettes, 
              and decode the visual language of cinema.
            </p>
            <p className="text-lg text-muted-foreground font-tech leading-relaxed">
              My mission is to create AI tools that enhance rather than replace human creativity, 
              providing filmmakers and analysts with deeper insights into the craft of visual storytelling.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="border-cinematic-gold/20 bg-card hover:bg-card/80 transition-all duration-300 hover:border-cinematic-gold/40 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cinematic-gold/10 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-cinematic-gold" />
                    </div>
                    <div>
                      <h4 className="font-tech font-semibold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};