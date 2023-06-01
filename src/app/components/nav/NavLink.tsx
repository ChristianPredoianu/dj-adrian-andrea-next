import Link from 'next/link';

interface NavLinkProps {
  link: {
    name: string;
  };
  onCloseNavbar: () => void;
}

export default function NavLinks({ link, onCloseNavbar }: NavLinkProps) {
  return (
    <li
      className='text-md transition-duration: 150ms z-50 flex cursor-pointer items-center px-3 py-4 uppercase leading-snug tracking-widest text-font-light transition-colors hover:text-red-600 xl:text-xl'
      onClick={onCloseNavbar}
    >
      <Link href={`#${link.name.toLowerCase()}`} scroll={false}>
        {link.name}
      </Link>
    </li>
  );
}
