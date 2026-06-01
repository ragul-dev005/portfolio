import React from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <div className="section-content">
      <div className="section-heading">
        <span className="section-label">Projects</span>
        <h2>Placeholder Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card reveal" style={{ animationDelay: `${index * 120}ms` }}>
            <div className="project-status">{project.status}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map(tag => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="button button-outline">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="button button-outline">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
