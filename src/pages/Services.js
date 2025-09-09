import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/mockData';
import Model3D from '../components/Model3D';
import SEOHead from '../components/SEOHead';
import ElectricBorder from '../components/ElectricBorder';
import LogoLoop from '../components/LogoLoop';
import { ChromaGrid } from '../components/ChromaGrid';
import { RotatingText } from '../components/ui/RotatingText';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazonwebservices, SiGooglecloud, SiMongodb, SiPostgresql, SiFigma, SiDocker } from 'react-icons/si';

const Services = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digital Innovation Services | Web Development, AI, 3D Visualization",
    "description": "Comprehensive digital innovation services including web development, mobile apps, AI/ML solutions, 3D visualization, cloud infrastructure, and more.",
    "url": "https://luphonix.com/services"
  };

  useEffect(() => {
    // Initialize Vanta Rings effect
    if (vantaRef.current && window.VANTA) {
      vantaEffect.current = window.VANTA.RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a0a0a,
        color: 0x00d4aa
      });
    }

    // Add fade-in animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      observer.disconnect();
    };
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
    <>
      <SEOHead
        title="Services | Luphonix Digital Innovation Agency | Web Development & AI Solutions"
        description="Comprehensive digital innovation services including web development, mobile app development, AI/ML solutions, 3D visualization, cloud infrastructure, API development, and cybersecurity services."
        keywords="digital services, web development services, mobile app development, AI development services, machine learning services, 3D visualization services, cloud infrastructure, API development services, cybersecurity services, digital transformation services"
        canonical="https://luphonix.com/services"
        structuredData={servicesStructuredData}
      />
      <div className="services-page">
      {/* Hero Section with Vanta Background */}
      <section className="section" style={{
        position: 'relative',
        overflow: 'hidden',
        height: '400px',
        zIndex: 1
      }}>
        {/* Vanta Background */}
        <div
          ref={vantaRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '400px',
            zIndex: 0,
            opacity: 0.7
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', width: '100%', position: 'relative', zIndex: 2 }}>
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
              Luphonix Delivers
              <RotatingText
                texts={["Excellence", "Innovation", "Quality", "Results", "Solutions"]}
                mainClassName="px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-black rounded-lg overflow-hidden font-semibold"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 40, stiffness: 600 }}
                rotationInterval={2800}
              />
            </h1>
            <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Featured Services with Photos */}
      <section className="section" style={{
        paddingTop: '60px',
        position: 'relative',
        zIndex: 5,
        backgroundColor: 'var(--primary-bg)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {featuredServices.map((service, index) => (
              <ElectricBorder
                key={service.id}
                color="var(--accent-green)"
                speed={0.8}
                chaos={0.3}
                thickness={2}
                style={{ borderRadius: '20px' }}
                className="fade-in"
              >
                <div
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    overflow: 'hidden',
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
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Visual Steps */}
      <section className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '20px', textAlign: 'left' }}>Our Process</h2>
          <p className="section-subtitle fade-in" style={{ marginBottom: '80px', textAlign: 'left', maxWidth: '600px' }}>
            From concept to completion, we follow a proven methodology that ensures your project succeeds at every stage
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We begin by conducting comprehensive research to understand your business objectives, target audience, and competitive landscape. This phase includes stakeholder interviews, requirements gathering, and strategic planning to ensure we're building the right solution.",
                timeline: "1-2 weeks",
                deliverables: ["Project roadmap", "Technical requirements", "User personas", "Competitive analysis"],
                image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our design team creates intuitive user experiences through wireframing, visual design, and interactive prototyping. We focus on user-centered design principles while maintaining your brand identity and ensuring optimal usability across all devices.",
                timeline: "2-3 weeks",
                deliverables: ["Wireframes", "Visual designs", "Interactive prototypes", "Design system"],
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "Using modern technologies and best practices, we build scalable, secure, and performance-optimized solutions. Our development process includes regular code reviews, automated testing, and continuous integration to ensure quality at every step.",
                timeline: "4-8 weeks",
                deliverables: ["Clean, documented code", "API integrations", "Database architecture", "Quality assurance testing"],
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "We handle the complete deployment process, from server setup to performance monitoring. Post-launch, we provide ongoing support, analytics implementation, and continuous optimization based on user feedback and performance metrics.",
                timeline: "1-2 weeks + ongoing",
                deliverables: ["Live deployment", "Performance monitoring", "Analytics setup", "Maintenance documentation"],
                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="fade-in"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'left'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    border: '3px solid var(--accent-green)',
                    marginRight: '20px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      width: '35px',
                      height: '35px',
                      background: 'var(--accent-green)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-bg)',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 style={{
                      color: 'var(--text-primary)',
                      fontSize: '22px',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      {item.title}
                    </h3>
                    <div style={{
                      background: 'var(--accent-green)',
                      color: 'var(--primary-bg)',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '12px',
                      fontWeight: '500',
                      display: 'inline-block'
                    }}>
                      {item.timeline}
                    </div>
                  </div>
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  {item.description}
                </p>

                <div>
                  <h4 style={{
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    Key Deliverables:
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '8px'
                  }}>
                    {item.deliverables.map((deliverable, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '13px',
                        color: 'var(--text-secondary)'
                      }}>
                        <i className="fas fa-check" style={{ color: 'var(--accent-green)', fontSize: '10px' }}></i>
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-in" style={{
            animationDelay: '0.8s',
            textAlign: 'center',
            marginTop: '80px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(128, 90, 213, 0.1) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 212, 170, 0.2)'
          }}>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '15px'
            }}>
              Collaborative Approach
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Throughout every phase, we maintain transparent communication with regular updates, milestone reviews, and
              feedback sessions. Our agile methodology ensures you're involved in the decision-making process while we
              handle the technical complexities.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid with ChromaGrid */}
      <section className="section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>All Services</h2>

          <div style={{ height: '1000px', position: 'relative' }} className="fade-in">
            <ChromaGrid
              items={services.map((service, index) => ({
                image: service.image || [
                  'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=300&auto=format&fit=crop', // Web Development
                  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=300&auto=format&fit=crop', // Mobile App
                  'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300&auto=format&fit=crop', // UI/UX Design
                  'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=300&auto=format&fit=crop', // E-commerce
                  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=300&auto=format&fit=crop', // AI/ML
                  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=300&auto=format&fit=crop', // Blockchain
                  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=300&auto=format&fit=crop', // Cloud Solutions
                  'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=300&auto=format&fit=crop', // DevOps
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=300&auto=format&fit=crop', // Cybersecurity
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop', // Digital Marketing
                  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=300&auto=format&fit=crop', // 3D Visualization
                  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=300&auto=format&fit=crop'  // API Development
                ][index] || `https://images.unsplash.com/photo-${1500000000000 + service.id}?q=80&w=300&auto=format&fit=crop`,
                title: service.title,
                subtitle: service.description.slice(0, 50) + '...',
                handle: `@${service.title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}`,
                borderColor: service.color || 'var(--accent-green)',
                gradient: service.gradient || `linear-gradient(145deg, ${service.color || 'var(--accent-green)'}, #000)`,
                url: '/contact',
                icon: service.icon,
                features: service.features
              }))}
              radius={400}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
              columns={3}
              rows={Math.ceil(services.length / 3)}
            />
          </div>
        </div>
      </section>

      {/* 3D Model Experience Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)', padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in">Experience Our 3D Capabilities</h2>
          <p className="section-subtitle fade-in" style={{ marginBottom: '60px' }}>
            Interactive 3D modeling and visualization showcase
          </p>
          <div className="fade-in" style={{
            animationDelay: '0.2s',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <Model3D
              modelPath="/ganpati.glb"
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
              Explore our advanced 3D modeling and web integration capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '20px', textAlign: 'center' }}>
            Technologies We Master
          </h2>
          <p className="section-subtitle fade-in" style={{ marginBottom: '60px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            Leveraging cutting-edge technologies to deliver exceptional digital solutions
          </p>

          <div className="fade-in" style={{
            animationDelay: '0.2s',
            height: '120px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
          }}>
            <LogoLoop
              logos={[
                { node: <SiReact style={{ color: '#61DAFB' }} />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs style={{ color: '#000000' }} />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiTypescript style={{ color: '#3178C6' }} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                { node: <SiTailwindcss style={{ color: '#06B6D4' }} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                { node: <SiNodedotjs style={{ color: '#339933' }} />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiPython style={{ color: '#3776AB' }} />, title: "Python", href: "https://python.org" },
                { node: <SiAmazonwebservices style={{ color: '#FF9900' }} />, title: "AWS", href: "https://aws.amazon.com" },
                { node: <SiGooglecloud style={{ color: '#4285F4' }} />, title: "Google Cloud", href: "https://cloud.google.com" },
                { node: <SiMongodb style={{ color: '#47A248' }} />, title: "MongoDB", href: "https://mongodb.com" },
                { node: <SiPostgresql style={{ color: '#336791' }} />, title: "PostgreSQL", href: "https://postgresql.org" },
                { node: <SiFigma style={{ color: '#F24E1E' }} />, title: "Figma", href: "https://figma.com" },
                { node: <SiDocker style={{ color: '#2496ED' }} />, title: "Docker", href: "https://docker.com" }
              ]}
              speed={60}
              direction="left"
              logoHeight={64}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="var(--primary-bg)"
              ariaLabel="Technology partners"
            />
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
    </>
  );
};

export default Services;