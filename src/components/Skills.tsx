import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NumPy", "Pandas", "Computer Vision", "Neural Networks"],
      color: "bg-cinematic-gold/10 text-cinematic-gold border-cinematic-gold/30"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "R"],
      color: "bg-cinematic-blue/10 text-cinematic-blue border-cinematic-blue/30"
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "D3.js", "Three.js"],
      color: "bg-cinematic-silver/10 text-cinematic-silver border-cinematic-silver/30"
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes"],
      color: "bg-cinematic-red/10 text-cinematic-red border-cinematic-red/30"
    },
    {
      title: "Film & Video Analysis",
      skills: ["Cinematography", "Color Theory", "Shot Composition", "Narrative Structure", "Editing Principles", "Visual Storytelling"],
      color: "bg-cinematic-gold/10 text-cinematic-gold border-cinematic-gold/30"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Jupyter", "VS Code", "Figma", "Adobe Creative Suite", "Blender", "FFmpeg", "MLflow"],
      color: "bg-cinematic-blue/10 text-cinematic-blue border-cinematic-blue/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-foreground">
            Technical <span className="text-cinematic-gold">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-cinematic-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-tech max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cinematic analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-cinematic text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} font-tech text-sm py-1 px-3 hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};