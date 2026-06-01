import React from 'react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <div className="section-content">
      <div className="section-heading">
        <span className="section-label">Experience</span>
        <h2>Internships & Professional Growth</h2>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article key={`${item.company}-${index}`} className="experience-card reveal" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="experience-heading">
              <h3>{item.title}</h3>
              <span>{item.duration}</span>
            </div>
            <p className="company-name">{item.company}</p>
            <ul>
              {item.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
