import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Mystic Realms",
      category: "RPG Adventure",
      description: "An immersive 3D RPG featuring dynamic combat, character progression, and a rich fantasy world. Built with Unity and C#.",
      tech: ["Unity", "C#", "Blender", "Photoshop"],
      status: "In Development",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&crop=center",
      color: "from-primary to-secondary"
    },
    {
      title: "Neon Runner",
      category: "Arcade Action",
      description: "Fast-paced cyberpunk endless runner with procedural level generation and electronic soundtrack integration.",
      tech: ["Unity", "C#", "Shader Graph", "FMOD"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      color: "from-secondary to-accent"
    },
    {
      title: "Puzzle Matrix",
      category: "Logic Puzzle",
      description: "Mind-bending 3D puzzle game with gravity manipulation mechanics and minimalist aesthetic design.",
      tech: ["Unreal Engine", "C++", "Blueprint"],
      status: "Prototype",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&crop=center",
      color: "from-accent to-cyber-purple"
    },
    {
      title: "Village Simulator",
      category: "Strategy Simulation",
      description: "Medieval village building and management game with realistic economic systems and weather effects.",
      tech: ["Unity", "C#", "AI Navigation", "Custom Tools"],
      status: "Planning",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      color: "from-cyber-purple to-warning-orange"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-pixel-green";
      case "In Development": return "text-secondary";
      case "Prototype": return "text-warning-orange";
      case "Planning": return "text-cyber-purple";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/5 to-cyber-purple/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my creative journey through interactive experiences, 
            from concept to playable prototypes and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`scroll-fade group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-card/80 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="card-glow border-t-0 rounded-t-none">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="scroll-fade">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Projects Completed", value: "8+" },
              { label: "Technologies Used", value: "15+" },
              { label: "Lines of Code", value: "50K+" },
              { label: "Study Hours", value: "500+" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-glow mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 scroll-fade text-center">
          <div className="card-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and learn from experienced developers. 
              Let's create something amazing together!
            </p>
            <Button 
              className="hero-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;