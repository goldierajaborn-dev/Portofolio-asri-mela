import React from 'react'

type Props = {
  title_1: string;
  title_2: string;
  description: string;
};

const SectionHeading = ({ title_1, title_2, description }: Props) => {
  return (
    <div className="mb-16 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-700 dark:text-pink-200">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
        Portfolio
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title_1}{" "}
        <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
          {title_2}
        </span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading