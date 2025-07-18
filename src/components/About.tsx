import { useEffect, useRef } from 'react';
import { Calendar, MapPin, GraduationCap, User } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const highlights = [
    {
      icon: User,
      label: "Full Name",
      value: "Nguyễn Bá Hoàng",
      color: "text-primary"
    },
    {
      icon: Calendar,
      label: "Born",
      value: "June 20, 2002",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "From",
      value: "Quảng Nam, Vietnam",
      color: "text-accent"
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "VTC Academy Đà Nẵng",
      color: "text-cyber-purple"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-cyber-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="scroll-fade">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-glow">Me</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate game development student from the beautiful province of 
                  <span className="text-accent font-semibold"> Quảng Nam, Vietnam</span>. 
                  Born on June 20, 2002, I've always been fascinated by the intersection 
                  of technology and creativity.
                </p>
                <p>
                  Currently pursuing my studies in 
                  <span className="text-primary font-semibold"> Game Programming</span> at 
                  VTC Academy Đà Nẵng, I'm dedicated to mastering the art and science of 
                  creating immersive gaming experiences.
                </p>
                <p>
                  My journey in game development is driven by a desire to create worlds 
                  that inspire, challenge, and entertain players. I believe games have 
                  the unique power to tell stories, solve problems, and bring people together.
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`scroll-fade card-glow group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br from-muted to-muted/50 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Highlight */}
        <div className="mt-16 scroll-fade">
          <div className="card-glow max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Current Education</h3>
              <p className="text-muted-foreground">Shaping the future of gaming</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-glow">
                Game Programming / Game Development
              </h4>
              <p className="text-lg text-muted-foreground">
                VTC Academy Đà Nẵng
              </p>
              <a 
                href="https://vtc.edu.vn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
              >
                Visit VTC Academy →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;