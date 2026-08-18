"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  index: number;
}

export default function AnimatedStat({ value, label, index }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const icons: Record<string, string> = {
    'Projects Completed': '🏗️',
    'Technical Drawings': '📐',
    'Expert Team Members': '👷',
    'Client Satisfaction': '⭐'
  };

  const parseValue = (val: string) => {
    const num = parseInt(val.replace(/[^0-9]/g, ''));
    const suffix = val.replace(/[0-9]/g, '');
    return { num, suffix };
  };

  const { num: targetNumber, suffix } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetNumber);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(start + increment * currentStep));
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-line bg-white/80 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:-translate-y-1 hover:bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mb-3 text-3xl transition-transform duration-500 group-hover:scale-110">
        {icons[label] || '📊'}
      </div>

      {/* Number with animation */}
      <div className="relative font-display text-3xl font-bold text-indigo md:text-4xl transition-all duration-500 group-hover:text-orange">
        {isVisible ? count : 0}
        {suffix}
      </div>

      {/* Label */}
      <div className="relative mt-1 text-xs font-medium text-ink/50">
        {label}
      </div>

      {/* Decorative bottom bar */}
      <div className="relative mx-auto mt-3 h-0.5 w-6 bg-orange/20 transition-all duration-500 group-hover:w-10 group-hover:bg-orange" />
    </div>
  );
}