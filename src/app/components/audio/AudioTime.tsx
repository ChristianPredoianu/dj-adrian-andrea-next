import { useCalculateTime } from '@/app/hooks/useCalculateTime';

interface AudioTimeProps {
  time: number;
}

export default function AudioTime({ time }: AudioTimeProps) {
  const { calculateTime } = useCalculateTime();

  return <span className='text-xs'>{calculateTime(time)}</span>;
}
