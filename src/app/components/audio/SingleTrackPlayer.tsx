'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
/* import AudioControls from '@/app/components/audio/AudioControls'; */
import AudioVisualizer from '@/app/components/audio/audio-visualizer/AudioVisualizer';
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

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = useCallback(() => {
    /*    audioRef.current.play(); */
    activePlayerHandler();
  }, [activePlayerHandler]);

  function handlePause() {
    if (audioRef.current) audioRef.current.pause();
  }

  useEffect(() => {
    isActive ? setIsPlaying(true) : setIsPlaying(false);
  }, [isActive]);

  useEffect(() => {
    isPlaying ? handlePlay() : handlePause();
  }, [isPlaying, handlePlay]);

  return (
    <>
      <div className=' items-center mt-4 flex '>
        {/*  {track && <audio src={track.url} id='audio' ref={audioRef} />} */}
        {/*  <AudioControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
        {!isTracksSection && track && (
          <p className='ml-4 text-xs'>{`${track.track} -${track.artist}`}</p>
        )}
      </div>
      <div
        className={classNames('mt-4 ', {
          'w-full': isTracksSection,
          'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4': !isTracksSection,
        })}
      ></div>
      <div className='mt-6 w-full'>
        <AudioVisualizer
          track={track.url}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      </div>
    </>
  );
}
