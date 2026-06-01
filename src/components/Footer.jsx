import React from 'react';
import { profile } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 {profile.name}. Crafted with React and attention to detail.</p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
