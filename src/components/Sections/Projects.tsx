import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import ProjectCard from '../UI/ProjectCard';
import Contributions from './Contributions';
import type { Project } from '../Common/types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'DATA-UNSIS',
      description: 'A data hub for students information.',
      technologies: ['Java', 'SpringBoot', 'PostgreSQL'],
      githubUrl: 'https://github.com/DATA-UNSIS/DATA-UNSIS-BACKEND',
      liveUrl: '#'
    },
    {
      id: '2',
      title: 'APEX-UNSIS',
      description: 'An exam scheduling web application.',
      technologies: ['Python', 'FastAPI', 'MariaDB'],
      githubUrl: 'https://github.com/APEX-UNSIS/APEX-UNSIS-BACK',
      liveUrl: '#'
    }
  ];

  const contributions: Project[] = [
    {
      id: '1',
      title: 'UnsiSmile',
      description: 'Implemented a feature to allow user to disable a guardian from a patient.',
      technologies: ['Java', 'SpringBoot'],
      githubUrl: '',
      liveUrl: '#'
    },
    {
      id: '2',
      title: 'UnsiSmile',
      description: 'Implemented a feature in backend to allow users to change password through email verification.',
      technologies: ['Java', 'SpringBoot'],
      githubUrl: '',
      liveUrl: '#'
    }
  ];

  
  return (
    <AnimatedSection id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Here are some of my projects that showcase my skills and experience
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <Contributions contributions={contributions} />
    </AnimatedSection>
  );
};

export default Projects;