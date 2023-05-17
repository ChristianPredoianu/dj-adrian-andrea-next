'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import SingleTrackPlayer from '@/app/components/audio/SingleTrackPlayer';

export default function TrackCard({ track }) {
  const [activePlaying, setActivePlaying] = useState(0);

  const activePlayerHandler = useCallback((id: number) => {
    setActivePlaying(id);
  }, []);

  return (
    <article className='flex w-4/5 flex-col sm:w-3/5 lg:w-2/5 2xl:flex-row'>
      <div className='relative h-80 w-full object-cover '>
        <Image src={track.img} fill priority alt={track.alt} className='object-cover' />
      </div>
      <div className='flex w-full flex-col items-center justify-center bg-slate-950 py-10 shadow-2xl'>
        <h3 className=''>{track.artist}</h3>
        <h4>{track.track}</h4>
        <div className='mt-10 flex flex-1 flex-col items-center'>
          <SingleTrackPlayer
            trackSrc={track.url}
            trackName={track.track}
            artist={track.artist}
            isTracksSection={true}
            activePlayerHandler={activePlayerHandler}
            playing={activePlaying === track.id}
          />
        </div>
      </div>
    </article>
  );
}