import { useState, useRef, useCallback } from 'react';

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/TakeNCS.mp3');
      console.log('Initializing audio:', audioRef.current.src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  const play = useCallback(async () => {
    initializeAudio();
    if (audioRef.current && !isPlaying) {
      try {
        console.log('Attempting to play audio...');
        await audioRef.current.play();
        console.log('Audio playing successfully');
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        console.error('Error playing audio:', error);
        console.error('Audio source:', audioRef.current?.src);
        console.error('Audio readyState:', audioRef.current?.readyState);
      }
    }
  }, [initializeAudio, isPlaying]);

  const pause = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const replay = useCallback(() => {
    initializeAudio();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isPlaying) {
        play();
      }
    }
  }, [initializeAudio, isPlaying, play]);

  return {
    isPlaying,
    hasInteracted,
    play,
    pause,
    toggle,
    replay,
  };
};