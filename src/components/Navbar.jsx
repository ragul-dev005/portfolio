import React, { useState } from 'react';
import { profile } from '../data/portfolioData';

const Navbar = ({ activeSection, scrolled, onNavigate, sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = id => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-solid' : ''}`}>
      <div className="brand" onClick={() => handleLinkClick('hero')}>
        <span className="brand-mark">RR</span>
        <div className="brand-copy">
          <strong>Ragul.dev</strong>
          <small>Web Portfolio</small>
        </div>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {sections.map(section => (
          <button
            key={section.id}
            className={activeSection === section.id ? 'nav-link active' : 'nav-link'}
            onClick={() => handleLinkClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Navbar;
