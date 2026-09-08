'use client';

import React from 'react';
import Background from "../../background/background";
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, FolderOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28">
      <Background />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div data-aos="fade-up" className="mb-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-pink-300/50 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-700 shadow-[0_0_30px_rgba(236,72,153,0.25)] dark:text-pink-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              Available for opportunities
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
              Asri Mela
            </span>
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-6 h-12 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl md:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "UI/UX Designer",
                1800,
                "IT Project Assistance",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg"
          >
            Building modern digital experiences with creative problem-solving and a strong focus on clean,
            user-friendly products. I enjoy turning ideas into real experiences that people love to use.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projects">
              <Button
                size="lg"
                className="group w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7 text-white shadow-[0_20px_40px_rgba(236,72,153,0.35)] hover:scale-[1.02] sm:w-auto"
              >
                <FolderOpen className="mr-2 h-4 w-4" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full border-pink-300/60 bg-white/60 text-slate-900 shadow-lg shadow-pink-500/10 backdrop-blur-sm hover:bg-pink-50 dark:border-pink-500/30 dark:bg-slate-900/40 dark:text-white sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;