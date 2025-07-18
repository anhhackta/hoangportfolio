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
  return (
    <div className="fixed bottom-6 left-6 z-50 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-4px]">
      <div className="bg-background/95 backdrop-blur-lg border border-border/50 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
        <div className="flex items-center gap-3">
          <Button
            onClick={onToggle}
            size="sm"
            variant="ghost"
            className="h-9 w-9 rounded-xl hover:bg-primary/20 transition-colors"
            disabled={!hasInteracted}
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
            className="h-9 w-9 rounded-xl hover:bg-primary/20 transition-colors"
            disabled={!hasInteracted}
          >
            <RotateCcw className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
          </Button>
          
          <div className="w-px h-5 bg-border/50 mx-1" />
          
          <div className="flex items-center gap-2">
            {isPlaying ? (
              <Volume2 className="h-4 w-4 text-primary" />
            ) : (
              <VolumeX className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-xs text-muted-foreground font-medium min-w-[24px]">
              {isPlaying ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};