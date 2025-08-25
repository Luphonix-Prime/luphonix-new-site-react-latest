
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Luphonix</h3>
            <p>
              We create cutting-edge digital experiences that transform businesses and captivate audiences. 
              Your partner in digital innovation and growth.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">E-commerce</Link></li>
              <li><Link to="/services">AI/ML Solutions</Link></li>
              <li><Link to="/services">Blockchain</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/projects">Our Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/blog">Documentation</Link></li>
              <li><Link to="/blog">Case Studies</Link></li>
              <li><Link to="/blog">Tutorials</Link></li>
              <li><Link to="/contact">Support</Link></li>
              <li><Link to="/contact">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>
              <i className="fas fa-envelope" style={{ marginRight: '10px', color: 'var(--accent-green)' }}></i>
              hello@luphonix.com
            </p>
            <p>
              <i className="fas fa-phone" style={{ marginRight: '10px', color: 'var(--accent-green)' }}></i>
              +1 (555) 123-4567
            </p>
            <p>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: 'var(--accent-green)' }}></i>
              123 Tech Street<br />Digital City, DC 12345
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Luphonix. All rights reserved. Built with passion and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
