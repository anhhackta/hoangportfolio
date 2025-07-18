import { useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface MusicDialogProps {
  isOpen: boolean;
  onClose: (allowMusic: boolean) => void;
}

export const MusicDialog = ({ isOpen, onClose }: MusicDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose(false)}>
      <DialogContent className="sm:max-w-md border-border/50 bg-background/95 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Music className="h-6 w-6 text-primary" />
            Background Music
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Would you like to enable background music for an enhanced experience?
            <br />
            <span className="text-sm italic mt-2 block">
              "Andromedik & Used – Take Me"
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex gap-3 mt-6">
          <Button
            onClick={() => onClose(true)}
            className="flex-1 gap-2"
            variant="default"
          >
            <Volume2 className="h-4 w-4" />
            Yes, Enable Music
          </Button>
          <Button
            onClick={() => onClose(false)}
            className="flex-1 gap-2"
            variant="outline"
          >
            <VolumeX className="h-4 w-4" />
            No Thanks
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-2">
          You can toggle music anytime using the controls in the navigation
        </p>
      </DialogContent>
    </Dialog>
  );
};