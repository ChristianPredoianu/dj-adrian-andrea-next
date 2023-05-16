import Image from 'next/image';
import MixingImg from '@/app/assets/images/mixing.jpg';
import SocialMediaIcons from '@/app/components/ui/SocialMediaIcons';

export default function AboutSection() {
  return (
    <section className='bg-zinc-300'>
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <h2 className='text-3xl text-slate-800'>About me</h2>
        <div className='mt-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-20'>
          <div className=' w-full shadow-2xl lg:w-3/5 xl:w-auto'>
            <Image src={MixingImg} className='w-full' alt='dj mixing' />
          </div>

          <p className='text-slate-800 lg:w-fit'>
            My name is Adrian Andrea, and I'm a DJ with a passion for music and a love for
            entertaining. Ever since I was young, I've been fascinated by the power of
            music to bring people together and create unforgettable experiences. From
            classic rock to electronic dance music, I've always had an eclectic taste and
            an open mind when it comes to exploring different genres. Over the years, I've
            honed my skills as a DJ and developed a unique style that blends different
            sounds and rhythms to create a vibe that's all my own. Whether I'm playing to
            a packed dancefloor or setting the mood for a more intimate setting, I'm
            always focused on creating an atmosphere that's fun, engaging, and
            unforgettable. But being a DJ isn't just about playing music - it's about
            connecting with people and creating a sense of community. That's why I always
            make an effort to engage with my audience and create a sense of shared
            experience. Whether it's through call-and-response chants, shoutouts, or just
            having a conversation between sets, I'm always looking for ways to connect
            with my listeners and make them feel like they're part of the experience.
            Ultimately, my goal as a DJ is to spread the joy of music and bring people
            together through the power of sound. Whether you're a die-hard fan or a
            first-time listener, I hope you'll join me on this journey and experience the
            magic for yourself. Thank you for visiting my website, and I can't wait to see
            you on the dancefloor!
          </p>
        </div>
        <div className='mt-10'>
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
}
