import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "motion/react";
import { getImagePath } from '../utils/imageUtils';
import "./RollingGallery.css";

const GALLERY_ITEMS = [
  {
    url:"/images/scroll/web-development.jpg",
    title: "Modern Web Development",
    description: "Cutting-edge web applications built with React, Next.js, and modern JavaScript frameworks. Our projects feature responsive design, optimized performance, and seamless user experiences.",
    category: "Web Development",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    url: "/images/scroll/mobile app.jpg",
    title: "Mobile App Solutions",
    description: "Cross-platform mobile applications that deliver native performance and intuitive user interfaces. Built with React Native and Flutter for iOS and Android platforms.",
    category: "Mobile Development",
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    url: "/images/scroll/ai & ml.jpg",
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms. From predictive analytics to natural language processing and computer vision.",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"]
  },
  {
    url: "/images/scroll/cloud.jpg",
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions and DevOps implementation. We design and deploy robust infrastructure using AWS, Google Cloud, and Azure platforms.",
    category: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
  },
  {
    url: "/images/scroll/ecoomerce.jpg",
    title: "E-commerce Platforms",
    description: "Complete e-commerce solutions with secure payment processing, inventory management, and analytics. Built for scalability and conversion optimization.",
    category: "E-commerce",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
  },
  {
    url: "/images/scroll/3d.jpg",
    title: "3D Visualization",
    description: "Interactive 3D models and immersive experiences using WebGL, Three.js, and advanced rendering techniques. Perfect for product showcases and virtual experiences.",
    category: "3D Graphics",
    technologies: ["Three.js", "WebGL", "Blender", "Unity"]
  },
  {
    url: "/images/scroll/database solution.jpg",
    title: "Database Solutions",
    description: "Robust database architecture and optimization. We work with SQL and NoSQL databases to ensure data integrity, performance, and scalability.",
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    url: "/images/scroll/api .jpg",
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for performance, security, and scalability. Complete with documentation, testing, and monitoring solutions.",
    category: "Backend",
    technologies: ["Node.js", "Express", "GraphQL", "REST"]
  },
  {
    url:"/images/scroll/ui ux.jpg",
    title: "UI/UX Design",
    description: "User-centered design approach with modern aesthetics and intuitive interactions. From wireframes to high-fidelity prototypes and design systems.",
    category: "Design",
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
  },
  {
    url: "/images/scroll/cyber.jpg",
    title: "Cybersecurity",
    description: "Comprehensive security solutions including penetration testing, security audits, and implementation of best practices to protect your digital assets.",
    category: "Security",
    technologies: ["Encryption", "OAuth", "JWT", "Firewalls"]
  }
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryItems = images.length > 0 ? images : GALLERY_ITEMS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = galleryItems.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    if (autoplay) {
      controls.stop();
    }
    setIsDragging(true);
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragStart = () => {
    if (autoplay) {
      controls.stop();
    }
    setIsDragging(true);
  };

  const handleDragEnd = (_, info) => {
    setIsDragging(false);

    // If it was a small drag (more like a click), show popup
    if (Math.abs(info.offset.x) < 50 && Math.abs(info.offset.y) < 50) {
      // Calculate which item is currently in focus
      const currentRotation = rotation.get() % 360;
      const itemAngle = 360 / faceCount;
      const focusedIndex = Math.round(Math.abs(currentRotation) / itemAngle) % faceCount;
      setSelectedItem(galleryItems[focusedIndex]);
    } else {
      // Continue with normal drag behavior
      controls.start({
        rotateY: rotation.get() + info.velocity.x * dragFactor,
        transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
      });
    }

    // Resume autoplay after drag ends if it was enabled
    if (autoplay && !pauseOnHover) {
      setTimeout(() => {
        controls.start({
          rotateY: rotation.get() - 360,
          transition: { 
            duration: faceCount * 2,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }, 1000);
    }
  };

  const handleItemClick = (item, event) => {
    event.stopPropagation();
    if (!isDragging) {
      setSelectedItem(item);
    }
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      const startContinuousRotation = () => {
        controls.start({
          rotateY: rotation.get() - 360,
          transition: { 
            duration: faceCount * 2, // Adjust speed based on number of items
            ease: "linear",
            repeat: Infinity,
          },
        });
      };

      startContinuousRotation();

      return () => {
        clearInterval(autoplayRef.current);
        controls.stop();
      };
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      // Resume continuous rotation
      controls.start({
        rotateY: rotation.get() - 360,
        transition: { 
          duration: faceCount * 2,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={(e) => handleItemClick(item, e)}
            >
             <img 
                src={typeof item === 'string' ? item : item.url}
                alt={typeof item === 'string' ? "gallery" : item.title} 
                className="gallery-img" 
              />
              {typeof item === 'object' && (
                <div className="gallery-item-overlay">
                  <h4>{item.title}</h4>
                  <span className="gallery-category">{item.category}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="gallery-popup-overlay" onClick={closePopup}>
          <div className="gallery-popup" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-popup-close" onClick={closePopup}>
              <i className="fas fa-times"></i>
            </button>

            <div className="gallery-popup-content">
              <div className="gallery-popup-image">
                <img src={selectedItem.url} alt={selectedItem.title} />
              </div>

              <div className="gallery-popup-info">
                <div className="gallery-popup-header">
                  <h2>{selectedItem.title}</h2>
                  <span className="gallery-popup-category">{selectedItem.category}</span>
                </div>

                <p className="gallery-popup-description">
                  {selectedItem.description}
                </p>

                <div className="gallery-popup-technologies">
                  <h3>Technologies Used:</h3>
                  <div className="tech-tags">
                    {selectedItem.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="gallery-popup-actions">
                  <button className="gallery-popup-btn primary">
                    <i className="fas fa-eye" style={{ marginRight: '8px' }}></i>
                    View Project
                  </button>
                  <button className="gallery-popup-btn secondary">
                    <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RollingGallery;