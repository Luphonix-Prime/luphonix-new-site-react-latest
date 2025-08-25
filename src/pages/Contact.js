
import React, { useEffect, useState } from 'react';
import Hyperspeed from '../components/Hyperspeed';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    // Add fade-in animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="section" style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h1 className="section-title fade-in" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Get In Touch</h1>
            <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Ready to start your project? Let's discuss how we can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="contact-info-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '80px',
            alignItems: 'start',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            
            {/* Contact Info */}
            <div className="fade-in" style={{ padding: '40px 0' }}>
              <h2 style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '40px',
                fontSize: '2.2rem',
                fontWeight: '300'
              }}>
                Let's Work Together
              </h2>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.7',
                marginBottom: '40px',
                fontSize: '16px',
                fontWeight: '300'
              }}>
                We're here to help you achieve your digital goals. Whether you need a new website, 
                mobile app, or custom software solution, our team is ready to deliver exceptional results.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--accent-green), var(--accent-purple))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    <i className="fas fa-envelope" style={{ color: 'white' }}></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px', fontWeight: '300' }}>Email</h4>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: '300' }}>hello@luphonix.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--accent-green), var(--accent-purple))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    <i className="fas fa-phone" style={{ color: 'white' }}></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px', fontWeight: '300' }}>Phone</h4>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: '300' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--accent-green), var(--accent-purple))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'white' }}></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px', fontWeight: '300' }}>Office</h4>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: '300' }}>123 Tech Street, Digital City</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '50px' }}>
                <h4 style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: '20px',
                  fontWeight: '300'
                }}>
                  Follow Us
                </h4>
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
                  <a href="#" className="social-link" aria-label="Dribbble">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in" style={{ padding: '40px 0' }}>
              <form onSubmit={handleSubmit} className="contact-form" style={{ padding: '50px 40px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '30px', border: '1px solid rgba(0, 212, 170, 0.1)' }}>
                <h3 style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: '30px',
                  fontSize: '1.5rem',
                  fontWeight: '300',
                  textAlign: 'center'
                }}>
                  Start Your Project
                </h3>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label htmlFor="service">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="ai-ml">AI/ML Development</option>
                    <option value="blockchain">Blockchain Development</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5K - $15K</option>
                    <option value="15k-30k">$15K - $30K</option>
                    <option value="30k-50k">$30K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '40px' }}>
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div style={{
                    padding: '20px',
                    background: 'rgba(0, 212, 170, 0.1)',
                    border: '1px solid var(--accent-green)',
                    borderRadius: '12px',
                    color: 'var(--accent-green)',
                    textAlign: 'center',
                    marginTop: '20px'
                  }}>
                    <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    padding: '20px',
                    background: 'rgba(255, 68, 68, 0.1)',
                    border: '1px solid #ff4444',
                    borderRadius: '12px',
                    color: '#ff4444',
                    textAlign: 'center',
                    marginTop: '20px'
                  }}>
                    <i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
