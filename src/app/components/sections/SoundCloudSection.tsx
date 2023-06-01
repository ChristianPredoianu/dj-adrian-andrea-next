'use client';

import { useEffect, useState, useContext } from 'react';
import { PlayerContext } from '@/app/store/playerContext';
import ReactPlayer from 'react-player';
import classes from '@/app/components/sections/SoundCloudReact.module.css';

export default function SoundCloudSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { activePlayerId, setActivePlayerId } = useContext(PlayerContext);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className='bg-primary-color text-font-dark dark:bg-primary-color-dark dark:text-font-light'
      id='soundcloud'
    >
      <div className='container mx-auto px-4 py-16 md:py-32'>
        <h3 className='mb-10 text-center text-3xl text-font-dark dark:text-font-light'>
          Soundcloud
        </h3>
        <div className='mt-20 xl:px-96'>
          {isLoaded ? (
            <div className={classes.playerWrapper}>
              <ReactPlayer
                url='https://soundcloud.com/adrianandrea'
                playing={activePlayerId === 7 ? true : false}
                className={classes.reactPlayer}
                width='100%'
                height='100%'
                onPlay={() => setActivePlayerId(7)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
