import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { LoadingScreen } from '@/components/LoadingScreen';
import { MusicDialog } from '@/components/MusicDialog';
import { BackToTop } from '@/components/BackToTop';
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMusicDialog, setShowMusicDialog] = useState(false);
  const { isPlaying, hasInteracted, play, toggle } = useBackgroundMusic();

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show music dialog after loading is complete
    setTimeout(() => {
      setShowMusicDialog(true);
    }, 500);
  };

  const handleMusicChoice = (allowMusic: boolean) => {
    setShowMusicDialog(false);
    if (allowMusic) {
      play();
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        isPlaying={isPlaying} 
        onToggleMusic={hasInteracted ? toggle : undefined} 
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2024 Nguyễn Bá Hoàng. Crafted with passion for game development.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Additional Components */}
      <BackToTop />
      <MusicDialog 
        isOpen={showMusicDialog} 
        onClose={handleMusicChoice} 
      />
      <Toaster />
    </div>
  );
};

export default Index;
