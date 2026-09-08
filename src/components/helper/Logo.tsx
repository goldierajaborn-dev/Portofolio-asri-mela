import { Code2 } from "lucide-react";
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/40 bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(124,58,237,0.45)]">
        <Code2 className="h-5 w-5 text-white" />
      </div>
      <div>
        <h1 className="hidden text-lg font-black tracking-[0.18em] text-slate-900 dark:text-white sm:block">
          G<span className="text-violet-500 dark:text-cyan-300">D</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo