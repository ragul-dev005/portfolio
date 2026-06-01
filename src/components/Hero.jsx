import React, { useEffect, useState } from 'react';
import { heroRoles, profile, aboutSummary } from '../data/portfolioData';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = heroRoles[currentRoleIndex];
    let timeout = null;

    if (!isDeleting && currentText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 900);
    } else if (isDeleting && currentText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex(index => (index + 1) % heroRoles.length);
      }, 120);
    } else {
      const updateSpeed = isDeleting ? 60 : 120;
      timeout = setTimeout(() => {
        setCurrentText(prev => {
          const next = isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1);
          return next;
        });
      }, updateSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting]);

  return (
    <div className="hero-inner">
      <div className="hero-overlay" />
      <div className="hero-copy">
        <p className="eyebrow">Aspiring Web Developer</p>
        <h1>{profile.name}</h1>
        <h2>
          <span className="typing-text">{currentText}</span>
          <span className="cursor">|</span>
        </h2>
        <p>{aboutSummary}</p>
        <div className="hero-buttons">
          <a href="#contact" className="button button-primary">
            Let&apos;s Connect
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="button button-secondary">
            View GitHub
          </a>
        </div>
      </div>
      <div className="hero-grid" aria-hidden="true" />
    </div>
  );
};

export default Hero;
