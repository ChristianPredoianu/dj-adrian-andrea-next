'use client';

import { useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TrackCard from '@/app/components/cards/TrackCard';
import { tracksArr } from '@/app/utils/tracks';

export default function TracksSections() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let cards = gsap.utils.selector(sectionRef);
      const heading = headingRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
          start: '0 80%',
          end: 'bottom 100%',
        },
      });

      tl.from(heading, { ease: 'power0.out', y: 100 });
      tl.from(cards('.card'), {
        stagger: 3,
        duration: 3,
        opacity: 0.5,
        y: 20,
        scale: 0.9,
        ease: 'power0',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const tracks = tracksArr.map((track) => <TrackCard key={track.id} track={track} />);

  return (
    <section className='bg-zinc-200 text-slate-200 dark:bg-stone-950' ref={sectionRef}>
      <div className='container mx-auto px-4 py-16 md:py-32'>
        <h3
          className='mb-10 text-3xl text-slate-800 dark:text-slate-300'
          ref={headingRef}
        >
          Tracks
        </h3>
        <div className='flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:justify-between'>
          {tracks}
        </div>
      </div>
    </section>
  );
}
