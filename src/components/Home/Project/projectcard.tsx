import React from 'react';
import Image from 'next/image';
import { ExternalLink, GitBranch } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({ title, description, image, techStack, demoUrl, githubUrl }: Props) => {
  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-pink-200/80 bg-white/80 shadow-[0_25px_60px_rgba(236,72,153,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(236,72,153,0.16)] dark:border-pink-500/20 dark:bg-slate-900/60">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-pink-200 bg-pink-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-pink-700 dark:border-pink-500/30 dark:text-pink-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-transform hover:scale-[1.01]"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center rounded-full border border-pink-300/70 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-transform hover:scale-[1.01] dark:border-pink-500/30 dark:bg-slate-950/40 dark:text-slate-200"
            >
              <GitBranch className="mr-2 h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard