import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import Timeline from '../UI/Timeline';
import type { Experience } from '../Common/types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Universidad de la Sierra Sur',
      position: 'Backend Developer',
      period: '2025 - Present',
      description: [
        'Led backend development of multiple web applications using SpringBoot and FastAPI.',
      ],
      technologies: ['Python', 'FastAPI', 'Java', 'SpringBoot', 'PostgreSQL', 'TypeScript']
    },
    {
      id: '2',
      company: 'Solo Developer',
      position: 'Backend Developer',
      period: '2023 - Present',
      description: [
        'Developement of solo projects and contributions to open source projects using FastAPI and TypeScript.'
      ],
      technologies: ['Python', 'FastAPI', 'TypeScript', 'REST APIs']
    }
  ];

  return (
    <AnimatedSection id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <div className="section-divider"></div>
      </div>
      
      <Timeline experiences={experiences} />
    </AnimatedSection>
  );
};

export default ExperienceSection;