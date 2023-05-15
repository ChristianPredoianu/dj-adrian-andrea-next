import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faInstagram,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaIcons() {
  return (
    <div className='hidden justify-between gap-4 text-2xl text-red-800 lg:flex'>
      <FontAwesomeIcon icon={faSoundcloud} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} />
    </div>
  );
}
