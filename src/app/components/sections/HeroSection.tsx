import Image from 'next/image';
import BackgroundImg from '../../../../public/hero-background.jpg';
import ProfileImg from '@/app/assets/images/adrian-andrea.png';

export default function HeroSection() {
  return (
    <>
      <div className='absolute inset-0 h-full w-full bg-black opacity-70'></div>
      <div
        className={`realtive h-screen w-screen bg-[url(/hero-background.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <div className='absolute bottom-0 right-0 w-2/5 md:w-3/12'>
          <Image
            src={ProfileImg}
            priority={true}
            className='w-full'
            alt='dj adrian andrea'
          />
        </div>
      </div>
    </>
  );
}
