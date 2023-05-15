import classNames from 'classnames';

interface HamburgerProps {
  isNavbarOpen: boolean;
  onToggleNavbar: () => void;
}

export default function Hamburger({ isNavbarOpen, onToggleNavbar }: HamburgerProps) {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full transition ease transform duration-300 bg-red-500`;

  return (
    <>
      <button
        className={classNames(
          'group z-50 flex h-12 w-12 flex-col items-center justify-center lg:hidden',
          { 'fixed right-4 top-6': isNavbarOpen }
        )}
        type='button'
        onClick={onToggleNavbar}
      >
        <div
          className={classNames(genericHamburgerLine, {
            'translate-y-3 rotate-45': isNavbarOpen,
          })}
        />
        <div
          className={classNames(genericHamburgerLine, {
            'opacity-0 ': isNavbarOpen,
          })}
        />
        <div
          className={classNames(genericHamburgerLine, {
            '-translate-y-3 -rotate-45': isNavbarOpen,
          })}
        />
      </button>
    </>
  );
}
