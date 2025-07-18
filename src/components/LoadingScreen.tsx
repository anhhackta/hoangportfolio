import { useEffect, useState } from 'react';
import { Code2, Gamepad2, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    'Loading Assets...',
    'Compiling Shaders...',
    'Starting Portfolio...',
    'Hoàng đang ngủ...',
  ];

  const icons = [Code2, Gamepad2, Cpu];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl bg-primary/20 border border-primary/30 animate-pulse`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon className="h-8 w-8 text-primary" />
            </div>
          ))}
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-glow">Loading Portfolio</h2>
          <p className="text-muted-foreground text-lg animate-fade-in">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-primary rounded-full transition-all duration-300 ease-out shadow-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-sm text-muted-foreground font-mono">
          {Math.round(progress)}%
        </p>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
