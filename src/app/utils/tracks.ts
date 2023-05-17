import { StaticImageData } from 'next/image';

interface ITracksArr {
  id: number;
  artist: string;
  track: string;
  url: string;
  img: string;
  alt: string;
}
export const tracksArr: ITracksArr[] = [
  {
    id: 1,
    artist: 'Ddp',
    track: 'Summer Nights',
    url: 'https://docs.google.com/uc?export=download&id=1T3LQAdFV8ggElAm_VUAiNVjp1GHD8z8p',
    img: '/dj1.jpg',
    alt: 'dj mixing croud watching',
  },
  {
    id: 2,
    artist: 'Dezza & EMME ',
    track: 'Getaway',
    url: 'https://docs.google.com/uc?export=download&id=1Iu0kCQMRJwmCw8JEgpRtamtxbTA-VkRm',
    img: '/dj2.jpg',
    alt: 'dj mixing in the club',
  },
  {
    id: 3,
    artist: 'Jasper Tygner, Joe Hertz ',
    track: 'Equals',
    url: 'https://docs.google.com/uc?export=download&id=1DKVRyOZTK49whnQKBdM-12cMTj7BcLv3',
    img: '/dj3.jpg',
    alt: 'dj mixer',
  },
  {
    id: 4,
    artist: 'Kondo, Zeu5 & Gentleman ',
    track: 'Focus',
    url: 'https://docs.google.com/uc?export=download&id=1ptrx4cRL82HVKrNz6mgXU4rxLazXFGBq',
    img: '/dj4.jpg',
    alt: 'beach bar with a pool',
  },
  {
    id: 5,
    artist: 'LO & Honas ',
    track: 'Control',
    url: 'https://docs.google.com/uc?export=download&id=1OU5H89-7bjpwEIG18HrEA-cqJnm-vwyc',
    img: '/dj5.jpg',
    alt: 'beach street',
  },
  {
    id: 6,
    artist: 'Mike Dero ',
    track: 'I Like This',
    url: 'https://docs.google.com/uc?export=download&id=1MhSCdOeTrojR8rKOJdjmQ9qHwCSd73K0',
    img: '/dj6.jpg',
    alt: 'crowd watching dj playing',
  },
];
