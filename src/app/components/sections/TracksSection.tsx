import TrackCard from '@/app/components/cards/TrackCard';
import { tracksArr } from '@/app/utils/tracks';

console.log(tracksArr[0].img);

export default function TracksSections() {
  const tracks = tracksArr.map((track) => <TrackCard key={track.id} track={track} />);

  return (
    <section className='bg-zinc-100  text-slate-200'>
      <div className='container mx-auto px-4 py-16 md:py-32'>
        <h3 className='mb-10  text-3xl text-orange-600'>Tracks</h3>
        <div className='flex flex-wrap items-center justify-between gap-10'>{tracks}</div>
      </div>
    </section>
  );
}
