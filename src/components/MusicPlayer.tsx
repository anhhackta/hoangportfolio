import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  onReplay: () => void;
  hasInteracted: boolean;
}

export const MusicPlayer = ({ 
  isPlaying, 
  onToggle, 
  onReplay, 
  hasInteracted 
}: MusicPlayerProps) => {
  if (!hasInteracted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="bg-background/95 backdrop-blur-lg border border-border/50 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2">
          <Button
            onClick={onToggle}
            size="sm"
            variant="ghost"
            className="h-8 w-8 rounded-lg hover:bg-primary/20 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-primary" />
            ) : (
              <Play className="h-4 w-4 text-primary" />
            )}
          </Button>
          
          <Button
            onClick={onReplay}
            size="sm"
            variant="ghost"
            className="h-8 w-8 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <RotateCcw className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
          </Button>
          
          <div className="w-px h-4 bg-border/50 mx-1" />
          
          <div className="flex items-center gap-1">
            {isPlaying ? (
              <Volume2 className="h-3 w-3 text-primary" />
            ) : (
              <VolumeX className="h-3 w-3 text-muted-foreground" />
            )}
            <span className="text-xs text-muted-foreground font-medium">
              {isPlaying ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};