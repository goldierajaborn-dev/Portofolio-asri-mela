"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-pink-200 bg-white/80 text-slate-700 shadow-sm transition-transform duration-200 hover:scale-105 dark:border-pink-500/20 dark:bg-slate-900/70 dark:text-slate-200'
      aria-label='Toggle theme'
    >
      {currentTheme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </button>
  );
};

export default ThemeToggler