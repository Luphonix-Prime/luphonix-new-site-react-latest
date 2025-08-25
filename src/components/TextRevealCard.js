
"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "../utils/cn";
import "./TextRevealCard.css";

// Theme-based text variations
const getThemeTexts = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'default';
  
  const themeTexts = {
    'default': {
      base: 'You focus on your business',
      reveal: 'We handle the technology'
    },
    'cyber-blue': {
      base: 'You dream the future',
      reveal: 'We code the reality'
    },
    'royal-purple': {
      base: 'You lead with vision',
      reveal: 'We craft with precision'
    },
    'sunset-orange': {
      base: 'You spark innovation',
      reveal: 'We fuel transformation'
    },
    'matrix-red': {
      base: 'You break boundaries',
      reveal: 'We build solutions'
    }
  };

  return themeTexts[currentTheme] || themeTexts['default'];
};

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className
}) => {
  const [themeTexts, setThemeTexts] = useState(getThemeTexts());
  
  // Update texts when theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      setThemeTexts(getThemeTexts());
    };

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Use theme-based texts if no custom text provided
  const displayText = text || themeTexts.base;
  const displayRevealText = revealText || themeTexts.reveal;
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event) {
    event.preventDefault();
    const clientX = event.touches[0].clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "text-reveal-card-container",
        className
      )}>
      {children}
      <div className="text-reveal-content">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="revealed-text">
          <p className="text-gradient">
            {displayRevealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="reveal-cursor"></motion.div>

        <div className="base-text-container">
          <p className="base-text">
            {displayText}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className
}) => {
  return (
    <h2 className={cn("card-title", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className
}) => {
  return (
    <p className={cn("card-description", className)}>
      {children}
    </p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="stars-container">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="star"></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
