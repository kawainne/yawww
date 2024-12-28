'use client';

import { useEffect } from 'react';

export default function ShootingStars() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight / 2}px;
        opacity: 0;
        transform: translateX(0) translateY(0);
        animation: shooting 1.5s linear;
      `;
      document.body.appendChild(star);

      setTimeout(() => star.remove(), 1500);
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  return null;
}