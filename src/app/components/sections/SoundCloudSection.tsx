import SoundCloudReact from '@/app/components/react-soundcloud/SoundCloudReact';

export default function SoundCloudSection() {
  return (
    <section className='bg-zinc-200 py-20'>
      <div className='container mx-auto px-4 '>
        <h3 className='mb-10 text-3xl text-orange-600'>Soundcloud</h3>
        <SoundCloudReact />
      </div>
    </section>
  );
}
