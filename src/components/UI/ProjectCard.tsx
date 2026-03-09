import React from 'react';
import type { Project } from '../Common/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  showImage?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, showImage = true }) => {
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      {showImage && (
        <div className="project-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-placeholder">
              <span>Project Image</span>
            </div>
          )}
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} className="project-link">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;