'use client';

import { useState, useEffect } from 'react';
import AudioVisualizer from '@/app/components/audio/AudioVisualizer';
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
        <div className='relative mt-6'>
          <div className='absolute -top-2 left-8 mt-4'>
            {!isTracksSection && track && (
              <p className='ml-4 text-xs'>{`${track.track} -${track.artist}`}</p>
            )}
          </div>
          <AudioVisualizer
            track={track.url}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            activePlayerHandler={activePlayerHandler}
            isTracksSection={isTracksSection}
          />
        </div>
      </div>
    </>
  );
}
