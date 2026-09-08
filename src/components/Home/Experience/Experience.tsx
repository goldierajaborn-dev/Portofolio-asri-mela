import SectionHeading from '@/components/helper/SectionHeading';
import React from 'react';
import { experiences } from '../../../../data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading
          title_1='Experience'
          title_2='Education'
          description='My professional journey and academic background'
        />

        <div className='relative mx-auto max-w-5xl'>
          <div className='absolute left-4 top-0 h-full w-px bg-gradient-to-b from-pink-500 via-rose-400 to-transparent md:left-1/2 md:-translate-x-1/2' />

          {experiences.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`relative mb-12 flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className='absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-pink-500 bg-slate-950 text-pink-200 shadow-[0_0_25px_rgba(236,72,153,0.3)] md:left-1/2'>
                {item.type === 'work' ? (
                  <Briefcase className='h-4 w-4' />
                ) : (
                  <GraduationCap className='h-4 w-4' />
                )}
              </div>

              <div className='ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)]'>
                <div className='rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/60'>
                  <div className='mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-300'>
                    <span className='rounded-full bg-pink-500/10 px-2.5 py-1'>{item.period}</span>
                  </div>
                  <h3 className='mb-2 text-xl font-bold text-slate-900 dark:text-white'>{item.title}</h3>
                  <p className='mb-3 text-sm text-slate-600 dark:text-slate-300'>{item.company}</p>
                  <p className='mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{item.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-full border border-pink-200 bg-pink-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-700 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='hidden md:block md:w-[calc(50%-2rem)]' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;