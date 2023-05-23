interface NavLinkProps {
  link: {
    name: string;
  };
  onCloseNavbar: () => void;
}

export default function NavLinks({ link, onCloseNavbar }: NavLinkProps) {
  return (
    <li
      className='text-md transition-duration: 150ms z-50 flex cursor-pointer items-center px-3 py-4 uppercase leading-snug tracking-widest  text-white transition-colors hover:opacity-75 '
      onClick={onCloseNavbar}
    >
      {link.name}
    </li>
  );
}
