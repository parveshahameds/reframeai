import { ExternalLink, Github, Play, Camera, BarChart3, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Film Analysis AI",
      description: "Advanced computer vision system that analyzes cinematography techniques, shot composition, camera movements, and narrative structure in films. Features real-time processing and comprehensive visual analytics.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "FastAPI", "PostgreSQL"],
      features: ["Shot Detection", "Camera Movement Analysis", "Color Palette Extraction", "Narrative Beat Recognition"],
      github: "#",
      live: "#",
      featured: true,
      icon: Camera
    },
    {
      title: "Cinematic Color Analyzer",
      description: "Machine learning tool that extracts and analyzes color palettes from film sequences, identifying mood patterns and visual themes across different genres and directors.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Vue.js", "D3.js"],
      features: ["Color Extraction", "Mood Analysis", "Genre Classification", "Director Style Recognition"],
      github: "#",
      live: "#",
      featured: false,
      icon: Palette
    },
    {
      title: "Visual Storytelling Metrics",
      description: "Analytics dashboard that quantifies storytelling elements in films, measuring pacing, tension curves, and emotional beats through computer vision and audio analysis.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "Node.js", "MongoDB"],
      features: ["Pacing Analysis", "Tension Mapping", "Emotional Curves", "Scene Transitions"],
      github: "#",
      live: "#",
      featured: false,
      icon: BarChart3
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-foreground">
            Featured <span className="text-cinematic-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cinematic-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-tech max-w-3xl mx-auto">
            Innovative AI systems that decode the visual language of cinema
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`border-border overflow-hidden transition-all duration-500 hover:border-cinematic-gold/40 animate-fade-in ${
                project.featured ? "bg-gradient-to-r from-card to-card/50 border-cinematic-gold/20" : "bg-card"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-cols-2" : ""}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div 
                    className="h-64 lg:h-full bg-cover bg-center bg-no-repeat relative group"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  >
                    <div className="absolute inset-0 bg-cinematic-black/60 group-hover:bg-cinematic-black/40 transition-all duration-300" />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-cinematic-gold text-cinematic-black font-semibold">
                          Featured Project
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <project.icon className="w-16 h-16 text-cinematic-gold" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-cinematic text-foreground mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground font-tech leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-tech font-semibold text-cinematic-gold mb-3">TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-cinematic-gold/30 text-cinematic-gold"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-sm font-tech font-semibold text-cinematic-gold mb-3">KEY FEATURES</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Play className="w-3 h-3 text-cinematic-gold" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-4">
                      <Button className="bg-cinematic-gold text-cinematic-black hover:bg-cinematic-gold/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="border-cinematic-gold text-cinematic-gold hover:bg-cinematic-gold hover:text-cinematic-black">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};