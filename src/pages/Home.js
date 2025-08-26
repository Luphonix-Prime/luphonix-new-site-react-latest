import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, projects } from '../data/mockData';
import { useBlog } from '../context/BlogContext';
import RollingGallery from '../components/RollingGallery';
import Carousel from '../components/Carousel';
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

  const languageSlides = [
    {
      src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "React.js",
      description: "A powerful JavaScript library for building user interfaces with component-based architecture.",
      features: ["Virtual DOM", "Component Reusability", "Large Ecosystem", "JSX Syntax"],
      button: "Explore React"
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Node.js",
      description: "Server-side JavaScript runtime built on Chrome's V8 engine for scalable backend applications.",
      features: ["Event-driven", "Non-blocking I/O", "NPM Ecosystem", "Cross-platform"],
      button: "Explore Node.js"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Python",
      description: "Versatile programming language perfect for AI, data science, and web development.",
      features: ["Simple Syntax", "Rich Libraries", "AI/ML Support", "Cross-platform"],
      button: "Explore Python"
    },
    {
      src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "MongoDB",
      description: "NoSQL database that provides high performance, high availability, and easy scalability.",
      features: ["Document-based", "Horizontal Scaling", "Flexible Schema", "Rich Queries"],
      button: "Explore MongoDB"
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "TypeScript",
      description: "Strongly typed programming language that builds on JavaScript by adding static type definitions.",
      features: ["Type Safety", "Enhanced IDE Support", "Better Refactoring", "Compile-time Errors"],
      button: "Explore TypeScript"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Docker",
      description: "Platform for developing, shipping, and running applications using containerization technology.",
      features: ["Containerization", "Portability", "Scalability", "DevOps Integration"],
      button: "Explore Docker"
    }
  ];

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
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)', padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in">Programming Languages & Technologies</h2>
          <p className="section-subtitle fade-in" style={{ marginBottom: '80px' }}>
            Discover the powerful technologies we use to build exceptional solutions
          </p>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <Carousel 
            slides={languageSlides} 
            autoRotate={true} 
            rotationInterval={4000} 
          />
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
            <RollingGallery />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;