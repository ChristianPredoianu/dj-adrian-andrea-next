import classNames from 'classnames';

interface NavLogoProps {
  isNav: boolean;
}

export default function NavLogo({ isNav }: NavLogoProps) {
  return (
    <div className={classNames('flex', { 'flex-col md:flex-row': isNav })}>
      <p className='text-1xl inline-block bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700 bg-clip-text font-bold text-transparent'>
        Dj Adrian
      </p>
      <p
        className={classNames(
          'text-1xl ml-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700 bg-clip-text font-bold text-transparent md:ml-2',
          { 'ml-0 md:ml-2': isNav }
        )}
      >
        Andrea
      </p>
    </div>
  );
}
