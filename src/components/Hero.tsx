import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl float-animation"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-secondary text-lg font-medium">Hey there! 👋</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                I'm{" "}
                <span className="text-glow">
                  Nguyễn Bá Hoàng
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Game Developer & Student
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about creating immersive gaming experiences. Currently studying 
              Game Programming at VTC Academy Đà Nẵng, turning creative ideas into 
              interactive digital worlds.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="hero-button group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="mailto:bahoangcran@gmail.com" 
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/anhhackta/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hoangx2002/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className={`flex justify-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 scale-110"></div>
              <div className="relative overflow-hidden rounded-3xl gradient-border">
                <img
                  src={heroPortrait}
                  alt="Nguyễn Bá Hoàng"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-accent to-secondary px-4 py-2 rounded-full text-sm font-semibold text-accent-foreground float-animation">
                🎮 Game Dev
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-cyber-purple px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground float-animation" style={{ animationDelay: '2s' }}>
                ⚡ VTC Academy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
