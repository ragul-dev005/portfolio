import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <div className="section-content">
      <div className="section-heading">
        <span className="section-label">Skills</span>
        <h2>Technologies & Strengths</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article
            key={skill.category}
            className="skill-card reveal"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3>{skill.category}</h3>
            <div className="skill-tag-list">
              {skill.items.map(item => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
