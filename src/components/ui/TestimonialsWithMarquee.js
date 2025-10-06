
import React from 'react';
import { cn } from '../../utils/cn';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}) {
  return (
    <section 
      className={cn("section", className)}
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        color: 'var(--text-primary)',
        padding: '80px 0',
        overflow: 'hidden'
      }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '0 20px'
        }}>
          <h2 style={{ 
            maxWidth: '720px',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            marginBottom: '15px'
          }}>
            {title}
          </h2>
          <p style={{ 
            maxWidth: '600px',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            fontWeight: '400',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            {description}
          </p>
        </div>

        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            overflow: 'hidden',
            padding: '8px',
            gap: '16px'
          }}>
            <div 
              className="testimonials-marquee"
              style={{
                display: 'flex',
                flexShrink: 0,
                justifyContent: 'space-around',
                gap: '16px',
                animation: 'marquee 40s linear infinite'
              }}>
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Left gradient fade */}
          <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '33.333%',
            background: 'linear-gradient(to right, var(--primary-bg), transparent)',
            display: window.innerWidth > 640 ? 'block' : 'none'
          }} />
          
          {/* Right gradient fade */}
          <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '33.333%',
            background: 'linear-gradient(to left, var(--primary-bg), transparent)',
            display: window.innerWidth > 640 ? 'block' : 'none'
          }} />
        </div>
      </div>


      

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 16px)); }
        }
        .testimonials-marquee {
          animation: marquee 40s linear infinite;
        }
        .testimonials-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
