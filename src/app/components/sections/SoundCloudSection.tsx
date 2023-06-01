'use client';

import { useLayoutEffect, useEffect, useState, useRef, useContext } from 'react';
import { PlayerContext } from '@/app/store/playerContext';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ReactPlayer from 'react-player';
import classes from '@/app/components/sections/SoundCloudReact.module.css';

export default function SoundCloudSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { activePlayerId, setActivePlayerId } = useContext(PlayerContext);

  const soundCloudSectionRef = useRef(null);
  const soundCloudPlayerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: soundCloudSectionRef.current,
          scrub: 1,
          start: '0 80%',
          end: 'bottom 100%',
        },
      });

      tl.from(soundCloudPlayerRef.current, { ease: 'power0.out', scale: 1.1 });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      className='bg-primary-color text-font-dark dark:bg-primary-color-dark dark:text-font-light'
      id='soundcloud'
      ref={soundCloudSectionRef}
    >
      <div className='container mx-auto px-4 py-16 md:py-32'>
        <h3 className='mb-10 text-center text-3xl text-font-dark dark:text-font-light'>
          Soundcloud
        </h3>
        <div className='mt-20 xl:px-96' ref={soundCloudPlayerRef}>
          {isLoaded ? (
            <div className={classes.playerWrapper}>
              <ReactPlayer
                url='https://soundcloud.com/adrianandrea'
                playing={activePlayerId === 7 ? true : false}
                className={classes.reactPlayer}
                width='100%'
                height='100%'
                onPlay={() => setActivePlayerId(7)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
