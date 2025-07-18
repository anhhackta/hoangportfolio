import { useEffect, useRef } from 'react';
import { Code, Gamepad2, Wrench, Palette } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-primary to-primary-glow",
      skills: ["C#", "C++", "JavaScript", "Python", "TypeScript", "Java"]
    },
    {
      icon: Gamepad2,
      title: "Game Engines",
      color: "from-secondary to-neon-blue",
      skills: ["Unity", "Unreal Engine", "Godot", "GameMaker Studio"]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      color: "from-accent to-pixel-green",
      skills: ["Visual Studio", "Git", "Blender", "Photoshop", "Figma"]
    },
    {
      icon: Palette,
      title: "Specializations",
      color: "from-cyber-purple to-warning-orange",
      skills: ["Game Design", "3D Modeling", "UI/UX", "Level Design", "Scripting"]
    }
  ];

  const proficiencyLevels = [
    { name: "C#", level: 85, category: "programming" },
    { name: "Unity", level: 90, category: "engine" },
    { name: "C++", level: 75, category: "programming" },
    { name: "Unreal Engine", level: 70, category: "engine" },
    { name: "JavaScript", level: 80, category: "programming" },
    { name: "Game Design", level: 85, category: "design" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/10 to-cyber-purple/10 rounded-full blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-glow">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for creating engaging gaming experiences, 
            from programming fundamentals to advanced game development techniques.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`scroll-fade card-glow group cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="scroll-fade max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 scroll-fade">
          <div className="card-glow max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and trends 
              in game development. Currently exploring advanced shader programming, 
              AI implementation in games, and VR/AR development techniques.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm border border-primary/30">
                🧠 Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-pixel-green/20 rounded-full text-sm border border-accent/30">
                🥽 VR/AR Development
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyber-purple/20 to-warning-orange/20 rounded-full text-sm border border-cyber-purple/30">
                ⚡ Advanced Shaders
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;