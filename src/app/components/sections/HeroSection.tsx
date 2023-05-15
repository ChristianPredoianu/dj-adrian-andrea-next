import Image from 'next/image';
import ProfileImg from '@/app/assets/images/adrian-andrea.png';
import CtaBtn from '@/app/components/buttons/CtaBtn';
import SingleTrackPlayer from '@/app/components/audio/SingleTrackPlayer';

export default function HeroSection() {
  return (
    <>
      <div className='absolute inset-0 h-full w-full bg-black opacity-70'></div>
      <div
        className={`realtive flex min-h-screen w-screen items-center bg-[url(/hero-background.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <div className='absolute bottom-0 right-0 w-2/5 md:w-3/12'>
          <Image
            src={ProfileImg}
            priority={true}
            className='w-full'
            alt='dj adrian andrea'
          />
        </div>
        <section className='container relative mx-auto  flex flex-col gap-24 px-4 text-slate-200'>
          <div className='md:w-3/6'>
            <h1 className='via-42.19% inline-block bg-gradient-to-b from-red-from-gradient/0 from-0% via-red-via-gradient to-red-to-gradient to-100% bg-clip-text text-4xl font-bold text-transparent  lg:text-6xl'>
              Adrian Andrea
            </h1>
            <p className='mt-6 md:text-xl'>
              Introducing the ultimate music experience, brought to you by the one and
              only DJ Adrian Andrea. With a passion for music that spans genres and a
              talent for creating unforgettable sets, Adrian is the go-to DJ for anyone
              looking to take their party to the next level.
            </p>
            <CtaBtn />
          </div>
          <div>
            <p className='text-sm font-bold'>View All Tracks</p>
            <SingleTrackPlayer />
          </div>
        </section>
      </div>
    </>
  );
}
