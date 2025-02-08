'use client';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

type AnimatedGridBackgroundProps = {
  particleCount?: number;
  colors?: {
    grid?: string;
    particles?: string;
    glow?: string;
  };
  animationSpeed?: number;
  children?: ReactNode;
  className?: string;
};

export const AnimatedGridBackground = ({
  particleCount = 150,
  colors = {
    grid: '#93c5fd',
    particles: '#3b82f6',
    glow: '#2563eb',
  },
  animationSpeed = 1,
  children,
  className = '',
}: AnimatedGridBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGridSize = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.clientWidth;
      const calculatedSize = Math.max(20, Math.min(80, containerWidth / 25));
      container.style.setProperty('--grid-size', `${calculatedSize}px`);
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const particles = Array.from({ length: particleCount }, () => ({
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    offsetX: Math.random() * 30 - 15,
    offsetY: Math.random() * 30 - 15,
    scale: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-screen h-full -z-50 overflow-hidden bg-gradient-to-br from-white via-blue-200 to-blue-400 ${className}`}
      style={{
        '--grid-color': colors.grid,
        '--particle-color': colors.particles,
        '--glow-color': colors.glow,
        '--animation-speed': animationSpeed,
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 bg-[length:var(--grid-size)_var(--grid-size)] opacity-90"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--grid-color) 3px, transparent 1px)',
          filter: 'brightness(1.5) contrast(1.8)',
        }}
      />

      {/* Glow Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/50 to-transparent"
        animate={{ opacity: [0.5, 0.9, 0.5], rotate: 360 }}
        transition={{ duration: 20 / animationSpeed, repeat: Infinity, ease: 'linear' }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-70">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-600 shadow-lg"
            initial={{ left: `${particle.startX}%`, top: `${particle.startY}%`, scale: 0 }}
            animate={{
              scale: [0, particle.scale, 0],
              opacity: [0, 1, 0],
              x: `${particle.offsetX}%`,
              y: `${particle.offsetY}%`,
            }}
            transition={{ duration: particle.duration / animationSpeed, repeat: Infinity, delay: particle.delay }}
          />
        ))}
      </div>

      {/* Moving Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-95"
        animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'] }}
        transition={{ duration: 30 / animationSpeed, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--glow-color) 2px, transparent 1px),
            linear-gradient(to bottom, var(--glow-color) 2px, transparent 1px)
          `,
          backgroundSize: 'calc(var(--grid-size) * 2) calc(var(--grid-size) * 2)',
          filter: 'brightness(1.8) contrast(2)',
        }}
      />

      {children}
    </div>
  );
};