"use client";

import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import Particles from "@/components/Particles";
import { company, processSteps, services, stats, yearsExperience, sectors } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-indigo text-white">
        {/* Background photo */}
        <div
          className="hero-bg-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        
        {/* Enhanced dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo/95 via-indigo/85 to-indigo/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo/90 via-transparent to-indigo/40" />
        
        {/* Blueprint grid */}
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl float-slow"
          style={{ background: "radial-gradient(circle, var(--color-orange) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl float-slow"
          style={{ 
            background: "radial-gradient(circle, var(--color-sky) 0%, transparent 70%)",
            animationDelay: "2s"
          }}
        />

        {/* Particles */}
        <Particles count={20} />

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: copy */}
          <div>
            <span
              className="fade-up font-technical inline-block rounded border border-orange/40 px-3 py-1 text-xs uppercase tracking-widest text-orange shimmer"
              style={{ animationDelay: "0.05s" }}
            >
              Est. {company.founded} · Dubai, UAE
            </span>
            
            <h1
              className="fade-up mt-6 font-display text-4xl font-semibold leading-[1.1] md:text-6xl"
              style={{ animationDelay: "0.15s" }}
            >
              From drawing board
              <br />
              to{" "}
              <span className="relative inline-block">
                <span className="gradient-text">handover.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full pulse-glow"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 50 2 100 6 T 198 5"
                    fill="none"
                    stroke="var(--color-orange)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
              <span className="typewriter-cursor" />
            </h1>
            
            <p
              className="fade-up mt-6 max-w-lg text-lg text-white/70"
              style={{ animationDelay: "0.28s" }}
            >
              PTS designs, draws, approves and builds fit-out and technical works across Dubai —
              {" "}{yearsExperience}+ years, under one roof, with the drawings to prove every detail.
            </p>

            <div
              className="fade-up mt-9 flex flex-wrap gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="btn-glow relative rounded-md bg-orange px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-orange-light hover:shadow-orange/30 active:scale-95"
              >
                Request a Quote
              </Link>
              <Link
                href="/portfolio"
                className="hover-lift rounded-md border border-white/25 px-6 py-3 font-display text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:border-white/50 hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>

            <div
              className="fade-up mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8"
              style={{ animationDelay: "0.52s" }}
            >
              <div className="counter">
                <span className="font-display text-2xl font-semibold text-white">
                  {yearsExperience}+
                </span>
                <span className="font-technical ml-2 text-xs uppercase tracking-wide text-white/50">
                  Years
                </span>
              </div>
              <div className="counter" style={{ animationDelay: "0.2s" }}>
                <span className="font-display text-2xl font-semibold text-white">120+</span>
                <span className="font-technical ml-2 text-xs uppercase tracking-wide text-white/50">
                  Projects
                </span>
              </div>
              <div className="counter" style={{ animationDelay: "0.4s" }}>
                <span className="font-display text-2xl font-semibold text-white">250+</span>
                <span className="font-technical ml-2 text-xs uppercase tracking-wide text-white/50">
                  Drawings
                </span>
              </div>
            </div>
          </div>

          {/* Right: Blueprint panel */}
          <div
            className={`relative hidden lg:block ${isVisible ? 'scale-bounce' : 'opacity-0'}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glow-border corner-ticks relative rotate-1 border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md transition-all duration-700 hover:rotate-0 hover:scale-105">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-technical text-[10px] uppercase tracking-widest text-white/40">
                  Floor Plan · Rev. 03
                </span>
                <span className="relative h-2.5 w-2.5 rounded-full bg-orange">
                  <span className="absolute inset-0 animate-ping rounded-full bg-orange opacity-75" />
                </span>
              </div>
              <svg viewBox="0 0 320 240" className="w-full text-white/70 transition-transform duration-500 hover:scale-105" aria-hidden="true">
                <rect x="10" y="10" width="300" height="220" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="10" y1="90" x2="180" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="180" y1="10" x2="180" y2="230" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="180" y1="150" x2="310" y2="150" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="90" y1="90" x2="90" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />

                <line x1="10" y1="0" x2="310" y2="0" stroke="var(--color-orange)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="10" y1="-4" x2="10" y2="4" stroke="var(--color-orange)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="310" y1="-4" x2="310" y2="4" stroke="var(--color-orange)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </line>
                <text x="150" y="-8" fill="var(--color-orange)" fontSize="8" fontFamily="monospace" opacity="0.8">
                  9800 MM
                </text>

                <circle cx="230" cy="190" r="18" fill="none" stroke="var(--color-sky)" strokeWidth="1.2" opacity="0.6">
                  <animate attributeName="stroke-dasharray" values="0 113;113 0" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="230" y1="172" x2="230" y2="208" stroke="var(--color-sky)" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="212" y1="190" x2="248" y2="190" stroke="var(--color-sky)" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
                </line>
              </svg>
              
              <div className="mt-2 flex justify-between text-[8px] text-white/30">
                <span>0</span>
                <span>3M</span>
                <span>6M</span>
                <span>9M</span>
                <span>12M</span>
              </div>
            </div>

            <div className="animate-float corner-ticks absolute -bottom-6 -left-6 border border-orange/30 bg-indigo-light/90 px-5 py-4 shadow-xl backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <div className="font-display text-2xl font-semibold text-orange">
                {yearsExperience}+
              </div>
              <div className="font-technical text-[10px] uppercase tracking-wide text-white/60">
                Years Since {company.founded}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative hidden justify-center pb-8 md:flex">
          <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors cursor-pointer">
            <span className="font-technical text-[10px] uppercase tracking-widest">Scroll</span>
            <span className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent">
              <span className="block h-full w-px animate-bounce bg-orange" />
            </span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION - PREMIUM DESIGN ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="font-technical text-xs uppercase tracking-widest text-orange">
                What we do
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              Six disciplines.{" "}
              <span className="gradient-text">One accountable team.</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-orange to-orange-light" />
            <p className="mx-auto mt-6 max-w-2xl text-ink/60">
              Every service below feeds the same set of drawings and the same project timeline —
              nothing gets handed off to a stranger halfway through.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative block overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
                style={{ 
                  animationDelay: `${index * 0.12}s`,
                  height: '420px'
                }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${service.image || '/images/services/default-bg.png'})`,
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/60" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange/20 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="relative flex h-full flex-col justify-end p-8">
                  <div className="absolute right-6 top-6 font-technical text-6xl font-bold text-white/5 transition-all duration-500 group-hover:text-white/10 group-hover:scale-110">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-white transition-all duration-500 group-hover:bg-orange group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange/30">
                        <ServiceIcon icon={service.icon} />
                      </div>
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/0 transition-all duration-500 group-hover:border-orange/40 group-hover:scale-150" />
                      <div className="absolute inset-0 rounded-2xl bg-orange/20 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.8]" />
                    </div>
                    
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70 backdrop-blur-sm transition-all duration-300 group-hover:bg-orange/20 group-hover:text-orange-light">
                      Service {String(index + 1)}
                    </span>
                  </div>

                  <div className="transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-light">
                      {service.title}
                    </h3>
                    
                    <p className="mt-3 text-sm leading-relaxed text-white/70 transition-all duration-500 group-hover:text-white/90">
                      {service.shortDescription}
                    </p>
                    
                    {service.features && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm transition-all duration-300 group-hover:bg-orange/20 group-hover:text-orange-light group-hover:scale-105"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange to-orange-light transition-all duration-700 group-hover:w-full" />
                  
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-light opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:gap-4">
                    <span>Explore Service</span>
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-white/0 transition-all duration-500 group-hover:border-orange/30" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="font-technical text-xs font-medium uppercase tracking-[0.2em] text-orange">
                How a project runs
              </span>
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
              The same three stages,{" "}
              <span className="relative inline-block">
                <span className="gradient-text">every time.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 4 Q 50 0 100 4 T 198 3"
                    fill="none"
                    stroke="var(--color-orange)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink/60">
              A streamlined process from concept to completion, ensuring quality at every step.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-line bg-white p-8 transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute -right-4 -top-4 font-technical text-8xl font-bold text-ink/5 transition-all duration-500 group-hover:text-orange/10 group-hover:scale-110">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="absolute left-0 top-0 h-1 w-12 bg-orange transition-all duration-500 group-hover:w-full" />

                <div className="relative mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange/20 bg-orange/5 transition-all duration-500 group-hover:border-orange group-hover:bg-orange group-hover:shadow-lg group-hover:shadow-orange/20">
                  <span className="font-technical text-xl font-bold text-orange transition-all duration-500 group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-orange">
                  {step.title}
                </h3>
                
                <div className="mt-3 h-0.5 w-10 bg-orange/30 transition-all duration-500 group-hover:w-16 group-hover:bg-orange" />
                
                <p className="mt-4 leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-ink/80">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange/50">
                  <span className="font-technical text-xs uppercase tracking-wider">
                    Step {String(index + 1)} of {processSteps.length}
                  </span>
                </div>

                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-paper-dim">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-orange to-orange-light transition-all duration-1000 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 rounded-full border border-line bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <span className="text-sm text-ink/60">
                Ready to start your project?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-orange transition-all duration-300 hover:gap-4"
              >
                Get in touch
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION - ANIMATED ===== */}
      <section className="relative overflow-hidden bg-paper py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-paper via-white to-paper" />
          <div className="absolute inset-0 blueprint-grid-dim opacity-30" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
              Our track record
            </span>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-line" />
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                By the numbers
              </h2>
              <div className="h-px w-12 bg-line" />
            </div>
            <p className="mt-2 text-sm text-ink/40">
              Watch our impact grow in real-time
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTORS SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
              Industries we serve
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
              Expertise across <span className="gradient-text">every sector</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-orange/30" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => {
              const icons = {
                'Commercial': '🏢',
                'Residential': '🏠',
                'Retail': '🛍️',
                'Hospitality': '🏨',
                'Healthcare': '🏥',
                'Education': '📚',
                'Industrial': '🏭',
                'Government': '🏛️'
              };
              
              return (
                <div
                  key={sector}
                  className="group relative rounded-2xl border border-line bg-paper p-8 text-center transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="mb-4 text-4xl transition-transform duration-500 group-hover:scale-110">
                    {icons[sector as keyof typeof icons] || '📍'}
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-orange">
                    {sector}
                  </h3>
                  
                  <div className="mx-auto mt-3 h-0.5 w-8 bg-orange/20 transition-all duration-500 group-hover:w-12 group-hover:bg-orange" />
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block rounded-full border border-line bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <span className="text-sm text-ink/60">
                {company.mission}
              </span>
              <Link
                href="/about"
                className="ml-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-orange transition-all duration-300 hover:gap-4"
              >
                Learn more
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-indigo relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky/20 to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center relative">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/60">
            Tell us the scope and we'll come back with a plan — drawings included.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-block relative overflow-hidden rounded-md bg-orange px-8 py-3.5 font-display text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange/25"
          >
            <span className="relative z-10">Request a Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>
      </section>
    </>
  );
}

// ===== ANIMATED STAT COMPONENT =====
function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-3 text-3xl transition-transform duration-500 group-hover:scale-110">
        {icons[label] || '📊'}
      </div>

      <div className="relative font-display text-3xl font-bold text-indigo md:text-4xl transition-all duration-500 group-hover:text-orange">
        {isVisible ? count : 0}
        {suffix}
      </div>

      <div className="relative mt-1 text-xs font-medium text-ink/50">
        {label}
      </div>

      <div className="relative mx-auto mt-3 h-0.5 w-6 bg-orange/20 transition-all duration-500 group-hover:w-10 group-hover:bg-orange" />
    </div>
  );
}