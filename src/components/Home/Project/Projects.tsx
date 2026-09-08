import SectionHeading from '@/components/helper/SectionHeading';
import React from 'react';
import { projects } from '../../../../data';
import ProjectCard from './projectcard';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading
          title_1='Feature'
          title_2='Projects'
          description='A section of my project and my work'
        />

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects