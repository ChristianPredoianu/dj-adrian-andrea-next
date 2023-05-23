'use client';

import { useContext } from 'react';
import { PlayerContext } from '@/app/store/PlayerContext';
import TrackCard from '@/app/components/cards/TrackCard';
import { tracksArr } from '@/app/utils/tracks';

export default function TracksSections() {
  const { activePlayerId, setActivePlayerId } = useContext(PlayerContext);

  const tracks = tracksArr.map((track) => (
    <TrackCard
      key={track.id}
      track={track}
      activePlayerHandler={() => setActivePlayerId(track.id)}
      isActive={activePlayerId === track.id}
    />
  ));

  return (
    <section className='bg-zinc-100  text-slate-200'>
      <div className='container mx-auto px-4 py-16 md:py-32'>
        <h3 className='mb-10 text-3xl text-slate-800'>Tracks</h3>
        <div className='flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:justify-between'>
          {tracks}
        </div>
      </div>
    </section>
  );
}
