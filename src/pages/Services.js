import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/mockData';
import Model3D from '../components/Model3D';
import SEOHead from '../components/SEOHead';
import ElectricBorder from '../components/ElectricBorder';
import LogoLoop from '../components/LogoLoop';
import { ChromaGrid } from '../components/ChromaGrid';
import { RotatingText } from '../components/ui/RotatingText';
import Orb from '../components/Orb';
import WebGLErrorBoundary from '../components/WebGLErrorBoundary';
import { getImagePath } from '../utils/imageUtils';
import { TestimonialsSection } from '../components/ui/TestimonialsWithMarquee';


import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazonwebservices, SiGooglecloud, SiMongodb, SiPostgresql, SiFigma, SiDocker } from 'react-icons/si';

// Interactive Process Steps Component
const ProcessStepsSection = () => {
  const [activeStep, setActiveStep] = React.useState(0); // Start from first step
  const [isHovered, setIsHovered] = React.useState(false);

  // Auto-cycle through steps every 2 seconds when not hovered
  React.useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4); // Cycle through 0-3
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Strategy",
      content: "We begin by conducting comprehensive research to understand your business objectives, target audience, and requirements. This discovery phase includes stakeholder interviews, requirement gathering, and strategic planning to ensure we deliver the right solution.",
      image: "discovering.jpg",
      alt: "Discovery & Strategy Process"
    },
    {
      step: 2,
      title: "Design & Prototyping",
      content: "Our design team creates wireframes and high-fidelity prototypes focused on user experience, design, and interactive prototyping. We focus on user-centered design principles while maintaining your brand identity and ensuring optimal usability across all platforms.",
      image: "designing.jpg",
      alt: "Design & Prototyping Process"
    },
    {
      step: 3,
      title: "Development & Integration",
      content: "Using modern technologies and best practices, we build scalable, secure, and performance-optimized solutions. Our development process includes regular code reviews, automated testing, and continuous integration to ensure quality at every step.",
      image: "Development & Integration.jpg",
      alt: "Development & Integration Process"
    },
    {
      step: 4,
      title: "Launch & Optimization",
      content: "We handle the complete deployment process with comprehensive testing and performance monitoring. Post-launch, we provide ongoing support, analytics implementation, and continuous optimization based on user feedback and performance metrics.",
      image: "Launch.jpg",
      alt: "Launch & Optimization Process"
    }
  ];

  const currentStep = processSteps[activeStep];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      marginBottom: '80px'
    }}>
      {/* Text Content - Left Side */}
      <div>
        <div style={{
          display: 'grid',
          gap: '40px'
        }}>
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              onMouseEnter={() => {
                setIsHovered(true);
                setActiveStep(index);
              }}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                padding: '30px',
                background: activeStep === index
                  ? 'rgba(0, 212, 170, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: activeStep === index
                  ? '2px solid var(--accent-green)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: activeStep === index ? 'translateX(10px)' : 'translateX(0)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-bg)',
                  fontWeight: '600'
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: activeStep === index ? 'var(--accent-green)' : 'var(--text-primary)',
                  margin: 0,
                  transition: 'color 0.3s ease'
                }}>
                  {step.title}
                </h3>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                margin: 0
              }}>
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Content - Right Side */}
      <div style={{
        position: 'relative',
        height: '600px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
      }}>
       <img
  src={getImagePath(currentStep.image, 'process')}
  alt={currentStep.alt}
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.8',
    transition: 'all 0.5s ease'
  }}
/>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '60%',
          background: 'linear-gradient(to top, var(--primary-bg), rgba(0,0,0,0.5), transparent)'
        }} />

        {/* Overlay Content */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          right: '30px',
          color: 'white',
          transition: 'all 0.3s ease'
        }}>
          <h4 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '15px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            {currentStep.title}
          </h4>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            margin: 0
          }}>
            {currentStep.content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {


  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digital Innovation Services | Web Development, AI, 3D Visualization",
    "description": "Comprehensive digital innovation services including web development, mobile app development, AI/ML solutions, 3D visualization, cloud infrastructure, API development, and cybersecurity services.",
    "url": "https://luphonix.com/services"
  };

  useEffect(() => {

    // Enhanced scroll animation observer for all fade-in elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Special observer for process step cards with enhanced animations
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay
          setTimeout(() => {
            entry.target.classList.add('animate-in');

            // Add alternating slide animation based on index
            const cardIndex = parseInt(entry.target.dataset.index);
            if (cardIndex % 2 === 0) {
              entry.target.style.animation = `slideInFromLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
            } else {
              entry.target.style.animation = `slideInFromRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
            }
          }, index * 200); // 200ms delay between each card
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Observe process step cards
    document.querySelectorAll('.process-step-card').forEach(el => processObserver.observe(el));

    return () => {
      observer.disconnect();
      processObserver.disconnect();
    };
  }, []);

  const featuredServices = [
    {
      id: 1,
      title: "Web Development",
      description: "Enterprise-grade web applications with cutting-edge technologies, scalable architecture, and exceptional performance optimization.",
      detailedDescription: "At Luphonix, we craft digital experiences that drive business growth. Our web development services encompass everything from simple landing pages to complex enterprise applications, e-commerce platforms, and progressive web apps.",
      image: "web-development.jpg",
      icon: "fas fa-code",
      technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"],
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps (PWAs)",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud Deployment & DevOps",
        "Performance Optimization",
        "SEO & Analytics Integration"
      ],

      deliveryTime: "4-12 weeks",
      color: "var(--accent-green)"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions with seamless user experiences and robust backend integration.",
      detailedDescription: "Transform your ideas into powerful mobile applications. We develop iOS and Android apps using cutting-edge frameworks, ensuring optimal performance, intuitive UI/UX, and seamless integration with your existing systems.",
      image: "mobile-development.jpg",
      icon: "fas fa-mobile-alt",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify", "Redux", "GraphQL"],
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "Real-time Synchronization",
        "Push Notifications",
        "In-App Purchases",
        "Social Media Integration",
        "Offline Functionality",
        "App Store Optimization"
      ],

      deliveryTime: "8-16 weeks",
      color: "var(--accent-purple)"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Data-driven design solutions that convert visitors into customers through exceptional user experiences.",
      detailedDescription: "Our design philosophy centers on user-first thinking. We create intuitive, accessible, and visually stunning interfaces that not only look great but also drive conversions and enhance user satisfaction.",
      image: "uiux.jpg",
      icon: "fas fa-paint-brush",
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "InVision", "Miro", "Hotjar"],
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Usability Testing",
        "Accessibility Compliance",
        "Brand Identity Design",
        "Design System Creation",
        "Conversion Optimization"
      ],

      deliveryTime: "3-8 weeks",
      color: "#FF6B6B"
    },
    {
      id: 4,
      title: "DevOps & Infrastructure",
      description: "Streamlined development workflows with automated CI/CD pipelines and scalable cloud infrastructure management.",
      detailedDescription: "We provide comprehensive DevOps solutions that streamline your development process, improve deployment reliability, and ensure scalable infrastructure management with modern containerization and automation tools.",
      image: "devops.jpg",
      icon: "fas fa-cogs",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS", "Terraform", "GitLab CI", "Ansible"],
      features: [
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Infrastructure as Code",
        "Cloud Migration",
        "Automated Deployment",
        "Monitoring & Logging",
        "Security Integration",
        "Performance Optimization"
      ],

      deliveryTime: "4-12 weeks",
      color: "#4ECDC4"
    },
    {
      id: 5,
      title: "Content Management Systems",
      description: "Powerful and intuitive content management solutions that empower your team to manage digital content effortlessly.",
      detailedDescription: "We design and develop custom content management systems tailored to your specific needs, from traditional CMS platforms to modern headless architectures that provide flexibility and scalability for your digital content strategy.",
      image: "cms.jpg",
      icon: "fas fa-edit",
      technologies: ["WordPress", "Strapi", "Contentful", "Sanity", "Ghost", "Drupal", "Craft CMS", "Prismic"],
      features: [
        "Custom CMS Development",
        "WordPress Solutions",
        "Headless CMS Integration",
        "Content Migration",
        "Multi-language Support",
        "SEO Optimization",
        "User Role Management",
        "API-First Architecture"
      ],

      deliveryTime: "3-10 weeks",
      color: "#FF9500"
    },
    {
      id: 6,
      title: "Consulting & Engagements",
      description: "Strategic technology consulting and tailored engagement models to accelerate your digital transformation journey.",
      detailedDescription: "Our expert consultants provide strategic guidance, technical assessments, and customized engagement models to help you navigate complex technology decisions and achieve sustainable digital growth.",
      image: "Consulting.jpg",
      icon: "fas fa-handshake",
      technologies: ["Strategy", "Architecture", "Assessment", "Planning", "Optimization", "Training", "Support", "Integration"],
      features: [
        "Technology Strategy Planning",
        "Digital Transformation",
        "Architecture Assessment",
        "Team Training & Workshops",
        "Code Reviews & Audits",
        "Performance Optimization",
        "Security Assessments",
        "Ongoing Technical Support"
      ],

      deliveryTime: "2-24 weeks",
      color: "#FFB84D"
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
      {/* Hero Section with Orb Background */}
      <section className="section" style={{
        position: 'relative',
        overflow: 'hidden',
        height: '600px',
        zIndex: 1
      }}>
        {/* Orb Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '600px',
          zIndex: 0
        }}>
          <WebGLErrorBoundary fallback={
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              fontSize: '14px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✨</div>
                <div>Background effects temporarily unavailable</div>
              </div>
            </div>
          }>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </WebGLErrorBoundary>
        </div>
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
            <p className="section-subtitle fade-in" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: '1.2rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              marginTop: '20px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '20px auto',
              lineHeight: '1.6'
            }}>
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
                  backgroundImage: `url(${getImagePath(service.image)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {/* Service Icon */}
                  <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--gradient-primary)',
                      borderRadius: 'var(--icon-radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '24px',
                      border: '2px solid var(--accent-green)',
                      boxShadow: '0 4px 15px rgba(var(--accent-green-rgb), 0.3)',
                      transition: 'all 0.3s ease',
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
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

                  <Link
                    to="/contact"
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
                      width: '100%',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = `0 8px 25px ${service.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Learn More
                  </Link>
                </div>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
        <section style={{ marginTop: '120px' }} className="fade-in">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '80px',
              color: 'var(--text-primary)'
            }}>
              Our Process
            </h2>

            <ProcessStepsSection />
          </div>
        </section>

      {/* Detailed Service Information */}
      <section className="section" style={{ padding: '120px 0', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>Complete Service Portfolio</h2>

          {featuredServices.map((service, index) => (
            <div key={service.id} className="fade-in" style={{
              marginBottom: '100px',
              animationDelay: `${index * 0.2}s`
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '60px',
                alignItems: 'center'
              }}>
                {/* Content */}
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    {/* Service Icon */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--gradient-primary)',
                      borderRadius: 'var(--icon-radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '24px',
                      border: '2px solid var(--accent-green)',
                      boxShadow: '0 4px 15px rgba(var(--accent-green-rgb), 0.3)',
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="theme-responsive-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: 0
                    }}>
                      {service.title}
                    </h3>
                  </div>

                  <p style={{
                    fontSize: '18px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '25px'
                  }}>
                    {service.detailedDescription}
                  </p>

                  {/* Features Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    marginBottom: '30px'
                  }}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}>
                        <i className="fas fa-check-circle" style={{ color: 'var(--accent-green)', fontSize: '12px' }}></i>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    padding: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '20px'
                  }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '15px'
                    }}>
                      Get Custom Quote
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}>
                        <i className="fas fa-envelope" style={{ color: service.color, width: '16px' }}></i>
                        <a href="mailto:contact@luphonix.com" style={{ color: service.color, textDecoration: 'none' }}>
                          contact@luphonix.com
                        </a>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}>
                        <i className="fas fa-clock" style={{ color: service.color, width: '16px' }}></i>
                        <span>Delivery: {service.deliveryTime}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}>
                        <i className="fas fa-comments" style={{ color: service.color, width: '16px' }}></i>
                        <span>Free consultation & project estimation</span>
                      </div>
                    </div>
                  </div>

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
                          background: `${service.color}15`,
                          color: service.color,
                          padding: '6px 12px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          border: `1px solid ${service.color}30`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-block',
                      background: service.color,
                      color: 'white',
                      border: 'none',
                      padding: '15px 30px',
                      borderRadius: '25px',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = `0 10px 25px ${service.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Contact Us for {service.title}
                  </Link>
                </div>

                {/* Image */}
                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                  <div style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: '400px'
                  }}>
                     <img
    src={getImagePath(service.image)} // <-- FIXED
    alt={service.title}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${service.color}20, transparent 70%)`
                    }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Luphonix */}
      <section className="section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ marginBottom: '60px' }}>Why Choose Luphonix</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: "fas fa-award",
                title: "Proven Expertise",
                description: "5+ years of experience delivering cutting-edge digital solutions across industries",
                stats: "200+ Projects Delivered"
              },
              {
                icon: "fas fa-rocket",
                title: "Agile Development",
                description: "Fast, iterative development process with regular client feedback and quick pivots",
                stats: "40% Faster Delivery"
              },
              {
                icon: "fas fa-shield-alt",
                title: "Quality Assurance",
                description: "Rigorous testing protocols ensuring bug-free, secure, and scalable solutions",
                stats: "99.9% Uptime Guarantee"
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description: "Dedicated support team available around the clock for maintenance and updates",
                stats: "<2 Hour Response Time"
              },
              {
                icon: "fas fa-chart-line",
                title: "ROI Focused",
                description: "Every solution is designed to drive measurable business growth and revenue",
                stats: "Average 3x ROI"
              },
              {
                icon: "fas fa-users",
                title: "Expert Team",
                description: "Certified developers, designers, and consultants with specialized expertise",
                stats: "15+ Team Members"
              }
            ].map((benefit, index) => (
              <div key={index} className="fade-in" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.1}s`
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
                  fontSize: '32px',
                  color: 'white'
                }}>
                  <i className={benefit.icon}></i>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '15px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {benefit.description}
                </p>
                <div style={{
                  background: 'var(--accent-green)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="fade-in" style={{ 
        marginTop: '120px',
        marginBottom: '120px'
      }}>
        <TestimonialsSection
          title="Trusted by clients worldwide"
          description="Join hundreds of satisfied clients who have transformed their digital presence with Luphonix"
          testimonials={[
            {
              author: {
                name: "Sarah Mitchell",
                handle: "@sarahceo",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              },
              text: "Luphonix transformed our e-commerce platform completely. The team's expertise in React and Node.js delivered a 40% increase in conversion rates. Highly recommended!",
            },
            {
              author: {
                name: "James Chen",
                handle: "@jamestech",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              },
              text: "Working with Luphonix was a game-changer. Their AI/ML solutions helped us automate our workflow and save over 60% in operational costs.",
            },
            {
              author: {
                name: "Maria Garcia",
                handle: "@mariadesign",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
              },
              text: "The UI/UX design work was exceptional. Our mobile app now has a 4.8-star rating thanks to the intuitive interface they created.",
            },
            {
              author: {
                name: "David Kumar",
                handle: "@davidstartup",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
              },
              text: "Luphonix helped us scale from 0 to 10,000 users in just 6 months. Their cloud infrastructure solutions are world-class.",
            },
            {
              author: {
                name: "Emily Roberts",
                handle: "@emilymarketing",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              },
              text: "The SEO optimization and web development services exceeded our expectations. We saw a 250% increase in organic traffic within 3 months.",
            },
            {
              author: {
                name: "Alex Thompson",
                handle: "@alexdevops",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              text: "Their DevOps expertise streamlined our deployment process. What used to take days now takes minutes. Absolutely fantastic work!",
            }
          ]}
        />
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

     
      </div>
    </>
  );
};

export default Services;