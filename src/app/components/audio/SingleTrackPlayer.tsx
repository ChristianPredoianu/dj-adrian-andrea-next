'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import AudioControls from '@/app/components/audio/AudioControls';
import AudioTime from '@/app/components/audio/AudioTime';
import AudioProgress from '@/app/components/audio/AudioProgress';
import classNames from 'classnames';

interface SingleTrackPlayerProps {
  track: {
    url: string;
    track: string;
    artist: string;
  };
  isTracksSection: boolean;
  isActive: boolean;
  activePlayerHandler: () => void;
}

export default function SingleTrackPlayer({
  track,
  isTracksSection,
  isActive,
  activePlayerHandler,
}: SingleTrackPlayerProps) {
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
    if (audioRef.current) {
      audioRef.current.play();
      activePlayerHandler();
    }

    animationRef.current = requestAnimationFrame(whilePlaying);
  }, []);

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

  function handleOnLoadedMetadata() {
    if (audioRef.current && progressBarRef.current) {
      const seconds = Math.floor(audioRef.current.duration);
      setDuration(seconds);
      progressBarRef.current.max = seconds.toString();
    }
  }

  useEffect(() => {
    isActive ? setIsPlaying(true) : setIsPlaying(false);
  }, [isActive]);

  useEffect(() => {
    isPlaying ? handlePlay() : handlePause();
  }, [isPlaying, handlePlay]);

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
        {track && (
          <audio
            src={track.url}
            id='audio'
            ref={audioRef}
            onLoadedMetadata={handleOnLoadedMetadata}
          />
        )}
        <AudioControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        {!isTracksSection && track && (
          <p className='ml-4 text-xs'>{`${track.track} -${track.artist}`}</p>
        )}
      </div>
      <div
        className={classNames('mt-4 ', {
          'w-full': isTracksSection,
          'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4': !isTracksSection,
        })}
      >
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
