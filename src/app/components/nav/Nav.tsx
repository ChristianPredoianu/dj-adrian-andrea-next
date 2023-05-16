'use client';

import { useState } from 'react';
import NavLogo from '@/app/components/nav/NavLogo';
import Hamburger from '@/app/components/nav/Hamburger';
import NavLinks from '@/app/components/nav/NavLinks';
import SocialMediaIcons from '@/app/components/ui/SocialMediaIcons';

const navLinks = [{ name: 'Home' }, { name: 'About' }, { name: 'Tracks' }];

export default function Nav() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbarHandler() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  function closeNavbarHandler() {
    setIsNavbarOpen(false);
  }

  return (
    <>
      <header className='container absolute left-0 right-0 z-50 m-auto w-full px-4 py-4 lg:py-0'>
        <nav className='relative flex flex-wrap items-center justify-between'>
          <NavLogo />
          <Hamburger isNavbarOpen={isNavbarOpen} onToggleNavbar={toggleNavbarHandler} />
          <div
            className={`items-center  lg:flex
           ${isNavbarOpen ? ' flex' : ' hidden'}`}
          >
            <ul className='fixed left-0 top-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-10 bg-red-800 px-2 py-10 lg:static lg:ml-auto lg:h-auto lg:w-auto lg:flex-row lg:gap-0 lg:bg-transparent '>
              {navLinks.map((link) => (
                <NavLinks
                  link={link}
                  key={link.name}
                  onCloseNavbar={closeNavbarHandler}
                />
              ))}
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <SocialMediaIcons />
          </div>
        </nav>
      </header>
    </>
  );
}
