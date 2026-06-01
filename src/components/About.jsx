import React from 'react';
import { aboutSummary, aboutDetails } from '../data/portfolioData';

const About = () => {
  return (
    <div className="section-content about-content">
      <div className="section-heading">
        <span className="section-label">About</span>
        <h2>Professional Summary</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>{aboutSummary}</p>
          <p>
            I enjoy turning complex ideas into clear, responsive interfaces, with a focus on accessibility and performance. My background in embedded systems and cloud-aware thinking helps me build web applications that are both reliable and user-centric.
          </p>
        </div>
        <div className="about-details glass-panel">
          {aboutDetails.map(item => (
            <div key={item.label} className="detail-row">
              <span>{item.label}</span>
              {item.value.startsWith('http') ? (
                <a href={item.value} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              ) : item.label === 'Email' ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : item.label === 'Phone' ? (
                <a href={`tel:${item.value.replace(/\s+/g, '')}`}>{item.value}</a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
