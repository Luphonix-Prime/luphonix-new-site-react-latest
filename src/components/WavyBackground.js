"use client";
import { cn } from "../utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  let w,
    h,
    nt,
    i,
    x,
    ctx,
    canvas;
  const canvasRef = useRef(null);
  const [currentColors, setCurrentColors] = useState([]);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const getThemeColors = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    const accentGreen = computedStyle.getPropertyValue('--accent-green').trim();
    const accentPurple = computedStyle.getPropertyValue('--accent-purple').trim();
    const accentBlue = computedStyle.getPropertyValue('--accent-blue').trim();
    
    return [
      accentGreen,
      accentPurple,
      accentBlue,
      '#e879f9', // Additional color for variety
      '#22d3ee'  // Additional color for variety
    ].filter(color => color); // Filter out any empty values
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    const rect = canvas.parentElement.getBoundingClientRect();
    w = ctx.canvas.width = rect.width;
    h = ctx.canvas.height = rect.height;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      if (canvas && canvas.parentElement) {
        const rect = canvas.parentElement.getBoundingClientRect();
        w = ctx.canvas.width = rect.width;
        h = ctx.canvas.height = rect.height;
        ctx.filter = `blur(${blur}px)`;
      }
    };
    render();
  };

  const waveColors = colors ?? currentColors;
  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    // Initialize theme colors
    const updateColors = () => {
      const themeColors = getThemeColors();
      if (themeColors.length > 0) {
        setCurrentColors(themeColors);
      }
    };

    updateColors();

    // Listen for theme changes by watching for data-theme attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateColors();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [currentColors]); // Re-init when colors change

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome"));
  }, []);

  return (
    <div
      className={cn("w-full h-full flex flex-col items-center justify-center", containerClassName)}
      style={{ position: 'relative', ...props.style }}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          width: '100%',
          height: '100%',
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};