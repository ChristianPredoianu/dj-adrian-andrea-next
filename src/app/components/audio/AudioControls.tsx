import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

interface AudioControlProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AudioControls({
  isPlaying,
  handlePlay,
  handlePause,
}: AudioControlProps) {
  let playPauseControls;

  if (!isPlaying) {
    playPauseControls = (
      <FontAwesomeIcon
        icon={faPlayCircle}
        className='cursor-pointer text-4xl text-red-600'
        onClick={handlePlay}
      />
    );
  } else {
    playPauseControls = (
      <FontAwesomeIcon
        icon={faPauseCircle}
        className='cursor-pointer text-4xl text-red-600'
        onClick={handlePause}
      />
    );
  }
  return <>{playPauseControls}</>;
}
