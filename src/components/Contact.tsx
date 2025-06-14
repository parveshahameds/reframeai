import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@filmai.dev",
      href: "mailto:contact@filmai.dev"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Los Angeles, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-cinematic-silver"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-cinematic-blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-cinematic-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-foreground">
            Let's <span className="text-cinematic-gold">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-cinematic-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-tech max-w-3xl mx-auto">
            Ready to collaborate on the next breakthrough in AI-powered film analysis? Let's discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-cinematic font-semibold mb-6 text-cinematic-gold">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground font-tech leading-relaxed mb-8">
                Whether you're looking to build AI-powered film analysis tools, explore computer vision applications, 
                or discuss opportunities in the intersection of technology and cinema, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-cinematic-gold/20 bg-card hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-cinematic-gold/10 rounded-lg group-hover:bg-cinematic-gold/20 transition-colors duration-200">
                        <info.icon className="w-5 h-5 text-cinematic-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-tech">{info.label}</p>
                        <p className="text-foreground font-tech font-medium group-hover:text-cinematic-gold transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-cinematic font-semibold mb-4 text-foreground">Follow My Work</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`border-cinematic-gold/30 text-cinematic-gold ${social.color} hover:border-current transition-all duration-200`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="animate-fade-in">
            <Card className="border-cinematic-gold/30 bg-gradient-to-br from-card to-card/50 h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-cinematic-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-cinematic-gold" />
                    </div>
                    <h3 className="text-2xl font-cinematic font-semibold mb-4 text-foreground">
                      Ready to Build Something Amazing?
                    </h3>
                    <p className="text-muted-foreground font-tech mb-8 leading-relaxed">
                      Let's collaborate on innovative AI solutions that push the boundaries of film analysis and computer vision.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      className="w-full bg-cinematic-gold text-cinematic-black hover:bg-cinematic-gold/90 font-semibold"
                      asChild
                    >
                      <a href="mailto:contact@filmai.dev">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full border-cinematic-gold text-cinematic-gold hover:bg-cinematic-gold hover:text-cinematic-black"
                    >
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};