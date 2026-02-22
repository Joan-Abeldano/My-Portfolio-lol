import React from 'react';
import type { Project } from '../Common/types';
import ProjectCard from '../UI/ProjectCard';

type Props = {
  contributions: Project[];
};

const Contributions: React.FC<Props> = ({ contributions }) => {
  return (
    <>
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
    </>
  );
};

export default Contributions;
