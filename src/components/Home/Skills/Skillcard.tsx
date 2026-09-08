import { LucideIcon } from 'lucide-react';
import React from 'react';

type Props = {
  name: string;
  icon: LucideIcon;
};

const Skillcard = ({ icon: Icon, name }: Props) => {
  return (
    <div className='group relative flex cursor-pointer flex-col items-center gap-3 rounded-[1.5rem] border border-pink-200/80 bg-white/70 p-4 text-center shadow-[0_12px_40px_rgba(236,72,153,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)] dark:border-pink-500/20 dark:bg-slate-900/60'>
      <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-rose-400 to-fuchsia-400 shadow-[0_18px_30px_rgba(236,72,153,0.25)] transition-all duration-300 group-hover:scale-105'>
        <Icon className='h-6 w-6 text-white' />
      </div>
      <span className='text-sm font-semibold text-slate-700 dark:text-slate-200'>{name}</span>
    </div>
  );
};

export default Skillcard