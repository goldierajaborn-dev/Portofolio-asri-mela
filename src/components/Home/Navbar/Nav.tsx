'use client';
import React, { useState, useEffect } from 'react';
import Logo from '@/components/helper/Logo';
import { Navlinks } from '@/Constant/Constant';
import Link from 'next/link';
import { Download, MenuIcon } from 'lucide-react';
import ThemeToggler from '@/components/helper/ThemeToggler';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        navBg ? 'bg-white/75 shadow-[0_12px_30px_rgba(236,72,153,0.08)] backdrop-blur-xl dark:bg-slate-950/70' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex h-[12vh] w-[90%] max-w-7xl items-center justify-between'>
        <Logo />

        <nav className='hidden items-center gap-8 lg:flex'>
          {Navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-semibold text-slate-700 transition-all duration-200 hover:text-pink-600 dark:text-slate-200 dark:hover:text-pink-300'
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <a href='#contact'>
            <button className='hidden rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(236,72,153,0.25)] transition-transform duration-200 hover:scale-[1.02] sm:inline-flex'>
              <Download className='mr-2 h-4 w-4' />
              Download CV
            </button>
          </a>
          <ThemeToggler />
          <button className='rounded-xl border border-slate-200 bg-white/60 p-2 text-slate-700 shadow-sm lg:hidden dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200' onClick={openNav}>
            <MenuIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;