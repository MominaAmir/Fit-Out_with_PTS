import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceIcon from "@/components/ServiceIcon";
import { services, yearsExperience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | PTS Dubai — Fit-Out, Drawings, Civil, Joinery, MEP",
  description:
    "PTS offers fit-out & interior design, drawing & technical design, civil maintenance, carpentry & joinery, MEP-related works, and painting & aluminum works in Dubai.",
};

export default function Services() {
  return (
    <>
      {/* ===== HERO SECTION - STICKY BACKGROUND ===== */}
      <section className="relative overflow-hidden">
        {/* Sticky Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: "url('/images/services-hero-bg.jpg')",
            }}
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/90 via-indigo/80 to-indigo/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Orange accent glow */}
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange/10 blur-3xl" />
          
          {/* Blueprint grid */}
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${2 + (i % 4)}px`,
                  height: `${2 + (i % 4)}px`,
                  top: `${(i * 7) % 100}%`,
                  left: `${(i * 13) % 100}%`,
                  animation: `floatParticle ${8 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${(i * 0.5) % 8}s`,
                  opacity: 0.1 + (i % 3) * 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-orange-light backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
                </span>
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Every trade a{' '}
              <span className="relative inline-block">
                <span className="gradient-text">fit-out needs.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full pulse-glow"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 4 Q 50 0 100 4 T 198 3"
                    fill="none"
                    stroke="var(--color-orange)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Six disciplines, coordinated by one team and one set of drawings — from first
              consultation to final handover.
            </p>

            {/* Stats Row */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="font-display text-3xl font-bold text-orange-light">
                  {services.length}
                </div>
                <div className="text-xs text-white/40 font-technical uppercase tracking-wider">
                  Service Disciplines
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-display text-3xl font-bold text-orange-light">
                  {yearsExperience}+
                </div>
                <div className="text-xs text-white/40 font-technical uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-display text-3xl font-bold text-orange-light">
                  100%
                </div>
                <div className="text-xs text-white/40 font-technical uppercase tracking-wider">
                  In-House Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID SECTION ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        {/* Background elements */}
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
              What We Offer
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Six disciplines.{' '}
              <span className="gradient-text">One accountable team.</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-orange/30" />
            <p className="mx-auto mt-4 max-w-2xl text-ink/60">
              Every service below feeds the same set of drawings and the same project timeline —
              nothing gets handed off to a stranger halfway through.
            </p>
          </div>

          {/* Services Grid - Enhanced Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Decorative corner accent */}
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-orange/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-orange/10" />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon with animated ring */}
                  <div className="relative mb-6 inline-block">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo/5 text-indigo transition-all duration-500 group-hover:bg-orange group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange/25">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    {/* Pulsing ring behind icon */}
                    <div className="absolute inset-0 rounded-xl bg-orange/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
                    <div className="absolute -inset-1 rounded-xl border-2 border-orange/0 transition-all duration-500 group-hover:border-orange/20 group-hover:scale-[1.4]" />
                  </div>

                  {/* Service Number */}
                  <div className="absolute right-6 top-6 font-technical text-5xl font-bold text-ink/5 transition-all duration-500 group-hover:text-orange/10 group-hover:scale-110">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-orange">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-ink/80">
                    {service.shortDescription}
                  </p>
                  
                  {/* Feature Tags */}
                  {service.features && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-paper-dim px-2.5 py-0.5 text-[10px] font-medium text-ink/50 transition-all duration-300 group-hover:bg-orange/10 group-hover:text-orange"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features && service.features.length > 2 && (
                        <span className="rounded-full bg-paper-dim px-2.5 py-0.5 text-[10px] font-medium text-ink/50">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Animated arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-4">
                    <span>Learn more</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Progress bar at bottom */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange to-orange-light transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 rounded-full border border-line bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <span className="text-sm text-ink/60">
                Need a custom solution?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-orange transition-all duration-300 hover:gap-4"
              >
                Talk to our team
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

      {/* ===== WHY PTS SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-10" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[4/3] bg-indigo/10">
                  <Image
                    src="/images/services-why-pts.png"
                    alt="Why Choose PTS"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Overlay badge */}
               <div className="absolute bottom-4 right-4 rounded-full bg-orange px-6 py-3 shadow-lg shadow-orange/25">
  <span className="font-display text-sm font-semibold text-white">
    {yearsExperience}+ Years
  </span>
</div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
                Why Choose PTS
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                Design and execution{' '}
                <span className="gradient-text">under one roof</span>
              </h2>
              <div className="mt-4 h-px w-16 bg-orange/30" />
              
              <p className="mt-6 text-ink/60 leading-relaxed">
                What sets PTS apart is that our drawing and technical design team produces the 
                layouts, 3D models and shop drawings that our civil, joinery and MEP teams build 
                from directly — so what gets approved is what gets built, without translation 
                errors between a design studio and a contractor.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">Quality Assurance</h4>
                    <p className="text-xs text-ink/50">Rigorous quality control at every stage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">On-Time Delivery</h4>
                    <p className="text-xs text-ink/50">Projects delivered on schedule, every time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">Dubai Licensed</h4>
                    <p className="text-xs text-ink/50">Fully licensed and approved in Dubai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">Client Focused</h4>
                    <p className="text-xs text-ink/50">Tailored solutions for every client</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-orange transition-all duration-300 hover:gap-4"
              >
                Learn more about PTS
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

     
    </>
  );
}