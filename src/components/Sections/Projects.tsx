import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import ProjectCard from '../UI/ProjectCard';
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
      description: 'A data hub for students information.',
      technologies: ['Java', 'SpringBoot', 'PostgreSQL'],
      githubUrl: 'https://github.com/DATA-UNSIS/DATA-UNSIS-BACKEND',
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
      <div className="section-header">
        <h2 className="section-title">Contributions</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Here are some of my contributions to open source projects
        </p>
      </div>

      <div className="projects-grid">
        {contributions.map((contr, index) => (
          <ProjectCard key={contr.id} project={contr} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;