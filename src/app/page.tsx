'use client';

import { useRef } from 'react';
import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import TracksSection from '@/app/components/sections/TracksSection';
import SoundCloudSection from '@/app/components/sections/SoundCloudSection';

export default function Home() {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const tracksSectionRef = useRef(null);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <SoundCloudSection />
    </>
  );
}
