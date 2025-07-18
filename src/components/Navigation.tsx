import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail, Volume2, VolumeX } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isPlaying?: boolean;
  onToggleMusic?: () => void;
}

const Navigation = ({ isPlaying = false, onToggleMusic }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', '') || 'home');
      const currentSection = sections.find(section => {
        const element = section === 'home' ? 
          document.body : 
          document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="font-bold text-xl cursor-pointer text-glow"
              onClick={() => scrollToSection('#')}
            >
              NBH
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium relative ${
                    activeSection === (item.href.replace('#', '') || 'home')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.name}
                  {activeSection === (item.href.replace('#', '') || 'home') && (
                    <span className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" />
                  )}
                </button>
              ))}
              
              {/* Music Toggle */}
              {onToggleMusic && (
                <Button
                  onClick={onToggleMusic}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 rounded-full border border-border/50 hover:bg-accent/50"
                >
                  {isPlaying ? (
                    <Volume2 className="h-4 w-4 text-primary" />
                  ) : (
                    <VolumeX className="h-4 w-4" />
                  )}
                </Button>
              )}
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/95 backdrop-blur-lg border-t border-border/50">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === (item.href.replace('#', '') || 'home')
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
                
                {/* Mobile Controls */}
                <div className="flex gap-2 px-4 pt-2">
                  {onToggleMusic && (
                    <Button
                      onClick={onToggleMusic}
                      variant="ghost"
                      size="sm"
                      className="flex-1 gap-2"
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="h-4 w-4" />
                          Music On
                        </>
                      ) : (
                        <>
                          <VolumeX className="h-4 w-4" />
                          Music Off
                        </>
                      )}
                    </Button>
                  )}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === (item.href.replace('#', '') || 'home')
                  ? 'bg-primary scale-125 shadow-glow'
                  : 'bg-muted-foreground/50 hover:bg-primary/50 hover:scale-110'
              }`}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;