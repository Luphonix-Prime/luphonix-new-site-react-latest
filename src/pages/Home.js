import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, projects, slides } from '../data/mockData'; // Import slides from mockData
import { useBlog } from '../context/BlogContext';
import RollingGallery from '../components/RollingGallery';
import Carousel from '../components/Carousel';
import Model3D from '../components/Model3D';
import SEOHead from '../components/SEOHead';
import '../components/BlogAnimations.css';
import { RotatingText } from '../components/ui/RotatingText'; // Import RotatingText
import { NeonLogo3D } from '../components/ui/NeonLogo3D'; // Import 3D Logo

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

  // SEO structured data
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Luphonix - Digital Innovation Agency | Web Development & AI Solutions",
    "description": "Leading digital innovation agency specializing in web development, mobile apps, AI/ML solutions, 3D visualization, and cloud infrastructure. Transform your business with cutting-edge technology.",
    "url": "https://luphonix.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Luphonix",
      "serviceType": ["Web Development", "AI Development", "3D Visualization", "Mobile App Development"]
    }
  };

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
    <>
      <SEOHead
        title="Luphonix | Digital Innovation Agency | Web Development & AI Solutions"
        description="Leading digital innovation agency specializing in web development, mobile apps, AI/ML solutions, 3D visualization, and cloud infrastructure. Transform your business with cutting-edge technology and expert development services."
        keywords="Luphonix, digital innovation, web development, mobile apps, AI development, machine learning, 3D visualization, WebGL, React development, Node.js, cloud infrastructure, digital transformation, software development, tech solutions, infinity solutions, custom software, API development"
        canonical="https://luphonix.com"
        structuredData={homePageStructuredData}
      />
      <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '60px', 
            alignItems: 'center',
            minHeight: '100vh',
            padding: '80px 0'
          }}>
            {/* Left Content */}
            <div className="hero-content fade-in">
              <h1 className="hero-title">
                Digital Innovation That <span className="gradient-text">Drives Results</span>
              </h1>
              <p className="hero-subtitle">
                We create cutting-edge digital experiences that transform businesses and captivate audiences.
                From web development to AI solutions, we're your partner in digital transformation.
              </p>
              {/* Added RotatingText component here */}
              <RotatingText
                texts={[
                  "Innovative Web Solutions",
                  "AI-Powered Development",
                  "Stunning 3D Visualizations",
                  "Seamless Mobile Apps"
                ]}
                className="hero-rotating-text"
              />
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/contact" className="cta-button" style={{
                  fontSize: '16px',
                  padding: '18px 36px',
                  background: 'linear-gradient(135deg, var(--accent-green), #00a86b)',
                  boxShadow: '0 8px 25px rgba(0, 212, 170, 0.3)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Request Free Quote
                  <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </Link>
                <Link to="/services" className="cta-button" style={{
                  fontSize: '16px',
                  padding: '18px 36px',
                  background: 'transparent',
                  border: '2px solid var(--accent-green)',
                  color: 'var(--accent-green)',
                  fontWeight: '600'
                }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '10px' }}></i>
                  Schedule Demo
                </Link>
              </div>
            </div>
            
            {/* Right Side - 3D Logo Animation */}
            <div className="fade-in" style={{ 
              animationDelay: '0.3s',
              height: '600px',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 212, 170, 0.2)'
            }}>
              <NeonLogo3D />
            </div>
          </div>
        </div>
        
        {/* Responsive CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .hero .container > div {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center !important;
            }
            .hero .fade-in:last-child {
              height: 400px !important;
            }
          }
        `}} />
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
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="cta-button" style={{
                fontSize: '16px',
                padding: '16px 32px',
                background: 'transparent',
                border: '2px solid var(--accent-green)',
                color: 'var(--accent-green)',
                fontWeight: '600'
              }}>
                View All Services
              </Link>
              <Link to="/contact" className="cta-button" style={{
                fontSize: '16px',
                padding: '16px 32px',
                background: 'var(--accent-green)',
                fontWeight: '600',
                boxShadow: '0 6px 20px rgba(0, 212, 170, 0.25)'
              }}>
                <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
                Get Started Now
              </Link>
            </div>
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
          <div style={{ 
            textAlign: 'center', 
            marginTop: '80px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(26, 26, 26, 0.5))',
            borderRadius: '20px',
            border: '1px solid rgba(0, 212, 170, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-green)' }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>
              Join 500+ satisfied clients who've revolutionized their digital presence
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="cta-button" style={{
                fontSize: '16px',
                padding: '16px 32px',
                background: 'transparent',
                border: '2px solid var(--accent-green)',
                color: 'var(--accent-green)',
                fontWeight: '600'
              }}>
                View Portfolio
              </Link>
              <Link to="/contact" className="cta-button" style={{
                fontSize: '16px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, var(--accent-green), #00a86b)',
                fontWeight: '600',
                boxShadow: '0 6px 20px rgba(0, 212, 170, 0.3)'
              }}>
                <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>
                Start Your Project
              </Link>
            </div>
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
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/blog" className="cta-button" style={{
                fontSize: '16px',
                padding: '16px 32px',
                background: 'transparent',
                border: '2px solid var(--accent-green)',
                color: 'var(--accent-green)',
                fontWeight: '600'
              }}>
                Read More Insights
              </Link>
              <Link to="/contact" className="cta-button" style={{
                fontSize: '16px',
                padding: '16px 32px',
                background: 'var(--accent-green)',
                fontWeight: '600',
                boxShadow: '0 6px 20px rgba(0, 212, 170, 0.25)'
              }}>
                <i className="fas fa-comments" style={{ marginRight: '8px' }}></i>
                Let's Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Education Section */}
      <section className="section" style={{ 
        backgroundColor: 'var(--secondary-bg)', 
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '800px'
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

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-green) 50%, var(--accent-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px',
              lineHeight: '1.3'
            }}>
              Programming Languages &<br />
              <span style={{ color: 'var(--accent-green)' }}>Technologies</span>
            </h2>

            <p className="section-subtitle fade-in" style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontWeight: '300',
              padding: '0 15px'
            }}>
              Discover the powerful technologies we use to build exceptional solutions and drive innovation
            </p>
          </div>

          {/* Enhanced Carousel Container */}
          <div className="fade-in" style={{
            animationDelay: '0.2s',
            position: 'relative',
            margin: '60px 0 80px 0'
          }}>
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-30px',
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
              padding: '40px 20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              margin: '30px auto',
              maxWidth: '100%'
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
          <h2 className="section-title fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
            Interactive 3D Experience
          </h2>

          <div className="model-layout" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* 3D Model - Left Side */}
            <div className="fade-in" style={{ 
              animationDelay: '0.2s'
            }}>
              <Model3D 
                modelPath="/krishna.glb"
                containerStyle={{
                  height: '500px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                showBorder={false}
                enableRotation={true}
              />
            </div>

            {/* Text Content - Right Side */}
            <div className="fade-in" style={{ 
              animationDelay: '0.4s',
              padding: '40px 0'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(var(--accent-green-rgb), 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                border: '1px solid rgba(var(--accent-green-rgb), 0.2)',
                marginBottom: '30px'
              }}>
                <i className="fas fa-cube" style={{ 
                  color: 'var(--accent-green)', 
                  fontSize: '16px' 
                }}></i>
                <span style={{ 
                  color: 'var(--accent-green)', 
                  fontWeight: '600',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  3D Visualization
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '25px',
                lineHeight: '1.3'
              }}>
                Immersive 3D Models &<br />
                <span style={{ color: 'var(--accent-green)' }}>WebGL Experiences</span>
              </h3>

              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '30px'
              }}>
                Experience cutting-edge 3D visualization technology powered by WebGL and Three.js. 
                Our interactive models showcase detailed craftsmanship with smooth animations, 
                realistic lighting, and responsive controls that work seamlessly across all devices.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '35px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(var(--accent-green-rgb), 0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-mouse-pointer" style={{ color: 'var(--accent-green)', fontSize: '16px' }}></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600' }}>
                      Interactive Controls
                    </h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '12px' }}>
                      Drag to rotate
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(var(--accent-purple-rgb), 0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-mobile-alt" style={{ color: 'var(--accent-purple)', fontSize: '16px' }}></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600' }}>
                      Mobile Ready
                    </h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '12px' }}>
                      Touch optimized
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button style={{
                  background: 'var(--accent-green)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-play"></i>
                  View More Models
                </button>

                <button style={{
                  background: 'transparent',
                  color: 'var(--accent-green)',
                  border: '2px solid var(--accent-green)',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-info-circle"></i>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Add responsive CSS */}
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              .model-layout {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
          `}} />
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;