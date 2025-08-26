import React, { useState, useRef, useId, useEffect } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick
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

  const { src, button, title, description, features } = slide;

  return (
    <div style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      <li
        ref={slideRef}
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
          transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
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
            background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.8))',
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all 0.15s ease-out',
            border: '1px solid rgba(0, 212, 170, 0.2)',
            backdropFilter: 'blur(20px)',
            transform: current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
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
            src={src}
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

        <article style={{
          position: 'relative',
          padding: '4vmin',
          opacity: current === index ? 1 : 0,
          visibility: current === index ? 'visible' : 'hidden',
          transition: 'opacity 1s ease-in-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.2rem, 4vmin, 2.5rem)',
            fontWeight: '600',
            position: 'relative',
            marginBottom: '1rem',
            color: 'var(--accent-green)'
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
            <div style={{ marginBottom: '1.5rem' }}>
              {features.slice(0, 3).map((feature, idx) => (
                <div key={idx} style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  margin: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--accent-green)',
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></span>
                  {feature}
                </div>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className="explore-btn"
              onClick={() => {
                const languageKey = slide.title.toLowerCase().replace('.js', '').replace('.', '');
                navigate(`/language/${languageKey}`);
              }}
            >
              {button}
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
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 8px',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(0, 212, 170, 0.3)',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.2s',
        transform: type === "previous" ? "rotate(180deg)" : "none"
      }}
      title={title}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.target.style.transform = `${type === "previous" ? "rotate(180deg)" : ""} translateY(-2px)`;
        e.target.style.background = 'rgba(0, 212, 170, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = `${type === "previous" ? "rotate(180deg)" : ""} translateY(0)`;
        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
      }}
    >
      <IconArrowNarrowRight style={{ color: 'var(--accent-green)' }} />
    </button>
  );
};

export function Carousel({ slides }) {
  const slideRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

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

  const id = useId();

  return (
    <div
      style={{
        position: 'relative',
        width: '70vmin',
        height: '70vmin',
        margin: '0 auto'
      }}
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        style={{
          position: 'absolute',
          display: 'flex',
          margin: '0 -4vmin',
          transition: 'transform 1s ease-in-out',
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
          />
        ))}
      </ul>
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        top: 'calc(100% + 1rem)'
      }}>
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Carousel;