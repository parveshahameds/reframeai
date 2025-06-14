import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "CineTech Studios",
      location: "Los Angeles, CA",
      period: "2022 - Present",
      description: "Lead development of AI-powered film analysis tools used by major studios. Built computer vision systems for automated shot detection, color grading assistance, and narrative structure analysis.",
      achievements: [
        "Developed real-time shot classification system with 94% accuracy",
        "Led team of 5 engineers in building proprietary film analysis platform",
        "Reduced manual analysis time by 75% for studio partners",
        "Implemented ML models for automated color palette extraction"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "AWS", "Docker"]
    },
    {
      title: "Computer Vision Engineer",
      company: "Visual AI Labs",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      description: "Specialized in developing computer vision algorithms for media analysis. Created deep learning models for content understanding and visual feature extraction.",
      achievements: [
        "Built neural networks for scene segmentation and object tracking",
        "Optimized inference pipelines reducing processing time by 60%",
        "Published 3 research papers on video analysis techniques",
        "Mentored junior engineers in ML best practices"
      ],
      technologies: ["PyTorch", "OpenCV", "Kubernetes", "PostgreSQL", "React"]
    },
    {
      title: "Full-Stack Developer",
      company: "MediaFlow Solutions",
      location: "Austin, TX",
      period: "2018 - 2020",
      description: "Developed web applications for video content management and analysis. Integrated AI services with user-friendly interfaces for non-technical users.",
      achievements: [
        "Built responsive web applications serving 50K+ users",
        "Integrated computer vision APIs with React frontends",
        "Designed database schemas for video metadata storage",
        "Implemented real-time video processing workflows"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-foreground">
            Professional <span className="text-cinematic-gold">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-cinematic-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-tech max-w-3xl mx-auto">
            Building the future of AI-powered film analysis and computer vision
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:border-cinematic-gold/40 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl font-cinematic text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-cinematic-gold">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span className="font-tech font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-tech">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground mt-2 lg:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-tech">{exp.period}</span>
                  </div>
                </div>
                <CardDescription className="text-lg text-muted-foreground font-tech leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-tech font-semibold text-cinematic-gold mb-3">KEY ACHIEVEMENTS</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cinematic-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground font-tech">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-tech font-semibold text-cinematic-gold mb-3">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-cinematic-gold/10 text-cinematic-gold border border-cinematic-gold/30 rounded-full text-sm font-tech"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};