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
        <div className='mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between'>
          <div className='flex flex-col gap-1  text-center text-xs text-gray-600'>
            <p>Credits:</p>
            <p className='cursor-pointer'>WaveSurfer.js</p>
          </div>
          <div className='text-center text-xs text-gray-600'>
            <p>Copyright &copy;</p>
            <p className='cursor-pointer'>Christian Predoianu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
