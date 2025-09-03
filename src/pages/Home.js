import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, projects, slides } from '../data/mockData'; // Import slides from mockData
import { useBlog } from '../context/BlogContext';
import RollingGallery from '../components/RollingGallery';
import Carousel from '../components/Carousel';
import Model3D from '../components/Model3D';
import '../components/BlogAnimations.css';

// Utility function for class merging (assuming it's needed for Carousel or other components)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Home = () => {
  const { state } = useBlog();
  const { posts: blogPosts } = state;
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  // Removed hardcoded languageSlides array

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Digital Innovation That <span className="gradient-text">Drives Results</span>
            </h1>
            <p className="hero-subtitle">
              We create cutting-edge digital experiences that transform businesses and captivate audiences.
              From web development to AI solutions, we're your partner in digital transformation.
            </p>
            <Link to="/contact" className="cta-button">
              Start Your Project
              <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="section-title fade-in">Our Services</h2>
          <p className="section-subtitle fade-in">
            Comprehensive digital solutions tailored to your business needs
          </p>
          <div className="services-grid">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.id} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="cta-button" style={{ marginTop: '20px' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/services" className="cta-button">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <p className="section-subtitle fade-in">
            Showcasing our latest work and innovative solutions
          </p>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="project-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.short_description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    {project.project_url && (
                      <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ fontSize: '12px', padding: '8px 16px' }}>
                        <i className="fas fa-external-link-alt" style={{ marginRight: '5px' }}></i>
                        View Live
                      </a>
                    )}
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ fontSize: '12px', padding: '8px 16px', background: 'transparent', border: '1px solid var(--accent-green)' }}>
                        <i className="fab fa-github" style={{ marginRight: '5px' }}></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/projects" className="cta-button">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="section-title fade-in">Latest Insights</h2>
          <p className="section-subtitle fade-in">
            Stay updated with the latest trends and best practices
          </p>
          <div className="blog-grid-animated">
            {recentPosts.map((post, index) => (
              <div key={post.id} className="blog-card-animated fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="blog-image-container">
                  <img src={post.featured_image} alt={post.title} className="blog-image blog-image-animated" />
                  <div className="reading-progress"></div>
                </div>
                <div className="blog-content-animated">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="tech-tag tech-tag-animated"
                        style={{
                          fontSize: '10px',
                          animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="blog-title blog-title-animated">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta blog-meta-animated">
                    <span><i className="fas fa-clock" style={{ marginRight: '5px', color: 'var(--accent-green)' }}></i>{post.read_time} min read</span>
                    <span><i className="fas fa-calendar" style={{ marginRight: '5px', color: 'var(--accent-green)' }}></i>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="cta-button cta-button-animated"
                    style={{
                      fontSize: '12px',
                      padding: '10px 18px',
                      marginTop: '15px',
                      position: 'relative',
                      zIndex: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    Read More
                    <i className="fas fa-arrow-right" style={{ transition: 'transform 0.3s ease' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/blog" className="cta-button">View All Posts</Link>
          </div>
        </div>
      </section>

      {/* Languages Education Section */}
      <section className="section" style={{ 
        backgroundColor: 'var(--secondary-bg)', 
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(var(--accent-green-rgb), 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--accent-purple-rgb), 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="fade-in" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px',
              background: 'rgba(var(--accent-green-rgb), 0.1)',
              padding: '12px 24px',
              borderRadius: '30px',
              border: '1px solid rgba(var(--accent-green-rgb), 0.2)',
              marginBottom: '30px'
            }}>
              <i className="fas fa-code" style={{ 
                color: 'var(--accent-green)', 
                fontSize: '18px' 
              }}></i>
              <span style={{ 
                color: 'var(--accent-green)', 
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Tech Stack
              </span>
            </div>
            
            <h2 className="section-title fade-in" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-green) 50%, var(--accent-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '25px',
              lineHeight: '1.2'
            }}>
              Programming Languages &<br />
              <span style={{ color: 'var(--accent-green)' }}>Technologies</span>
            </h2>
            
            <p className="section-subtitle fade-in" style={{ 
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Discover the powerful technologies we use to build exceptional solutions and drive innovation
            </p>
          </div>

          {/* Enhanced Carousel Container */}
          <div className="fade-in" style={{ 
            animationDelay: '0.2s',
            position: 'relative'
          }}>
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent-green), var(--accent-purple))',
              borderRadius: '2px',
              zIndex: 1
            }}></div>
            
            <div style={{
              background: 'rgba(var(--card-bg-rgb), 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Inner glow effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(var(--accent-green-rgb), 0.02) 0%, rgba(var(--accent-purple-rgb), 0.02) 100%)',
                borderRadius: '25px',
                pointerEvents: 'none'
              }}></div>
              
              <Carousel
                slides={slides}
                autoRotate={true}
                rotationInterval={4000}
              />
            </div>
            
            {/* Bottom decorative line */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'var(--accent-green)',
              borderRadius: '2px',
              opacity: '0.7'
            }}></div>
          </div>

          {/* Additional Tech Stats */}
          <div className="fade-in" style={{
            animationDelay: '0.4s',
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            maxWidth: '800px',
            margin: '80px auto 0'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '30px 20px',
              background: 'rgba(var(--card-bg-rgb), 0.3)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'var(--accent-green)',
                marginBottom: '10px'
              }}>15+</div>
              <p style={{ 
                margin: 0, 
                color: 'var(--text-secondary)',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Technologies</p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '30px 20px',
              background: 'rgba(var(--card-bg-rgb), 0.3)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'var(--accent-purple)',
                marginBottom: '10px'
              }}>5+</div>
              <p style={{ 
                margin: 0, 
                color: 'var(--text-secondary)',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Years Experience</p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '30px 20px',
              background: 'rgba(var(--card-bg-rgb), 0.3)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#FF6B6B',
                marginBottom: '10px'
              }}>100+</div>
              <p style={{ 
                margin: 0, 
                color: 'var(--text-secondary)',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rolling Gallery Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Gallery</h2>
          <p className="section-subtitle fade-in">
            Visual showcase of our work and achievements
          </p>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
        </div>
      </section>

      {/* 3D Model Experience Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)', padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in">Interactive 3D Experience</h2>
          <p className="section-subtitle fade-in" style={{ marginBottom: '60px' }}>
            Explore our 3D modeling and visualization capabilities
          </p>
          <div className="fade-in" style={{ 
            animationDelay: '0.2s',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <Model3D 
              modelPath="/krishna.glb"
              containerStyle={{
                height: '500px'
              }}
              showBorder={false}
              enableRotation={false}
            />
            <p style={{ 
              color: 'var(--text-secondary)', 
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '300',
              marginTop: '20px'
            }}>
              Interactive 3D model showcasing our technical expertise in 3D graphics and web technologies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;