
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    

    // Auto animation for continuous movement
    const startAutoAnimation = () => {
      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1; // Row 0,2 go right (+1), Row 1,3 go left (-1)
          
          gsap.to(row, {
            x: direction * 2000, // Move much further to create continuous effect
            duration: 8, // Medium speed - 8 seconds for smooth continuous movement
            ease: 'none', // Linear movement for continuous effect
            repeat: -1, // Infinite repeat
            // Remove yoyo to prevent fall back
            delay: index * 0.1, // Small staggered start
          });
        }
      });
    };

    // Start the auto animation
    startAutoAnimation();

    return () => {
      // Clean up animations when component unmounts
      gsap.killTweensOf(rowRefs.current);
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
