'use client';

import { useRef, useState, useEffect } from 'react';
import AudioProgress from '@/app/components/audio/AudioProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

export default function SingleTrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  function handlePlay() {
    if (audioRef.current) audioRef.current.play();
  }

  function handlePause() {
    if (audioRef.current) audioRef.current.pause();
  }

  function handleCurrentTime() {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  }

  function calculateTime(secs: number) {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  }

  useEffect(() => {
    isPlaying ? handlePlay() : handlePause();
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current && progressBarRef.current) {
      const seconds = Math.floor(audioRef.current.duration);
      setDuration(seconds);

      if (progress >= 100) {
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
      }
    }
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState, progress]);

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  let playPauseControls;

  if (!isPlaying) {
    playPauseControls = (
      <FontAwesomeIcon
        icon={faPlayCircle}
        className='text-4xl text-red-600'
        onClick={() => setIsPlaying(true)}
      />
    );
  } else {
    playPauseControls = (
      <FontAwesomeIcon
        icon={faPauseCircle}
        className='text-4xl text-red-600'
        onClick={() => setIsPlaying(false)}
      />
    );
  }

  return (
    <>
      <div className='mt-6 flex items-center'>
        <audio
          src='/avex.mp3'
          id='audio'
          ref={audioRef}
          onTimeUpdate={handleCurrentTime}
        />
        {playPauseControls}
        <p className='ml-4 text-xs'>Bunker (Original Mix) -M5</p>
      </div>
      <div className='progress'>
        <span className='time current'>{calculateTime(currentTime)}</span>
        <AudioProgress ref={progressBarRef} progress={progress} />
        {/*  <div className='relative h-2 w-3/6 bg-red-500' ref={progressBarRef}>
          <div className='absolute h-2 bg-white' style={{ width: progress + '%' }}></div>
        </div> */}
        <span className='time'>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </span>
      </div>
    </>
  );
}
