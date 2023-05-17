import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import TracksSection from '@/app/components/sections/TracksSection';
import SoundCloudSection from '@/app/components/sections/SoundCloudSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TracksSection />
      {/* <SoundCloudSection /> */}
    </>
  );
}
