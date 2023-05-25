'use client';

import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import AudioControls from '@/app/components/audio/AudioControls';
interface AudioVisualizerProps {
  track: string;
  isPlaying: boolean;
  handlePlay: () => void;
  handlePause: () => void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AudioVisualizer({
  track,
  handlePlay,
  handlePause,
  isPlaying,
  setIsPlaying,
}: AudioVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  function onHandlePlay() {
    handlePlay();
    if (setIsPlaying) setIsPlaying(true);
    if (waveSurferRef.current) waveSurferRef.current.play();
  }

  function onHandlePause() {
    handlePause();
    if (setIsPlaying) setIsPlaying(false);
    if (waveSurferRef.current) waveSurferRef.current.pause();
  }

  useEffect(() => {
    if (containerRef.current) {
      const waveSurfer = WaveSurfer.create({
        container: containerRef.current,
        backend: 'WebAudio',
        height: 80,
        barWidth: 1,
        progressColor: '#2D5BFF',
        responsive: true,
        waveColor: '#EFEFEF',
        cursorColor: 'transparent',
      });

      waveSurferRef.current = waveSurfer;

      waveSurfer.load(track);

      waveSurfer.on('ready', () => {
        waveSurferRef.current = waveSurfer;
      });

      return () => {
        waveSurfer.destroy();
      };
    }
  }, [track]);

  return (
    <>
      <AudioControls
        isPlaying={isPlaying}
        handlePlay={onHandlePlay}
        handlePause={onHandlePause}
      />
      <div ref={containerRef}></div>
    </>
  );
}
