'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import classes from '@/app/components/react-soundcloud/SoundCloudReact.module.css';

export default function SoundCloudReact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className={classes.playerWrapper}>
          <ReactPlayer
            url='https://soundcloud.com/adrianandrea'
            playing={false}
            className={classes.reactPlayer}
            width='100%'
            height='100%'
          />
        </div>
      ) : null}
    </>
  );
}
