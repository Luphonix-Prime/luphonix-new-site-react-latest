import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { slides } from '../data/mockData';

const LanguageDetails = () => {
  const { language } = useParams();

  // Find the matching slide based on the language parameter
  const currentLanguage = slides.find(slide =>
    slide.title.toLowerCase().replace(/[^a-z0-9]/g, '') === language?.toLowerCase().replace(/[^a-z0-9]/g, '')
  ) || slides[0]; // Default to first slide if not found

  return (
    <div className="language-details">
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${currentLanguage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <Link
            to="/"
            style={{
              color: 'var(--accent-green)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              marginBottom: '30px',
              fontSize: '14px'
            }}
          >
            <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i>
            Back to Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h1 className="hero-title" style={{ marginBottom: '0' }}>
              {currentLanguage.title} <span className="gradient-text">Tips & Tricks</span>
            </h1>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <span style={{
                background: 'var(--accent-green)',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {currentLanguage.category}
              </span>
              <span style={{
                background: currentLanguage.difficulty === 'Beginner' ? '#22c55e' :
                           currentLanguage.difficulty === 'Intermediate' ? '#f59e0b' : '#ef4444',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {currentLanguage.difficulty}
              </span>
              
            </div>
          </div>

          <p className="hero-subtitle" style={{ maxWidth: '600px', marginBottom: '30px' }}>
            {currentLanguage.description}
          </p>

          {/* Key Features */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {currentLanguage.features.map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '14px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <i className="fas fa-check" style={{ marginRight: '8px', color: 'var(--accent-green)' }}></i>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Advanced Tips & Tricks</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '60px' }}>
            Master these advanced techniques to become a {currentLanguage.title} expert
          </p>
          <div style={{ display: 'grid', gap: '40px', marginTop: '60px' }}>
            {currentLanguage.tips.map((tip, index) => (
              <div key={index} className="tip-card" style={{
                background: 'var(--card-bg)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--accent-green), #00a86b)'
                }}></div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--accent-green), #00a86b)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{
                    fontSize: '1.6rem',
                    margin: 0,
                    color: 'var(--text-primary)'
                  }}>
                    {tip.title}
                  </h3>
                </div>

                <p style={{
                  marginBottom: '25px',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem'
                }}>
                  {tip.description}
                </p>

                <div style={{
                  background: 'var(--secondary-bg)',
                  borderRadius: '15px',
                  padding: '25px',
                  border: '1px solid var(--border-color)',
                  overflowX: 'auto',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '20px',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    background: 'var(--accent-green)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px'
                  }}>
                    Example
                  </div>
                  <pre style={{
                    margin: 0,
                    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                    color: 'var(--text-primary)'
                  }}>
                    <code>{tip.example}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{
              background: 'var(--card-bg)',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'var(--accent-green)',
                marginBottom: '10px'
              }}>
                {currentLanguage.popularity}%
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Developer Popularity</p>
            </div>

            <div style={{
              background: 'var(--card-bg)',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'var(--accent-green)',
                marginBottom: '10px'
              }}>
                {currentLanguage.tips.length}
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Expert Tips</p>
            </div>

            <div style={{
              background: 'var(--card-bg)',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--accent-green)',
                marginBottom: '10px'
              }}>
                {currentLanguage.difficulty}
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Difficulty Level</p>
            </div>

            <div style={{
              background: 'var(--card-bg)',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--accent-green)',
                marginBottom: '10px'
              }}>
                {currentLanguage.category}
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Category</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Master {currentLanguage.title}?</h2>
          <p className="section-subtitle">
            Start your journey with {currentLanguage.title} and build amazing projects
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-button" style={{
              background: 'linear-gradient(135deg, var(--accent-green), #00a86b)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Start Your Project
              <i className="fas fa-rocket"></i>
            </Link>
            <Link to="/projects" className="cta-button" style={{
              background: 'transparent',
              border: '2px solid var(--accent-green)',
              color: 'var(--accent-green)',
              padding: '15px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              View Our Work
              <i className="fas fa-eye"></i>
            </Link>
            <Link to="/" className="cta-button" style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '15px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Explore More Technologies
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageDetails;