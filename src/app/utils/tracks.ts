interface ITracksArr {
  id: number;
  artist: string;
  track: string;
  url: string;
  img: string;
  alt: string;
}

/* https://drive.google.com/file/d/1T3LQAdFV8ggElAm_VUAiNVjp1GHD8z8p/view?usp=drive_link */
export const tracksArr: ITracksArr[] = [
  {
    id: 1,
    artist: 'Adrian Andrea',
    track: 'Bungibum (Original Remix)',
    url: 'https://storage.googleapis.com/adi_music/Adrian%20Andrea%20-%20Bungibum%20(Original%20Mix)%20MASTERED%20%5BAM%5D.mp3',
    img: '/dj1.jpg',
    alt: 'dj mixing croud watching',
  },
  {
    id: 2,
    artist: 'Adrian Andrea',
    track: 'Dodzizao (Original Remix)',
    url: 'https://storage.googleapis.com/adi_music/Adrian%20Andrea%20-%20Dodzizao%20(Original%20Mix)%20MASTERED%2016BIT.mp3',
    img: '/dj2.jpg',
    alt: 'dj mixing in the club',
  },
  {
    id: 3,
    artist: 'Marta Kodo',
    track: 'Fuse It (Adrian Andrea Remix)',
    url: 'https://storage.googleapis.com/adi_music/Marta%20Kodo%20-%20Fuse%20It%20(Adrian%20Andrea%20Remix)%20%5BM%5D.mp3',
    img: '/dj3.jpg',
    alt: 'dj mixer',
  },
  {
    id: 4,
    artist: 'Rob Zile',
    track: 'Pay The Piper (Adrian Andrea Remix)',
    url: 'https://storage.googleapis.com/adi_music/Rob%20Zile%20-%20Pay%20the%20piper%20(Adrian%20Andrea%20remix).mp3',
    img: '/dj4.jpg',
    alt: 'beach bar with a pool',
  },
  {
    id: 5,
    artist: 'Seek',
    track: 'Outside (Adrian Andrea Remix)',
    url: 'https://storage.googleapis.com/adi_music/Seek%20-%20Outside%20(Adrian%20Andrea%20Remix)%20%5BAM%5D%20MASTERED%20(1).mp3',
    img: '/dj5.jpg',
    alt: 'beach street',
  },
];
