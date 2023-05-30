import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface AudioControlProps {
  isPlaying: boolean;
  isTracksSection: boolean;
  handlePlay: () => void;
  handlePause: () => void;
}

export default function AudioControls({
  isPlaying,
  isTracksSection,
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
  return (
    <div
      className={classNames('mb-10', {
        'flex justify-center': isTracksSection,
      })}
    >
      {playPauseControls}
    </div>
  );
}
