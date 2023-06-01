'use client';

import { useState } from 'react';
import NavLogo from '@/app/components/nav/NavLogo';
import Hamburger from '@/app/components/nav/Hamburger';
import NavLink from '@/app/components/nav/NavLink';
import DarkModeToogler from '@/app/components/nav/DarkModeToggler';
import SocialMediaIcons from '@/app/components/ui/SocialMediaIcons';

const navLinksArr = [{ name: 'About' }, { name: 'Tracks' }, { name: 'Soundcloud' }];

export default function Nav() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbarHandler() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  function closeNavbarHandler() {
    setIsNavbarOpen(false);
  }

  const navLinks = navLinksArr.map((link) => (
    <NavLink link={link} key={link.name} onCloseNavbar={closeNavbarHandler} />
  ));

  return (
    <>
      <header className='container absolute left-0 right-0 z-50 m-auto w-full px-4 py-4 lg:py-0'>
        <nav className='relative flex flex-wrap items-center justify-between'>
          <NavLogo isNav={true} />

          <div className='xl:-ml-72'>
            <DarkModeToogler />
          </div>
          <Hamburger isNavbarOpen={isNavbarOpen} onToggleNavbar={toggleNavbarHandler} />
          <div
            className={`items-center  lg:flex
           ${isNavbarOpen ? ' flex' : ' hidden'}`}
          >
            <ul className='fixed left-0 top-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-10 bg-slate-950 px-2 py-10 lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-0 lg:bg-transparent xl:-ml-56 '>
              {navLinks}
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
