import SectionHeading from '@/components/helper/SectionHeading';
import React from 'react';
import { contactInfo, socialLinks } from '../../../../data';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading
          title_1='Get In'
          title_2='Touch'
          description='Have a project in mind or just want to say hi? I would love to hear from you.'
        />

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="space-y-8">
            <div>
              <h3 className='mb-4 text-3xl font-bold text-slate-900 dark:text-white'>Let&apos;s talk</h3>
              <p className='max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300'>
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of
                your vision.
              </p>
            </div>

            <div className='space-y-4'>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noreferrer"
                    className='group flex items-center gap-4 rounded-[1.4rem] border border-pink-200/80 bg-white/70 p-4 shadow-[0_12px_35px_rgba(236,72,153,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 dark:border-pink-500/20 dark:bg-slate-900/60'
                  >
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-500/20'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400'>{item.label}</p>
                      <p className='mt-1 text-sm font-medium text-slate-700 dark:text-slate-200'>{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className='mb-4 text-lg font-semibold text-slate-900 dark:text-white'>Follow me</h4>
              <div className='flex gap-3'>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                      className='flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:text-pink-600 dark:border-pink-500/20 dark:bg-slate-900 dark:text-slate-200'
                    >
                      <Icon className='h-5 w-5' />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className='rounded-[1.8rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-8'>
            <form className='space-y-6'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium text-slate-700 dark:text-slate-200'>Name</label>
                  <Input id='name' name='name' placeholder='Asri Mela Aldian Syah' required className='rounded-2xl border-pink-200 bg-pink-50 focus-visible:ring-pink-500 dark:border-pink-500/20 dark:bg-slate-950/50' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium text-slate-700 dark:text-slate-200'>Email</label>
                  <Input id='email' name='email' placeholder='asrimela14410@gmail.com' required className='rounded-2xl border-pink-200 bg-pink-50 focus-visible:ring-pink-500 dark:border-pink-500/20 dark:bg-slate-950/50' />
                </div>
              </div>

              <div className='space-y-2'>
                <label htmlFor='subject' className='text-sm font-medium text-slate-700 dark:text-slate-200'>Subject</label>
                <Input id='subject' name='subject' placeholder='Project Inquiry' required className='rounded-2xl border-pink-200 bg-pink-50 focus-visible:ring-pink-500 dark:border-pink-500/20 dark:bg-slate-950/50' />
              </div>

              <div className='space-y-2'>
                <label htmlFor='massage' className='text-sm font-medium text-slate-700 dark:text-slate-200'>Message</label>
                <Textarea id='massage' name='massage' placeholder='Tell me about your project...' rows={5} required className='h-40 rounded-2xl border-pink-200 bg-pink-50 focus-visible:ring-pink-500 dark:border-pink-500/20 dark:bg-slate-950/50' />
              </div>

              <Button type='submit' size={'lg'} className='w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-[0_20px_40px_rgba(236,72,153,0.28)]'>
                <Send className='mr-2 h-4 w-4' />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact