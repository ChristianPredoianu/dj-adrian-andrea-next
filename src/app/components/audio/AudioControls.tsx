import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface AudioControlProps {
  track: {
    url: string;
    track: string;
    artist: string;
  };
  isPlaying: boolean;
  isTracksSection: boolean;
  handlePlay: () => void;
  handlePause: () => void;
}

export default function AudioControls({
  track,
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
      <div className='flex items-center'>
        {playPauseControls}
        {!isTracksSection && (
          <p className='ml-4 text-xs'>{`${track.track} -${track.artist}`}</p>
        )}
      </div>
    </div>
  );
}
