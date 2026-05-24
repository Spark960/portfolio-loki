"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Robust touch device check
    const isTouchDevice = 
      window.matchMedia("(pointer: coarse)").matches || 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0;
      
    setIsTouch(isTouchDevice);

    if (isTouchDevice) return;

    document.body.classList.add("cursor-none-global");

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // We look for interactive elements (buttons and links)
      const interactive = target.closest("button") || target.closest("a");
      if (interactive) {
        setTargetRect(interactive.getBoundingClientRect());
      } else {
        setTargetRect(null);
      }
    };
    
    // Reset snapping on scroll since coordinates change
    const onScroll = () => {
      setTargetRect(null);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("cursor-none-global");
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isSnapping = targetRect !== null;
  
  // Base dimensions
  let x = position.x;
  let y = position.y;
  let w = 24;
  let h = 24;

  if (isSnapping && targetRect) {
    x = targetRect.left + targetRect.width / 2;
    y = targetRect.top + targetRect.height / 2;
    w = targetRect.width + 12; // Pad around the target
    h = targetRect.height + 12;
  }

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999999] transition-all duration-[120ms] ease-out"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        width: `${w}px`,
        height: `${h}px`,
      }}
    >
      <div
        className={`w-full h-full border-[2px] border-accent transition-all duration-200 ${
          isSnapping ? "bg-transparent rounded-sm" : "bg-transparent rounded-none"
        }`}
      />
    </div>
  );
}
