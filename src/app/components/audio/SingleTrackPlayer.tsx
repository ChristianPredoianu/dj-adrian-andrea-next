'use client';

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function SingleTrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  function playTrack() {
    if (audioRef) {
      audioRef.current.play();
    }
  }

  return (
    <div className='mt-6 flex items-center'>
      <audio src='@/app/assets/audio/avex.mp3' id='audio' ref={audioRef} />
      <FontAwesomeIcon icon={faPlayCircle} className='text-4xl text-red-600' />
      <p className='ml-4 text-xs'>Bunker (Original Mix) -M5</p>
    </div>
  );
}
