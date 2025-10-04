import React, { useEffect } from 'react';
import { WavyBackground } from '../components/WavyBackground';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const Products = () => {
  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Products | Luphonix Digital Solutions Portfolio",
    "description": "Discover LUPHONIX's innovative digital products including software solutions, IoT systems, and e-commerce platforms built with cutting-edge technology.",
    "url": "https://luphonix.com/products"
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

  const productCategories = [
    {
      icon: "fas fa-laptop-code",
      name: "Software Solutions",
      description: "Advanced inventory systems, security checkers, and custom web applications",
      image: "/images/products/soft-sol.png",
      features: ["Custom Development", "Cloud Integration", "Real-time Analytics"]
    },
    {
      icon: "fas fa-microchip",
      name: "IoT Solutions",
      description: "Smart farming systems like Prithvi Sahay – innovative agricultural automation",
      image: "/images/products/iot1.jpg",
      features: ["Smart Sensors", "Remote Monitoring", "Automated Control"]
    },
    {
      icon: "fas fa-shopping-cart",
      name: "eCommerce Platforms",
      description: "Complete e-commerce solutions like NixKart with modern features",
      image: "/images/products/ecommerce.png",
      features: ["Payment Integration", "Inventory Management", "Mobile Responsive"]
    }
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-rocket",
      title: "Cutting-edge Technology",
      description: "Latest frameworks and tools for superior performance"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Reliability",
      description: "Bank-grade security with 99.9% uptime guarantee"
    },
    {
      icon: "fas fa-users",
      title: "User-Friendly Design",
      description: "Intuitive interfaces designed for optimal user experience"
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Fast & Scalable Solutions",
      description: "High-performance applications that grow with your business"
    }
  ];

  const caseStudies = [
    {
      title: "LupSync",
  description: "Collaboration and synchronization platform that improved workflow efficiency by 70%",
  stats: "70% Workflow Efficiency Boost",
  icon: "fas fa-sync-alt",
  tech: ["React", "Node.js", "GraphQL", "PostgreSQL"]
    },
    {
      title: "NixKart E-commerce",
      description: "Full-featured e-commerce platform serving 10,000+ customers",
      stats: "10K+ Active Users",
      icon: "fas fa-store",
      tech: ["Next.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "IoT Business Solutions",
      description: "Tailored IoT solutions designed to match each customer’s unique business needs, improving automation and decision-making.",
      stats: "60% Operational Efficiency Boost",
      icon: "fas fa-microchip",
      tech: ["IoT Devices", "MQTT", "Node.js", "Python", "Cloud Integration"]
    }
  ];

  const techStack = [
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Wagtail", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
  ];

  return (
    <>
      <SEOHead
        title="Products | LUPHONIX Digital Solutions | Software & IoT Innovation"
        description="Discover LUPHONIX's innovative digital products including software solutions, IoT systems, and e-commerce platforms. Built with cutting-edge technology for maximum reliability and performance."
        keywords="digital products, software solutions, IoT systems, e-commerce platforms, custom applications, smart farming, inventory systems, web applications"
        canonical="https://luphonix.com/products"
        structuredData={productsStructuredData}
      />
      <div className="products-page">
        {/* Header Section */}
        <section className="section" style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <WavyBackground
              containerClassName=""
              style={{ width: '100%', height: '100%' }}
              waveWidth={30}
              backgroundFill="#0a0a0a"
              blur={10}
              speed="fast"
              waveOpacity={0.4}
            />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <h1 className="fade-in" style={{
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '300',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                Our Products
              </h1>
              <p className="section-subtitle fade-in" style={{ 
                color: '#ffffff', 
                textShadow: '0 0 25px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.9), 3px 3px 10px rgba(0,0,0,1)',
                fontSize: '1.2rem',
                fontWeight: '600',
                letterSpacing: '0.02em',
                marginTop: '20px',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '20px auto',
                lineHeight: '1.6',
                WebkitTextFillColor: '#ffffff'
              }}>
                From concept to creation — explore our product lineup
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container">
            <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>Product Categories</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
              {productCategories.map((category, index) => (
                <div key={index} className="fade-in" style={{
                  animationDelay: `${index * 0.2}s`,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '30px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
                >
                  <div style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '15px',
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: '25px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      width: '50px',
                      height: '50px',
                      background: 'var(--accent-green)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className={category.icon} style={{ fontSize: '20px', color: 'white' }}></i>
                    </div>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: 'var(--text-primary)',
                    fontWeight: '300'
                  }}>
                    {category.name}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontWeight: '300'
                  }}>
                    {category.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                    {category.features.map(feature => (
                      <span key={feature} style={{
                        background: 'rgba(0, 212, 170, 0.1)',
                        color: 'var(--accent-green)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '12px',
                        border: '1px solid rgba(0, 212, 170, 0.2)'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <Link
                      to="/contact"
                      className="cta-button"
                      style={{
                        fontSize: '14px',
                        padding: '14px 26px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, var(--accent-green), #00a86b)',
                        fontWeight: '600',
                        boxShadow: '0 6px 20px rgba(0, 212, 170, 0.25)'
                      }}
                    >
                      <i className="fas fa-calculator"></i>
                      Request Custom Quote
                    </Link>
                    <Link
                      to="/contact"
                      className="cta-button"
                      style={{
                        fontSize: '14px',
                        padding: '14px 26px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'transparent',
                        border: '2px solid var(--accent-green)',
                        color: 'var(--accent-green)',
                        fontWeight: '600'
                      }}
                    >
                      <i className="fas fa-play"></i>
                      Live Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: 'var(--secondary-bg)', padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>Why Choose LUPHONIX</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px'
            }}>
              {whyChooseUs.map((item, index) => (
                <div key={index} className="fade-in" style={{
                  animationDelay: `${index * 0.1}s`,
                  textAlign: 'center',
                  padding: '30px 20px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--accent-green), var(--accent-purple))',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                  >
                    <i className={item.icon} style={{ fontSize: '30px', color: 'white' }}></i>
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '15px',
                    color: 'var(--text-primary)',
                    fontWeight: '300'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    fontWeight: '300'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories / Case Studies */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title fade-in" style={{ marginBottom: '20px' }}>Customer Success Stories</h2>
            <p className="section-subtitle fade-in" style={{ marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
              Real-world impact with measurable results from our innovative solutions
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              {caseStudies.map((study, index) => (
                <div key={index} className="fade-in" style={{
                  animationDelay: `${index * 0.2}s`,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '30px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--accent-green)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <i className={study.icon} style={{ fontSize: '20px', color: 'white' }}></i>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        color: 'var(--text-primary)',
                        fontWeight: '300',
                        marginBottom: '5px'
                      }}>
                        {study.title}
                      </h3>
                      <div style={{
                        background: 'rgba(0, 212, 170, 0.2)',
                        color: 'var(--accent-green)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '12px',
                        display: 'inline-block'
                      }}>
                        {study.stats}
                      </div>
                    </div>
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontWeight: '300'
                  }}>
                    {study.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {study.tech.map(tech => (
                      <span key={tech} style={{
                        background: 'rgba(138, 43, 226, 0.1)',
                        color: 'var(--accent-purple)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        border: '1px solid rgba(138, 43, 226, 0.2)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title fade-in" style={{ marginBottom: '20px' }}>Our Tech Stack</h2>
            <p className="section-subtitle fade-in" style={{ marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
              Powered by cutting-edge technologies for maximum performance and scalability
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '30px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {techStack.map((tech, index) => (
                <div key={index} className="fade-in" style={{
                  animationDelay: `${index * 0.1}s`,
                  textAlign: 'center',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      marginBottom: '15px',
                      filter: 'brightness(0.8)',
                      transition: 'filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.filter = 'brightness(1)'}
                    onMouseLeave={(e) => e.target.style.filter = 'brightness(0.8)'}
                  />
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    fontWeight: '300'
                  }}>
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="section" style={{ padding: '100px 0', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}>
          <div className="container">
            <h2 className="section-title fade-in" style={{ marginBottom: '20px' }}>Our Development Process</h2>
            <p className="section-subtitle fade-in" style={{ marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
              From discovery to deployment and beyond - our proven 7-step process ensures successful product delivery
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              {[
                {
                  step: "01",
                  title: "Discovery & Consultation",
                  description: "Understand client needs, goals, and challenges. Brainstorm innovative solutions aligned with business objectives.",
                  icon: "fas fa-search",
                  color: "#00d4aa"
                },
                {
                  step: "02", 
                  title: "Planning & Strategy",
                  description: "Define roadmap, timeline, and resources. Select the right tech stack (React, Django, Python, AI, IoT, etc.). Prepare project milestones.",
                  icon: "fas fa-route",
                  color: "#8a2be2"
                },
                {
                  step: "03",
                  title: "Design & Prototyping", 
                  description: "UI/UX design with Figma & custom design systems. Interactive prototypes to visualize the final product. Gather client feedback before development.",
                  icon: "fas fa-palette",
                  color: "#ff6b6b"
                },
                {
                  step: "04",
                  title: "Development & Integration",
                  description: "Frontend development (React.js, HTML, CSS, JavaScript). Backend development (Python, Django, CMS, APIs). Integration with databases, cloud services, or IoT systems.",
                  icon: "fas fa-code",
                  color: "#4ecdc4"
                },
                {
                  step: "05",
                  title: "Testing & Quality Assurance",
                  description: "Functional, performance, and security testing. Bug fixing & optimization. Ensure smooth cross-platform performance.",
                  icon: "fas fa-bug",
                  color: "#ffe66d"
                },
                {
                  step: "06",
                  title: "Deployment & Launch",
                  description: "Deploy on secure platforms (Google Cloud, custom servers). Monitor performance post-launch. Provide documentation and training if required.",
                  icon: "fas fa-rocket",
                  color: "#ff8b94"
                },
                {
                  step: "07",
                  title: "Support & Scaling",
                  description: "Continuous maintenance and updates. Scale solutions as the client's business grows. Offer 24/7 support and feature upgrades.",
                  icon: "fas fa-chart-line",
                  color: "#95e1d3"
                }
              ].map((process, index) => (
                <div key={index} className="fade-in" style={{
                  animationDelay: `${index * 0.15}s`,
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = process.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(${process.color === '#00d4aa' ? '0, 212, 170' : process.color === '#8a2be2' ? '138, 43, 226' : process.color === '#ff6b6b' ? '255, 107, 107' : process.color === '#4ecdc4' ? '78, 205, 196' : process.color === '#ffe66d' ? '255, 230, 109' : process.color === '#ff8b94' ? '255, 139, 148' : '149, 225, 211'}, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {/* Step Number */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '20px',
                    fontSize: '80px',
                    fontWeight: '900',
                    color: 'rgba(255, 255, 255, 0.05)',
                    lineHeight: '1',
                    userSelect: 'none'
                  }}>
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: `linear-gradient(135deg, ${process.color}, ${process.color}99)`,
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <i className={process.icon} style={{ 
                      fontSize: '28px', 
                      color: 'white',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}></i>
                  </div>

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      marginBottom: '15px',
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                      lineHeight: '1.3'
                    }}>
                      {process.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      fontSize: '14px',
                      fontWeight: '300'
                    }}>
                      {process.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '100px',
                    height: '100px',
                    background: `radial-gradient(circle, ${process.color}20 0%, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 1
                  }}></div>
                </div>
              ))}
            </div>

            {/* Process Flow Indicator */}
            <div className="fade-in" style={{ 
              textAlign: 'center', 
              marginTop: '80px',
              animationDelay: '1s'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '15px',
                padding: '20px 30px',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid rgba(0, 212, 170, 0.3)',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)'
              }}>
                <i className="fas fa-infinity" style={{ color: 'var(--accent-green)', fontSize: '20px' }}></i>
                <span style={{ color: 'var(--accent-green)', fontWeight: '500' }}>
                  Continuous Iteration & Improvement
                </span>
              </div>
            </div>
          </div>
        </section>

      {/* Responsive Styles for Products Page */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .product-tech-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important;
            gap: 20px !important;
          }
          .product-process-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
        
        @media (max-width: 480px) {
          .products-header {
            height: 50vh !important;
            min-height: 400px !important;
          }
          .product-card {
            padding: 30px 20px !important;
          }
          .product-process-grid {
            gap: 25px !important;
          }
        }
      `}} />
 
       
      </div>
    </>
  );
};

export default Products;