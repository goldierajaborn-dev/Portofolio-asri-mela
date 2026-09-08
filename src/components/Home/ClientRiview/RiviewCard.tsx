import { QuoteIcon } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const RiviewCard = ({ user }: Props) => {
  return (
    <div className='relative rounded-[1.75rem] border border-slate-200/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60'>
      <QuoteIcon className='absolute right-5 top-5 h-10 w-10 text-pink-500/20 dark:text-pink-300/20' />

      <div className='mb-5 flex items-center gap-1 pt-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className='h-4 w-4 text-yellow-400' />
        ))}
      </div>

      <p className='text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200'>“{user.review}”</p>

      <div className='my-6 h-px w-full bg-gradient-to-r from-violet-200 via-slate-200 to-transparent dark:from-violet-500/30 dark:via-slate-700 dark:to-transparent' />

      <div className='flex items-center gap-4'>
        <Image src={user.userImage} alt={user.name} width={54} height={54} className='h-[54px] w-[54px] rounded-full object-cover ring-2 ring-violet-200 dark:ring-violet-500/40' />
        <div>
          <h3 className='text-base font-bold text-slate-900 dark:text-white'>{user.name}</h3>
          <p className='text-sm text-slate-500 dark:text-slate-400'>{user.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default RiviewCard