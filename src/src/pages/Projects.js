import React, { useEffect, useState } from 'react';
import CardSwap, { Card } from '../components/CardSwap';
import { projects } from '../data/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category?.toLowerCase() === filter.toLowerCase() ||
        project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
      ));
    }
  }, [filter]);

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
  }, [filteredProjects]);

  const categories = ['all', 'web development', 'mobile app', 'ai/ml', 'blockchain', 'e-commerce'];

  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="section">
        <div className="container">
          <h1 className="section-title fade-in">Our Projects</h1>
          <p className="section-subtitle fade-in">
            Showcasing our portfolio of innovative solutions and successful client collaborations
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '80px' }}>
        <div className="container">
          <div className="filter-buttons" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '60px'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={filter === category ? 'filter-btn active' : 'filter-btn'}
                style={{
                  padding: '12px 24px',
                  background: filter === category ? 'var(--accent-green)' : 'transparent',
                  color: filter === category ? 'var(--primary-bg)' : 'var(--text-secondary)',
                  border: `1px solid ${filter === category ? 'var(--accent-green)' : 'var(--border-color)'}`,
                  borderRadius: '25px',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  fontSize: '14px',
                  textTransform: 'capitalize',
                  fontWeight: '300'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.short_description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
                    {project.project_url && (
                      <a 
                        href={project.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-button" 
                        style={{ fontSize: '12px', padding: '10px 20px' }}
                      >
                        <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                        View Live
                      </a>
                    )}
                    {project.github_url && (
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-button" 
                        style={{ 
                          fontSize: '12px', 
                          padding: '10px 20px', 
                          background: 'transparent', 
                          border: '1px solid var(--accent-green)',
                          color: 'var(--accent-green)'
                        }}
                      >
                        <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>No projects found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try selecting a different category filter</p>
            </div>
          )}
        </div>
      </section>

      <div style={{ 
        height: '600px', 
        position: 'relative', 
        margin: '80px 0', 
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.1), rgba(26, 26, 26, 0.05))',
        borderRadius: '20px',
        overflow: 'hidden'
      }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={true}
        >
          <Card>
            <div style={{ 
              height: '100%',
              background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(138, 43, 226, 0.1))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 212, 170, 0.3)',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }}></div>
              <div style={{ 
                padding: '30px', 
                color: 'white', 
                position: 'relative', 
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, var(--accent-green), var(--accent-purple))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <i className="fas fa-laptop-code" style={{ fontSize: '24px', color: 'white' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: '300' }}>Project 1</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontWeight: '300' }}>
                    Modern web application with React and Node.js featuring real-time data processing
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <span style={{
                    background: 'rgba(0, 212, 170, 0.2)',
                    color: 'var(--accent-green)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    border: '1px solid rgba(0, 212, 170, 0.3)'
                  }}>React</span>
                  <span style={{
                    background: 'rgba(0, 212, 170, 0.2)',
                    color: 'var(--accent-green)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    border: '1px solid rgba(0, 212, 170, 0.3)'
                  }}>Node.js</span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div style={{ 
              height: '100%',
              background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(138, 43, 226, 0.3)',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }}></div>
              <div style={{ 
                padding: '30px', 
                color: 'white', 
                position: 'relative', 
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, var(--accent-purple), #ff1493)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <i className="fas fa-shopping-cart" style={{ fontSize: '24px', color: 'white' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: '300' }}>Project 2</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontWeight: '300' }}>
                    Mobile-responsive e-commerce platform with advanced payment integration
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <span style={{
                    background: 'rgba(138, 43, 226, 0.2)',
                    color: 'var(--accent-purple)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    border: '1px solid rgba(138, 43, 226, 0.3)'
                  }}>Vue.js</span>
                  <span style={{
                    background: 'rgba(138, 43, 226, 0.2)',
                    color: 'var(--accent-purple)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    border: '1px solid rgba(138, 43, 226, 0.3)'
                  }}>MongoDB</span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div style={{ 
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.1), rgba(255, 69, 0, 0.1))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 165, 0, 0.3)',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }}></div>
              <div style={{ 
                padding: '30px', 
                color: 'white', 
                position: 'relative', 
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #ffa500, #ff4500)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <i className="fas fa-chart-line" style={{ fontSize: '24px', color: 'white' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: '300' }}>Project 3</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontWeight: '300' }}>
                    AI-powered data visualization dashboard with machine learning insights
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <span style={{
                    background: 'rgba(255, 165, 0, 0.2)',
                    color: '#ffa500',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    border: '1px solid rgba(255, 165, 0, 0.3)'
                  }}>Python</span>
                  <span style={{
                    background: 'rgba(255, 165, 0, 0.2)',
                    color: '#ffa500',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    border: '1px solid rgba(255, 165, 0, 0.3)'
                  }}>TensorFlow</span>
                </div>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default Projects;