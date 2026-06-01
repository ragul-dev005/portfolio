import React, { useState } from 'react';
import { profile } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const subject = `Portfolio Contact from ${formData.name || 'Visitor'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="section-content contact-content">
      <div className="section-heading">
        <span className="section-label">Contact</span>
        <h2>Send a Message</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-copy glass-panel">
          <h3>Reach out directly</h3>
          <p>
            I&apos;m available for internship opportunities and project collaborations. Use the form to send a quick message and I&apos;ll respond as soon as possible.
          </p>
          <div className="contact-details">
            <div>
              <span>Email</span>
              <p>{profile.email}</p>
            </div>
            <div>
              <span>Phone</span>
              <p>{profile.phone}</p>
            </div>
            <div>
              <span>Location</span>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
        <form className="contact-form glass-panel reveal" style={{ animationDelay: '100ms' }} onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
          </label>
          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can I help?" rows="5" required />
          </label>
          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
