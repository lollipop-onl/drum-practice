import { useCallback, useEffect, useState } from "react";

const audioContext = new AudioContext();

export const useMetronome = (bpm: number, resolution: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sixteenNotes, setSixteenNotes] = useState(0);

  const start = useCallback(() => {
    setSixteenNotes(0);

    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (resolution === '8' && sixteenNotes % 2) return;
    if (resolution === '4' && sixteenNotes % 4) return;
    
    const frequency = sixteenNotes % 16 === 0 ? 880 : sixteenNotes % 4 === 0 ? 440 : 220;
    const oscillator = new OscillatorNode(audioContext, { frequency });

    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  }, [resolution, sixteenNotes]);

  useEffect(() => {
    if (!isPlaying) return;

    const timeout = (60 / bpm) * 1000 / 4;

    const timer = setInterval(() => {
      setSixteenNotes((prev) => (prev + 1) % 16);
    }, timeout);

    return () => clearInterval(timer);
  }, [isPlaying, bpm]);

  return { start, stop, isPlaying, sixteenNotes };
};
