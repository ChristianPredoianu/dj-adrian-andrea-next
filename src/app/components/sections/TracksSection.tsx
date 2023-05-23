'use client';

import { useContext, useLayoutEffect, useRef } from 'react';
import { PlayerContext } from '@/app/store/PlayerContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TrackCard from '@/app/components/cards/TrackCard';
import { tracksArr } from '@/app/utils/tracks';

export default function TracksSections() {
  const { activePlayerId, setActivePlayerId } = useContext(PlayerContext);

  gsap.registerPlugin(ScrollTrigger);

  const main = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let boxes = gsap.utils.selector(main);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          scrub: 1,
          start: '0 80%',
          end: 'bottom 100%',
          markers: true,
        },
      });
      tl.from(boxes('.card'), {
        stagger: 3,
        duration: 3,
        opacity: 0.5,
        y: 20,
        scale: 0.9,
        ease: 'power0',
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

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
        <div
          className='flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:justify-between'
          ref={main}
        >
          {tracks}
        </div>
      </div>
    </section>
  );
}
