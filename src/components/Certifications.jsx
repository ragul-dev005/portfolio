import React from 'react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <div className="section-content">
      <div className="section-heading">
        <span className="section-label">Certifications</span>
        <h2>Important Achievements</h2>
      </div>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <article key={`${cert.title}-${index}`} className="cert-card reveal" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="cert-badge">{cert.date}</div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
