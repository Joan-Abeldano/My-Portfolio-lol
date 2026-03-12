import React, { useState } from 'react';
import AnimatedSection from '../UI/AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatedSection id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>joanmabeldano@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h3>Phone</h3>
              <p>+52 9512904328</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Oaxaca, MX</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/mgonylaq"
          method="POST"
        >

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

        </form>

      </div>
    </AnimatedSection>
  );
};

export default Contact;