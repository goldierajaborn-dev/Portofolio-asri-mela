import SectionHeading from '@/components/helper/SectionHeading';
import React from 'react';
import { highlights, stats } from '../../../../data';
import Lanyard from '@/components/lanyard/Lanyard';

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          title_1="About"
          title_2="Me"
          description="Get to know me better and my journey as a developer."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-[2rem] border border-pink-200/60 bg-white/60 p-3 shadow-[0_25px_80px_rgba(236,72,153,0.16)] backdrop-blur-sm dark:border-pink-500/20 dark:bg-slate-900/40">
              <div className="overflow-hidden rounded-[1.6rem]">
                <Lanyard
                  position={[0, 0, 7]}
                  gravity={[0, -40, 0]}
                  fov={20}
                  frontImage="/images/Gold.jpg"
                  backImage="/images/gold-back.jpg"
                  imageFit="cover"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="space-y-6"
          >
            <div className="inline-flex rounded-full border border-pink-300/40 bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-700 dark:text-pink-200">
              Developer profile
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              A passionate developer who loves building meaningful digital experiences.
            </h3>

            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m Asri Mela Aldian Syah, a passionate RPL student and aspiring web developer who
                loves creating modern, interactive, and meaningful digital experiences.
              </p>
              <p>
                Beyond coding, I&apos;m passionate about learning and building things with technology. I&apos;m
                currently studying Software Engineering and exploring web development, especially HTML, CSS,
                JavaScript, React, and Next.js. I enjoy turning ideas into projects, solving technical
                challenges, and continuously improving my skills through hands-on experience.
              </p>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/60 p-3 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-500/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.6rem] border border-pink-200/70 bg-gradient-to-br from-white to-pink-50 p-6 text-center shadow-[0_18px_60px_rgba(236,72,153,0.08)] dark:border-pink-500/20 dark:from-slate-900 dark:to-slate-950"
              >
                <div className="text-3xl font-black text-violet-600 dark:text-violet-300 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;