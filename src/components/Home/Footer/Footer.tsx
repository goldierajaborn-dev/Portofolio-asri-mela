import React from 'react';
import { footerSocialLinks } from '../../../../data';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='border-t border-slate-200/80 bg-white/60 py-10 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/60'>
      <div className='section-shell'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <a href='#home' className='text-xl font-black tracking-[0.18em] text-slate-900 dark:text-white'>
            G<span className='text-pink-500 dark:text-pink-300'>D</span>
          </a>

          <div className='flex items-center gap-3'>
            {footerSocialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-xl border border-pink-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:text-pink-600 dark:border-pink-500/20 dark:bg-slate-900 dark:text-slate-200'
                >
                  <Icon className='h-4 w-4' />
                </a>
              );
            })}
          </div>

          <p className='flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300'>
            Made with <Heart className='h-4 w-4 text-pink-500' /> by Asri Mela Aldian Syah
          </p>
        </div>

        <div className='mt-8 border-t border-slate-200 pt-6 text-center dark:border-slate-800'>
          <p className='text-sm text-slate-500 dark:text-slate-400'>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer