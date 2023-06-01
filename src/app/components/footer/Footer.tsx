import NavLogo from '@/app/components/nav/NavLogo';
import SocialMediaIcons from '@/app/components/ui/SocialMediaIcons';

export default function Footer() {
  return (
    <footer className='bg-black py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-6'>
          <NavLogo isNav={false} />
          <SocialMediaIcons />
        </div>
        <div className='mt-6 flex flex-col items-center md:flex-row md:justify-between'>
          <div className='text-center text-xs text-gray-600'>
            <p>Credits:</p>
            <a
              href='https://wavesurfer-js.org/'
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <p className='transition-duration: 150ms mt-1 cursor-pointer transition-colors hover:text-red-800'>
                WaveSurfer.js
              </p>
            </a>
          </div>
          <div className='text-center text-xs text-gray-600'>
            <p>Copyright &copy;</p>
            <a
              href='https://github.com/ChristianPredoianu'
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <p className='transition-duration: 150ms mt-1 cursor-pointer transition-colors hover:text-red-800'>
                Christian Predoianu
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
