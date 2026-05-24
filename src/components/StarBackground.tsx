"use client";

import { useEffect, useRef } from "react";

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const initStars = () => {
      stars = [];
      const isMobile = window.innerWidth < 768;
      // High density even on mobile since it's performant
      const numStars = isMobile ? 120 : 200;
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.3 + 0.1, // Slow, elegant movement
          opacity: Math.random() * 0.7 + 0.3, // Brighter
        });
      }
    };

    const handleResize = () => {
      // Set actual size in memory (scaled to account for extra pixel density)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Normalize coordinate system to use css pixels
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      initStars();
    };

    const animate = () => {
      // Clear with transparent background (the CSS background handles the color)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach((star) => {
        // Move star left (or up/down depending on preference, here slowly left)
        star.y -= star.speed;

        // Reset star if it goes off screen
        if (star.y < 0) {
          star.y = window.innerHeight;
          star.x = Math.random() * window.innerWidth;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        const isMobile = window.innerWidth < 768;
        ctx.shadowBlur = isMobile ? 3 : 6;
        ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        // Use rect for slightly better performance than arc
        ctx.fillRect(star.x, star.y, star.size, star.size);
        
        // Reset shadow for next operations if needed
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[-1] bg-bg"
      style={{ display: "block" }}
    />
  );
}
