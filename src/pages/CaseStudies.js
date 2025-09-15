
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/mockData';
import SEOHead from '../components/SEOHead';
import '../components/BlogAnimations.css';

const CaseStudies = () => {
  const caseStudiesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "LUPHONIX Case Studies | Success Stories & Project Results",
    "description": "Explore detailed case studies of successful projects by LUPHONIX including NixKart, Prithvi Sahay IoT solution, and Suchi Tracker security system.",
    "url": "https://luphonix.com/case-studies"
  };

  useEffect(() => {
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

  return (
    <>
      <SEOHead
        title="Case Studies | LUPHONIX Success Stories | Project Results"
        description="Explore detailed case studies of successful projects by LUPHONIX including NixKart e-commerce platform, Prithvi Sahay IoT farming solution, and Suchi Tracker security system."
        keywords="LUPHONIX case studies, success stories, project results, NixKart, Prithvi Sahay, Suchi Tracker, IoT solutions, e-commerce development"
        canonical="https://luphonix.com/case-studies"
        structuredData={caseStudiesStructuredData}
      />
      
      <div className="case-studies-page" style={{ paddingTop: '120px' }}>
        <div className="container">
          <header className="page-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 className="fade-in" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              marginBottom: '25px',
              background: 'linear-gradient(135deg, var(--text-primary), var(--accent-green))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Success Stories
            </h1>
            <p className="fade-in" style={{
              fontSize: '1.3rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Real projects, measurable results. Explore how we've transformed businesses through innovative technology solutions.
            </p>
          </header>

          <div className="case-studies-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className={`case-study-card fade-in`}
                style={{
                  background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.8))',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 50px rgba(0, 212, 170, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img 
                    src={study.featured_image} 
                    alt={study.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'var(--accent-green)',
                    color: 'var(--primary-bg)',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}>
                    CASE STUDY
                  </div>
                </div>

                <div style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                    {study.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(0, 212, 170, 0.1)',
                        color: 'var(--accent-green)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        border: '1px solid rgba(0, 212, 170, 0.2)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 style={{ 
                    fontSize: '1.4rem', 
                    marginBottom: '15px', 
                    lineHeight: '1.3',
                    color: 'var(--text-primary)'
                  }}>
                    {study.title}
                  </h2>

                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    marginBottom: '25px', 
                    lineHeight: '1.6' 
                  }}>
                    {study.excerpt}
                  </p>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '20px', 
                    marginBottom: '25px',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '15px'
                  }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '5px' }}>Client</div>
                      <div style={{ fontWeight: '600', color: 'var(--accent-green)' }}>{study.client}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '5px' }}>Duration</div>
                      <div style={{ fontWeight: '600' }}>{study.duration}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '5px' }}>Team Size</div>
                      <div style={{ fontWeight: '600' }}>{study.team_size}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '5px' }}>Read Time</div>
                      <div style={{ fontWeight: '600' }}>{study.read_time} min</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--accent-green)' }}>Key Results</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                      {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                        <div key={key} style={{
                          background: 'rgba(0, 212, 170, 0.05)',
                          padding: '10px',
                          borderRadius: '8px',
                          textAlign: 'center',
                          border: '1px solid rgba(0, 212, 170, 0.1)'
                        }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>
                            {value}
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                    {study.technologies.slice(0, 4).map(tech => (
                      <span key={tech} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontSize: '10px',
                        color: 'var(--text-secondary)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className="cta-button"
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                    onClick={() => window.open(`/case-study/${study.slug}`, '_blank')}
                  >
                    View Full Case Study
                    <i className="fas fa-external-link-alt" style={{ marginLeft: '8px' }}></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(26, 26, 26, 0.8))',
            border: '1px solid rgba(0, 212, 170, 0.3)',
            borderRadius: '25px',
            padding: '50px',
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--accent-green)' }}>
              Ready to Create Your Success Story?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
              Let's discuss how we can transform your business with innovative technology solutions.
            </p>
            <Link
              to="/contact"
              className="cta-button"
              style={{ fontSize: '16px', padding: '15px 30px' }}
            >
              Start Your Project
              <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
