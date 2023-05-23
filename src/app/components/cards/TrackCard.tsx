import { forwardRef } from 'react';
import Image from 'next/image';
import SingleTrackPlayer from '@/app/components/audio/SingleTrackPlayer';

interface TrackCardProps {
  track: {
    artist: string;
    img: string;
    url: string;
    track: string;
    alt: string;
  };
  activePlayerHandler: () => void;
  isActive: boolean;
}

export default forwardRef<HTMLElement, TrackCardProps>(function TrackCard(
  { track, isActive, activePlayerHandler },
  ref
) {
  return (
    <article
      className='card flex w-4/5 flex-col sm:w-3/5 lg:w-2/5 2xl:flex-row'
      ref={ref}
    >
      <div className='relative h-80 w-full object-cover '>
        <Image src={track.img} fill priority alt={track.alt} className='object-cover' />
      </div>
      <div className='flex w-full flex-col items-center justify-center bg-slate-950 py-10 shadow-2xl'>
        <h3 className='text-center text-xl'>{track.artist}</h3>
        <h4 className='mt-2 text-gray-300'>{track.track}</h4>
        <div className='mt-10 flex flex-1 flex-col items-center'>
          <SingleTrackPlayer
            track={track}
            isTracksSection={true}
            activePlayerHandler={() => activePlayerHandler()}
            isActive={isActive}
          />
        </div>
      </div>
    </article>
  );
});
