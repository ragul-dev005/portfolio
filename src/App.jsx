import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [navSolid, setNavSolid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll('section'));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionElements.forEach(section => observer.observe(section));
    return () => sectionElements.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach(target => revealObserver.observe(target));
    return () => revealTargets.forEach(target => revealObserver.unobserve(target));
  }, []);

  const handleNavigate = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`app-shell ${loaded ? 'loaded' : ''}`}>
      <Navbar activeSection={activeSection} scrolled={navSolid} onNavigate={handleNavigate} sections={sections} />
      <div className="section-progress">
        {sections.map(item => (
          <button
            key={item.id}
            className={`progress-dot ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavigate(item.id)}
            aria-label={`Go to ${item.label}`}
          />
        ))}
      </div>

      <main>
        <section id="hero" className="hero section reveal">
          <Hero />
        </section>

        <section id="about" className="section section-panel reveal">
          <About />
        </section>

        <section id="skills" className="section section-panel reveal">
          <Skills />
        </section>

        <section id="experience" className="section section-panel reveal">
          <Experience />
        </section>

        <section id="projects" className="section section-panel reveal">
          <Projects />
        </section>

        <section id="certifications" className="section section-panel reveal">
          <Certifications />
        </section>

        <section id="contact" className="section section-panel reveal">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
