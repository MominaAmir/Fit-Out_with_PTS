"use client";

import { useEffect, useState } from "react";

// Fixed particle data - NO RANDOM VALUES
const FIXED_PARTICLES = [
  { width: 3.85, height: 2.16, top: 90.5, left: 75.7, duration: 13.3, delay: 5.1, opacity: 0.15 },
  { width: 4.51, height: 4.44, top: 31.9, left: 38.1, duration: 10.7, delay: 4.9, opacity: 0.28 },
  { width: 4.82, height: 3.07, top: 82.9, left: 40.6, duration: 19.0, delay: 3.2, opacity: 0.35 },
  { width: 5.85, height: 2.71, top: 21.1, left: 72.3, duration: 11.9, delay: 4.9, opacity: 0.20 },
  { width: 4.34, height: 5.00, top: 57.8, left: 45.4, duration: 12.9, delay: 3.0, opacity: 0.26 },
  { width: 4.63, height: 2.05, top: 71.9, left: 83.2, duration: 14.1, delay: 6.9, opacity: 0.39 },
  { width: 2.05, height: 5.53, top: 16.9, left: 34.1, duration: 8.3, delay: 0.07, opacity: 0.22 },
  { width: 5.73, height: 5.79, top: 76.1, left: 79.7, duration: 19.5, delay: 6.5, opacity: 0.26 },
  { width: 2.70, height: 5.69, top: 1.2, left: 94.3, duration: 16.1, delay: 2.5, opacity: 0.38 },
  { width: 2.24, height: 5.92, top: 93.0, left: 10.9, duration: 13.0, delay: 2.3, opacity: 0.28 },
  { width: 4.25, height: 4.32, top: 48.9, left: 48.0, duration: 12.1, delay: 6.7, opacity: 0.10 },
  { width: 5.79, height: 5.32, top: 16.6, left: 2.4, duration: 17.8, delay: 7.1, opacity: 0.13 },
  { width: 3.44, height: 4.37, top: 33.8, left: 37.0, duration: 18.1, delay: 2.1, opacity: 0.38 },
  { width: 5.98, height: 2.29, top: 11.8, left: 85.7, duration: 16.3, delay: 4.0, opacity: 0.30 },
  { width: 4.72, height: 4.35, top: 90.8, left: 18.7, duration: 17.6, delay: 5.9, opacity: 0.23 },
  { width: 3.06, height: 2.69, top: 19.1, left: 26.8, duration: 15.5, delay: 0.7, opacity: 0.36 },
  { width: 5.19, height: 3.05, top: 92.3, left: 34.8, duration: 19.4, delay: 2.8, opacity: 0.38 },
  { width: 2.76, height: 2.51, top: 86.4, left: 88.2, duration: 15.2, delay: 4.9, opacity: 0.18 },
  { width: 3.71, height: 5.91, top: 6.4, left: 44.3, duration: 13.0, delay: 6.6, opacity: 0.32 },
  { width: 5.94, height: 5.78, top: 38.0, left: 83.4, duration: 19.4, delay: 6.1, opacity: 0.22 },
];

interface ParticlesProps {
  count?: number;
  className?: string;
}

export default function Particles({ count = 20, className = "" }: ParticlesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use fixed particles, only render on client
  const particles = FIXED_PARTICLES.slice(0, count);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {mounted && particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}