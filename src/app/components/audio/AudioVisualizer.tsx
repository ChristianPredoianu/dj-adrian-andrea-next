'use client';

import React, { useEffect, useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import AudioControls from '@/app/components/audio/AudioControls';
import AudioTime from '@/app/components/audio/AudioTime';
import classNames from 'classnames';

interface AudioVisualizerProps {
  track: {
    url: string;
    track: string;
    artist: string;
  };
  isPlaying: boolean;
  isTracksSection: boolean;
  activePlayerHandler: () => void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AudioVisualizer({
  track,
  isPlaying,
  isTracksSection,
  setIsPlaying,
  activePlayerHandler,
}: AudioVisualizerProps) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isAudioLoaded, setIsAudioLoaded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const gradientRef = useRef<CanvasGradient | null>(null);

  useEffect(() => {
    const ctx = document.createElement('canvas').getContext('2d');

    if (ctx) {
      let gradient: CanvasGradient;

      gradient = ctx.createLinearGradient(0, 0, 0, 150);
      gradient.addColorStop(0, 'rgb(186, 181, 181)');
      gradient.addColorStop(0.7, 'rgb(242, 5, 5)');
      gradient.addColorStop(1, 'rgb(242, 5, 5)');

      gradientRef.current = gradient;
    }
  }, []);

  function handlePlay() {
    activePlayerHandler();
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  useEffect(() => {
    if (containerRef.current && gradientRef.current) {
      const waveSurfer = WaveSurfer.create({
        container: containerRef.current,
        backend: 'WebAudio',
        height: 80,
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
        progressColor: '#a6a9ad',
        responsive: true,
        waveColor: gradientRef.current,
        cursorColor: 'transparent',
      });

      waveSurferRef.current = waveSurfer;

      waveSurfer.load(track.url);

      waveSurfer.on('ready', () => {
        setIsAudioLoaded(true);
        setDuration(waveSurfer.getDuration());
      });

      waveSurfer.on('click', () => {
        setCurrentTime(waveSurfer.getCurrentTime());
      });

      waveSurfer.on('audioprocess', () => {
        setCurrentTime(waveSurfer.getCurrentTime());
      });

      return () => {
        waveSurfer.destroy();
      };
    }
  }, [track, gradientRef]);

  useEffect(() => {
    if (isPlaying && waveSurferRef.current) {
      waveSurferRef.current.play();
    } else if (!isPlaying && waveSurferRef.current) {
      waveSurferRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {!isAudioLoaded && <LoadingSpinner />}
      {isAudioLoaded && (
        <AudioControls
          track={track}
          isPlaying={isPlaying}
          isTracksSection={isTracksSection}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      )}
      <div ref={containerRef}></div>
      {isAudioLoaded && (
        <div className={classNames('mt-2', { 'ml-2 mt-4': isTracksSection })}>
          <AudioTime currentTime={currentTime} duration={duration} />
        </div>
      )}
    </>
  );
}
