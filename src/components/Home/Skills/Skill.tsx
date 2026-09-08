import SectionHeading from '@/components/helper/SectionHeading';
import React from 'react';
import { skillCategories } from '../../../../data';
import Skillcard from './Skillcard';

const Skill = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading
          title_1={'Technical'}
          title_2={'Skills'}
          description={'Here are my technical abilities and expertise.'}
        />

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                {category.title}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} data-aos="zoom-in" data-aos-delay={index * 80}>
                    <Skillcard name={skill.name} icon={skill.icon} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill