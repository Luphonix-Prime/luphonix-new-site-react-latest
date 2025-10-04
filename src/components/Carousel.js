import React, { useState, useRef, useId, useEffect } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  navigate
}) => {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, description, features, category, difficulty } = slide;

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'Beginner': return '#4ade80';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ef4444';
      default: return 'var(--accent-green)';
    }
  };

  const getCategoryIcon = (cat) => {
    switch(cat) {
      case 'Frontend': return '🎨';
      case 'Backend': return '⚡';
      case 'Language': return '🐍';
      case 'Database': return '🗄️';
      case 'DevOps': return '🚀';
      case 'Cloud': return '☁️';
      default: return '💻';
    }
  };

  return (
    <div style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      <li
        ref={slideRef}
        className="carousel-slide"
        style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'center',
          color: 'white',
          opacity: 1,
          transition: 'all 0.3s ease-in-out',
          width: '70vmin',
          height: '70vmin',
          margin: '0 4vmin',
          zIndex: 10,
          cursor: 'pointer',
          transform: current !== index ? "scale(0.95) rotateX(12deg)" : "scale(1) rotateX(0deg)",
          transformOrigin: "bottom"
        }}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: current === index
              ? 'linear-gradient(135deg, rgba(0, 212, 170, 0.15), rgba(10, 10, 10, 0.95), rgba(26, 26, 46, 0.9))'
              : 'linear-gradient(135deg, rgba(10, 10, 10, 0.8), rgba(26, 26, 26, 0.7))',
            borderRadius: '24px',
            overflow: 'hidden',
            transition: 'all 0.4s ease-out',
            border: current === index
              ? '2px solid rgba(0, 212, 170, 0.4)'
              : '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(25px)',
            boxShadow: current === index
              ? '0 25px 50px rgba(0, 212, 170, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 10px 25px rgba(0, 0, 0, 0.3)',
            transform: current === index
              ? "translate3d(calc(var(--x) / 25), calc(var(--y) / 25), 0)"
              : "none"
          }}
        >
          <img
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '120%',
              height: '120%',
              objectFit: 'cover',
              opacity: current === index ? 0.3 : 0.2,
              transition: 'opacity 0.6s ease-in-out'
            }}
            alt={title}
            src={src.startsWith('/') ? src : getImagePath(src)}
            onLoad={imageLoaded}
            loading="eager"
          />
          {current === index && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              transition: 'all 1s'
            }} />
          )}
        </div>

        {/* Technology badges */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          opacity: current === index ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out 0.3s',
          zIndex: 10
        }}>
          <div style={{
            background: 'rgba(0, 212, 170, 0.2)',
            border: '1px solid rgba(0, 212, 170, 0.3)',
            borderRadius: '20px',
            padding: '6px 12px',
            fontSize: '0.75rem',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>{getCategoryIcon(category)}</span>
            {category}
          </div>
          <div style={{
            background: `rgba(${difficulty === 'Beginner' ? '74, 222, 128' : difficulty === 'Intermediate' ? '245, 158, 11' : '239, 68, 68'}, 0.2)`,
            border: `1px solid ${getDifficultyColor(difficulty)}30`,
            borderRadius: '20px',
            padding: '6px 12px',
            fontSize: '0.75rem',
            fontWeight: '500',
            color: getDifficultyColor(difficulty)
          }}>
            {difficulty}
          </div>
        </div>

        <article className="carousel-slide-content" style={{
          position: 'relative',
          padding: '4vmin',
          paddingTop: '6vmin',
          opacity: current === index ? 1 : 0,
          visibility: current === index ? 'visible' : 'hidden',
          transition: 'opacity 1s ease-in-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 4.5vmin, 2.8rem)',
            fontWeight: '700',
            position: 'relative',
            marginBottom: '1.2rem',
            color: 'var(--accent-green)',
            textShadow: '0 2px 10px rgba(0, 212, 170, 0.3)'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vmin, 1.1rem)',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            {description}
          </p>
          {features && (
            <div style={{
              marginBottom: '2rem',
              display: 'grid',
              gap: '0.8rem'
            }}>
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '8px 0',
                  borderLeft: '2px solid var(--accent-green)',
                  paddingLeft: '12px',
                  background: 'linear-gradient(90deg, rgba(0, 212, 170, 0.1) 0%, transparent 100%)',
                  borderRadius: '0 8px 8px 0',
                  transform: `translateX(${current === index ? 0 : '20px'})`,
                  opacity: current === index ? 1 : 0,
                  transition: `all 0.6s ease-in-out ${idx * 0.1 + 0.8}s`
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--accent-green)',
                    borderRadius: '50%',
                    marginRight: '12px',
                    boxShadow: '0 0 10px rgba(0, 212, 170, 0.6)'
                  }}></span>
                  {feature}
                </div>
              ))}
            </div>
          )}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            transform: `translateY(${current === index ? 0 : '20px'})`,
            opacity: current === index ? 1 : 0,
            transition: 'all 0.8s ease-in-out 1.2s'
          }}>
            <button
              style={{
                background: 'linear-gradient(135deg, var(--accent-green), #00a86b)',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 24px',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(0, 212, 170, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={(e) => {
                let languageKey = slide.title.toLowerCase();
                // Handle special cases for proper URL routing
                if (languageKey === 'node.js') {
                  languageKey = 'nodejs';
                } else if (languageKey === 'next.js') {
                  languageKey = 'nextjs';
                } else {
                  // Remove dots and special characters for other technologies
                  languageKey = languageKey.replace(/[^a-z0-9]/g, '');
                }
                navigate(`/language/${languageKey}`);
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = `0 15px 35px rgba(var(--accent-green-rgb), 0.4)`;
                e.target.style.background = 'var(--gradient-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = `0 8px 25px rgba(var(--accent-green-rgb), 0.3)`;
                e.target.style.background = 'linear-gradient(135deg, var(--accent-green), #00a86b)';
              }}
            >
              {button}
              <span style={{
                marginLeft: '8px',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick
}) => {
  return (
    <button
      style={{
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 212, 170, 0.4)',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: type === "previous" ? "rotate(180deg)" : "none",
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
        zIndex: 1001
      }}
      title={title}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.target.style.transform = `${type === "previous" ? "rotate(180deg)" : ""} scale(1.1)`;
        e.target.style.background = 'rgba(0, 212, 170, 0.2)';
        e.target.style.borderColor = 'var(--accent-green)';
        e.target.style.boxShadow = '0 12px 35px rgba(0, 212, 170, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = `${type === "previous" ? "rotate(180deg)" : ""} scale(1)`;
        e.target.style.background = 'rgba(0, 0, 0, 0.8)';
        e.target.style.borderColor = 'rgba(0, 212, 170, 0.4)';
        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
      }}
    >
      <IconArrowNarrowRight style={{ color: 'var(--accent-green)', width: '20px', height: '20px' }} />
    </button>
  );
};

function Carousel({ slides, autoRotate = true, rotationInterval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  // Auto rotation effect
  useEffect(() => {
    if (autoRotate && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length);
      }, rotationInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, isPaused, rotationInterval, slides.length]);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const id = useId();

  return (
    <div
      className="carousel-main-container"
      style={{
        position: 'relative',
        width: '75vmin',
        height: '75vmin',
        margin: '0 auto',
        padding: '2rem 0 8rem 0' // Extra bottom padding for progress indicators
      }}
      aria-labelledby={`carousel-heading-${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Technology counter */}
      <div className="carousel-counter" style={{
        position: 'absolute',
        top: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 212, 170, 0.1)',
        border: '1px solid rgba(0, 212, 170, 0.3)',
        borderRadius: '20px',
        padding: '8px 16px',
        fontSize: '0.9rem',
        color: 'var(--accent-green)',
        fontWeight: '500',
        zIndex: 20
      }}>
        {current + 1} of {slides.length} Technologies
      </div>

      <ul
        className="carousel-slide-wrapper"
        style={{
          position: 'absolute',
          display: 'flex',
          margin: '0 -4vmin',
          transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `translateX(-${current * (100 / slides.length)}%)`
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            navigate={navigate}
          />
        ))}
      </ul>
      {/* Left Arrow - Absolutely positioned */}
      <div className="carousel-arrow carousel-arrow-left" style={{
        position: 'absolute',
        left: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <CarouselControl
          type="previous"
          title="Go to previous technology"
          handleClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePreviousClick(); }}
        />
      </div>

      {/* Right Arrow - Absolutely positioned */}
      <div className="carousel-arrow carousel-arrow-right" style={{
        position: 'absolute',
        right: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <CarouselControl
          type="next"
          title="Go to next technology"
          handleClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNextClick(); }}
        />
      </div>

      {/* Bottom controls container */}
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bottom: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        gap: '8px',
        zIndex: 100
      }}>
        {/* Progress indicators */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(index); }}
            type="button"
            style={{
              width: current === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: current === index
                ? 'var(--accent-green)'
                : 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: current === index
                ? '0 2px 8px rgba(0, 212, 170, 0.4)'
                : 'none',
              border: 'none'
            }}
          />
        ))}
      </div>
      
      {/* Responsive Styles for Carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .carousel-arrow {
            width: 45px !important;
            height: 45px !important;
          }
          .carousel-arrow-left {
            left: -60px !important;
          }
          .carousel-arrow-right {
            right: -60px !important;
          }
        }
        
        @media (max-width: 768px) {
          .carousel-main-container {
            width: 90vw !important;
            max-width: 500px !important;
            height: auto !important;
            min-height: 500px !important;
            padding: 1.5rem 0 6rem 0 !important;
          }
          .carousel-slide {
            width: 85vw !important;
            max-width: 450px !important;
            height: auto !important;
            min-height: 450px !important;
            margin: 0 2.5vw !important;
          }
          .carousel-slide-wrapper {
            margin: 0 -2.5vw !important;
          }
          .carousel-slide-content {
            padding: 2.5rem !important;
            padding-top: 3rem !important;
          }
          .carousel-counter {
            font-size: 0.8rem !important;
            padding: 6px 14px !important;
            top: -35px !important;
          }
          .carousel-arrow {
            width: 40px !important;
            height: 40px !important;
          }
          .carousel-arrow-left {
            left: 10px !important;
            top: auto !important;
            bottom: 120px !important;
            transform: none !important;
          }
          .carousel-arrow-right {
            right: 10px !important;
            top: auto !important;
            bottom: 120px !important;
            transform: none !important;
          }
          .carousel-arrow button {
            width: 40px !important;
            height: 40px !important;
          }
          .carousel-arrow svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
        
        @media (max-width: 480px) {
          .carousel-main-container {
            width: 95vw !important;
            max-width: none !important;
            min-height: 450px !important;
            padding: 1rem 0 5rem 0 !important;
          }
          .carousel-slide {
            width: 90vw !important;
            max-width: none !important;
            min-height: 400px !important;
            margin: 0 2vw !important;
          }
          .carousel-slide-wrapper {
            margin: 0 -2vw !important;
          }
          .carousel-slide-content {
            padding: 2rem !important;
            padding-top: 2.5rem !important;
          }
          .carousel-counter {
            font-size: 0.75rem !important;
            padding: 5px 12px !important;
            top: -30px !important;
          }
          .carousel-arrow {
            width: 36px !important;
            height: 36px !important;
          }
          .carousel-arrow-left {
            left: 5px !important;
            bottom: 100px !important;
          }
          .carousel-arrow-right {
            right: 5px !important;
            bottom: 100px !important;
          }
          .carousel-arrow button {
            width: 36px !important;
            height: 36px !important;
          }
          .carousel-arrow svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}} />
    </div>
  );
}

export default Carousel;