'use client';

export default function AudioProgress({ progress, progressBarRef }) {
  return (
    <div className='relative h-2 w-3/6 bg-red-500' ref={progressBarRef}>
      <div className='absolute h-2 bg-white' style={{ width: progress + '%' }}></div>
    </div>
  );
}
