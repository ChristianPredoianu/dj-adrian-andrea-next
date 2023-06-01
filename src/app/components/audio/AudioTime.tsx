import { useCalculateTime } from '@/app/hooks/useCalculateTime';

interface AudioTimeProps {
  currentTime: number;
  duration: number;
}

export default function AudioTime({ currentTime, duration }: AudioTimeProps) {
  const { calculateTime } = useCalculateTime();

  return (
    <div className='flex text-xs'>
      <p>{calculateTime(currentTime)}</p>
      <span className='ml-2 mr-2'>/</span>
      <p>{calculateTime(duration)}</p>
    </div>
  );
}
