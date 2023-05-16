'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import AudioControls from '@/app/components/audio/AudioControls';
import AudioTime from '@/app/components/audio/AudioTime';
import AudioProgress from '@/app/components/audio/AudioProgress';

export default function SingleTrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number>();

  const changePlayerCurrentTime = useCallback(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.setProperty(
        '--seek-before-width',
        `${(+progressBarRef.current.value / duration) * 100}%`
      );
      setCurrentTime(+progressBarRef.current.value);
    }
  }, [duration]);

  const whilePlaying = useCallback(() => {
    if (progressBarRef.current && audioRef.current) {
      progressBarRef.current.value = audioRef.current.currentTime.toString();
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [changePlayerCurrentTime]);

  const handlePlay = useCallback(() => {
    if (audioRef.current) audioRef.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }, [whilePlaying]);

  function handlePause() {
    if (audioRef.current) audioRef.current.pause();
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  }

  function handleChangeRange() {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = +progressBarRef.current.value;
      changePlayerCurrentTime();
    }
  }

  useEffect(() => {
    isPlaying ? handlePlay() : handlePause();
  }, [isPlaying, handlePlay]);

  useEffect(() => {
    if (audioRef.current && progressBarRef.current) {
      const seconds = Math.floor(audioRef.current.duration);
      setDuration(seconds);
      progressBarRef.current.max = seconds.toString();
    }
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState]);

  useEffect(() => {
    if (currentTime === duration) {
      setIsPlaying(false);
      if (audioRef.current && progressBarRef.current) {
        audioRef.current.currentTime = 0;
        progressBarRef.current.value = '0';
        setCurrentTime(0);
      }
    }
  }, [currentTime, duration]);

  return (
    <>
      <div className='mt-4 flex items-center'>
        <audio src='/avex.mp3' id='audio' ref={audioRef} />
        <AudioControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <p className='ml-4 text-xs'>Bunker (Original Mix) -M5</p>
      </div>
      <div className='mt-4 w-4/5  sm:w-3/5 md:w-2/5 lg:w-1/4'>
        <AudioProgress ref={progressBarRef} onChange={handleChangeRange} />
      </div>

      <div className='mt-2 flex gap-2'>
        <AudioTime time={currentTime} />
        <p className='text-xs'>/</p>
        {duration && !isNaN(duration) && <AudioTime time={duration} />}
      </div>
    </>
  );
}
