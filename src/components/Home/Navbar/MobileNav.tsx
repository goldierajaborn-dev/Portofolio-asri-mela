import { Navlinks } from '@/Constant/Constant';
import Link from 'next/link';
import { X } from 'lucide-react';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const sidebarOpenClose = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      <div className={`fixed inset-0 z-[1001] h-screen bg-slate-950/60 transition-all duration-500 ${showNav ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={closeNav} />

      <div className={`fixed left-0 top-0 z-[1002] flex h-full w-[80%] max-w-sm flex-col justify-center gap-5 bg-gradient-to-b from-slate-950 via-slate-900 to-violet-950 p-8 text-white transition-all duration-500 ${sidebarOpenClose}`}>
        <button className='absolute right-5 top-5 rounded-full border border-white/10 p-2' onClick={closeNav}>
          <X className='h-5 w-5' />
        </button>

        {Navlinks.map((link) => (
          <Link key={link.name} href={link.href} onClick={closeNav} className='w-fit text-xl font-semibold text-slate-200 transition-colors hover:text-cyan-300'>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav