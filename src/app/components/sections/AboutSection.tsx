'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import MixingImg from '@/app/assets/images/mixing.jpg';
import SocialMediaIcons from '@/app/components/ui/SocialMediaIcons';

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  const aboutSectionRef = useRef(null);
  const aboutHeadingRef = useRef(null);
  const imgRef = useRef(null);
  const paragraphRef = useRef(null);
  const socialMediaRef = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    const aboutHeading = aboutHeadingRef.current;
    const aboutSection = aboutSectionRef.current;
    const img = imgRef.current;
    const paragraph = paragraphRef.current;
    const socialMedia = socialMediaRef.current;

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: aboutSection,
          scrub: 1,
          start: '0 80%',
          end: 'bottom 100%',
        },
      });
      tl.from(aboutHeading, { ease: 'power0.out', y: 100 });
      tl.from(img, { ease: 'power0.out', y: 100 });
      tl.from(paragraph, { ease: 'power0.out', y: 100, opacity: 0 });
      tl.from(socialMedia, { ease: 'power0.out', y: 100, opacity: 0 });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      className='bg-primary-color text-font-dark dark:bg-primary-color-dark dark:text-font-light'
      ref={aboutSectionRef}
      id='about'
    >
      <div className='container mx-auto px-4 py-16 md:py-32'>
        <h2 className='text-3xl' ref={aboutHeadingRef}>
          About me
        </h2>
        <div className='mt-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-20'>
          <div className=' w-full shadow-2xl lg:w-3/5 xl:w-auto' ref={imgRef}>
            <Image src={MixingImg} className='w-full' alt='dj mixing' />
          </div>

          <p className='leading-8 lg:w-fit lg:text-lg' ref={paragraphRef}>
            {`Adrian's background in music begins at an early age. At the age of seven he started playing drums. This led on to a specialized secondary school for young musicians.
            His passion for music led him on to start spinning discs at the beginning of the millennium and he has played at various venues such as large clubs to private parties. After his little tour with Victoria's Secret Sweden, he moved to Barcelona to evolve his DJ'ing.
            At this moment he has experience from Sweden, Romania, Spain, Algeria and Greece, where he had a residency on the sunny island of Rhodes and later returned to Malmö, Sweden where he is now one of the most reknown underground DJ's having played 'Basement', 'Nachtwaker', 'City to City' and 'Serious Fun'.
            Adrian has been a resident DJ for almost two years on the world known radio station www.oneundergroundradio.com every sunday evening, and now also on Germany's biggest community for electronic music, http://www.w-baselounge.de/ where his fine sets are played on friday evenings.
            Adrian's style is sophisticated in the genre of House and his style is rhythmic and groovy with a touch of funk, tribal, deep and tech.`}
          </p>
        </div>
        <div className='mt-10' ref={socialMediaRef}>
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
}
