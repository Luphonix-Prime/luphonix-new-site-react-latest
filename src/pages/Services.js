
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/mockData';

const Services = () => {
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

  const featuredServices = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "fas fa-code",
      technologies: ["React", "Node.js", "Python", "PostgreSQL"],
      color: "var(--accent-green)"
    },
    {
      id: 2,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "fas fa-mobile-alt",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "var(--accent-purple)"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "fas fa-paint-brush",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      color: "#FF6B6B"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <h1 className="section-title fade-in">Our Services</h1>
          <p className="section-subtitle fade-in">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
        </div>
      </section>

      {/* Featured Services with Photos */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {featuredServices.map((service, index) => (
              <div 
                key={service.id}
                className="fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 212, 170, 0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Service Image */}
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '60px',
                    height: '60px',
                    background: service.color,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px'
                  }}>
                    <i className={service.icon}></i>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))'
                  }}></div>
                </div>

                {/* Service Content */}
                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '25px'
                  }}>
                    {service.technologies.map(tech => (
                      <span
                        key={tech}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'var(--text-secondary)',
                          padding: '5px 12px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    style={{
                      background: service.color,
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Visual Steps */}
      <section className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>Our Process</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into understanding your business goals and requirements",
                image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                step: "02", 
                title: "Design",
                description: "Creating wireframes, prototypes and visual designs that align with your vision",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                step: "03",
                title: "Development",
                description: "Building robust, scalable solutions using the latest technologies",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploying your solution and providing ongoing support and maintenance",
                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="fade-in"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  position: 'relative',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  border: '3px solid var(--accent-green)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '40px',
                    height: '40px',
                    background: 'var(--accent-green)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-bg)',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>
                    {item.step}
                  </div>
                </div>
                
                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>All Services</h2>
          
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {services.map((service, index) => (
              <div key={service.id} className="service-card fade-in" style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--accent-green)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '24px',
                  color: 'white'
                }}>
                  <i className={service.icon}></i>
                </div>
                
                <h3 className="service-title" style={{
                  color: 'var(--text-primary)',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  {service.title}
                </h3>
                
                <p className="service-description" style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {service.description}
                </p>
                
                <div className="service-features" style={{ marginBottom: '25px' }}>
                  {service.features?.slice(0, 3).map((feature, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)'
                    }}>
                      <i className="fas fa-check" style={{ color: 'var(--accent-green)', fontSize: '10px' }}></i>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="service-cta"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: 'transparent',
                    color: 'var(--accent-green)',
                    border: '1px solid var(--accent-green)',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--accent-green) 0%, var(--accent-purple) 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 className="fade-in" style={{
            color: 'white',
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Ready to Start Your Project?
          </h2>
          
          <p className="fade-in" style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '18px',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Let's discuss how we can help transform your ideas into reality
          </p>
          
          <Link 
            to="/contact"
            className="fade-in"
            style={{
              display: 'inline-block',
              padding: '15px 40px',
              background: 'white',
              color: 'var(--primary-bg)',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              animationDelay: '0.3s'
            }}
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
