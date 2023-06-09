import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faInstagram,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaIcons() {
  return (
    <div className=' flex gap-4 text-2xl text-red-800'>
      <a
        href='https://soundcloud.com/adrianandrea'
        aria-label='link to dj:s soundcloud'
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        <FontAwesomeIcon
          icon={faSoundcloud}
          className='transition-duration: 150ms cursor-pointer transition-colors hover:text-red-600'
        />
      </a>
      <a
        href='https://instagram.com/djadrianandrea/'
        aria-label='link to dj:s instagram'
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className='transition-duration: 150ms cursor-pointer transition-colors hover:text-red-600'
        />
      </a>
      <a
        href='https://www.facebook.com/djadrianandrea'
        aria-label='link to dj:s facebook'
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className='transition-duration: 150ms cursor-pointer transition-colors hover:text-red-600'
        />
      </a>
    </div>
  );
}
