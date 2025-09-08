
import React, { useEffect, useRef } from 'react';

const VantaBirds = ({ 
  children, 
  style = {}, 
  className = '',
  options = {} 
}) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (vantaRef.current && window.VANTA && window.VANTA.BIRDS) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        birdSize: 1.50,
        speedLimit: 6.00,
        separation: 36.00,
        alignment: 30.00,
        cohesion: 28.00,
        backgroundColor: 0x0a0a0a,
        color1: 0x00d4aa, // Green theme color
        color2: 0x8a2be2, // Purple theme color
        ...options
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [options]);

  return (
    <div 
      ref={vantaRef} 
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default VantaBirds;
