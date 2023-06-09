'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import classNames from 'classnames';

const AudioVisualizer = dynamic(() => import('@/app/components/audio/AudioVisualizer'), {
  ssr: false,
});

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

  useEffect(() => {
    isActive ? setIsPlaying(true) : setIsPlaying(false);
  }, [isActive]);

  return (
    <>
      <div
        className={classNames('mt-4 ', {
          'w-full': isTracksSection,
          'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4': !isTracksSection,
        })}
      ></div>
      <div
        className={classNames('w-full md:w-3/4', {
          'w-full md:w-full': isTracksSection,
        })}
      >
        <AudioVisualizer
          track={track}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          activePlayerHandler={activePlayerHandler}
          isTracksSection={isTracksSection}
        />
      </div>
    </>
  );
}
