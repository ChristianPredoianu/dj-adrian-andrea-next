import { forwardRef, useContext } from 'react';
import Image from 'next/image';
import { PlayerContext } from '@/app/store/playerContext';
import SingleTrackPlayer from '@/app/components/audio/SingleTrackPlayer';

interface TrackCardProps {
  track: {
    artist: string;
    img: string;
    url: string;
    track: string;
    alt: string;
    id: number;
  };
}

export default forwardRef<HTMLElement, TrackCardProps>(function TrackCard(
  { track },
  ref
) {
  const { activePlayerId, setActivePlayerId } = useContext(PlayerContext);

  return (
    <article
      className='card flex w-full flex-col bg-slate-950 text-font-light sm:w-3/5 lg:w-2/5 2xl:flex-row'
      ref={ref}
    >
      <div className='relative h-40 w-full object-cover 2xl:h-auto '>
        <Image
          src={track.img}
          fill
          priority
          alt={track.alt}
          className='relative object-cover'
        />
      </div>
      <div className='flex w-full flex-col items-center bg-slate-950 py-10 shadow-2xl dark:bg-sky-950'>
        <h3 className='text-center text-xl'>{track.artist}</h3>
        <h4 className='mt-2'>{track.track}</h4>
        <div className='flex w-full flex-col items-center justify-center'>
          <SingleTrackPlayer
            track={track}
            isTracksSection={true}
            activePlayerHandler={() => setActivePlayerId(track.id)}
            isActive={activePlayerId === track.id}
          />
        </div>
      </div>
    </article>
  );
});
