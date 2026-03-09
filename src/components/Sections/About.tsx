import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            As a fourth year backend developer, I specialize in architecting the robust, scalable systems that power seamless user experiences. I am passionate about solving complex computational challenges and transforming complex requirements into efficient, reliable, and well-documented APIs and services.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or sharing knowledge with the developer community.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience as a Solo Dev</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Open Source Projects I Contributed To</div>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;