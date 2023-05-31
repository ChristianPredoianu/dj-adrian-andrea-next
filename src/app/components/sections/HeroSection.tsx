'use client';

import Image from 'next/image';
import { useContext, useRef, useLayoutEffect } from 'react';
import { PlayerContext } from '@/app/store/playerContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProfileImg from '@/app/assets/images/adrian-andrea.png';
import CtaBtn from '@/app/components/buttons/CtaBtn';
import SingleTrackPlayer from '@/app/components/audio/SingleTrackPlayer';

export default function HeroSection() {
  const { activePlayerId, setActivePlayerId } = useContext(PlayerContext);

  gsap.registerPlugin(ScrollTrigger);

  const profileImgRef = useRef(null);

  useLayoutEffect(() => {
    const profileImg = profileImgRef.current;

    let ctx = gsap.context(() => {
      gsap.from(profileImg, {
        opacity: 0,
        duration: 3,
        ease: 'power0.out',
      });
    }, profileImgRef);

    return () => ctx.revert();
  }, []);

  const heroTrack = {
    url: '/avex.mp3',
    track: 'Bunker (Original Mix)',
    artist: 'M5',
  };
  return (
    <>
      <div
        className={`relative flex min-h-screen items-center bg-[url(/hero-background.jpg)] bg-cover bg-center bg-no-repeat `}
      >
        <div className='absolute inset-0 min-h-screen bg-slate-950 opacity-70 dark:bg-black'></div>
        <section className='container relative mx-auto mt-20 flex flex-col gap-10 px-4 pb-10 text-slate-200 md:gap-24 md:pb-0'>
          <div className='md:w-3/6'>
            <h1 className='via-42.19% inline-block bg-gradient-to-b from-red-from-gradient/0 from-0% via-red-via-gradient to-red-to-gradient to-100% bg-clip-text text-4xl font-bold text-transparent lg:text-6xl'>
              Adrian Andrea
            </h1>
            <p className='mt-6 text-sm md:text-xl'>
              Introducing the ultimate music experience, brought to you by the one and
              only DJ Adrian Andrea. With a passion for music that spans genres and a
              talent for creating unforgettable sets, Adrian is the go-to DJ for anyone
              looking to take their party to the next level.
            </p>
            <CtaBtn />
          </div>
          <div>
            <p className='text-xs font-bold'>View All Tracks</p>
            <SingleTrackPlayer
              track={heroTrack}
              isTracksSection={false}
              //0 because when mapping trackCard first track has an id of 1
              activePlayerHandler={() => setActivePlayerId(0)}
              isActive={activePlayerId === 0}
            />
          </div>
        </section>
        <div className='absolute bottom-0 right-0 z-40 w-2/6 md:w-3/12'>
          <Image src={ProfileImg} alt='dj adrian andrea' ref={profileImgRef} />
        </div>
      </div>
    </>
  );
}
