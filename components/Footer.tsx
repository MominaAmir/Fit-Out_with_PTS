"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { company, navLinks, services, yearsExperience } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
    // Show success message
    alert("Thank you for subscribing!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-indigo text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        
        {/* Gradient Orbs */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange/10 blur-3xl animate-float-slow" />
        <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-sky/10 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        
        {/* Animated Gradient Line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${10 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.1 + Math.random() * 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Column - With Logo */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              {/* PTS Logo Image */}
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white/10 shadow-lg shadow-orange/10 transition-all duration-500 hover:shadow-orange/20 hover:scale-105">
                <Image
                  src="/images/logo-icon.png"
                  alt="PTS Logo"
                  width={48}
                  height={48}
                  className="object-contain transition-transform duration-300"
                  priority
                />
                {/* Glow ring on hover */}
                <div className="absolute -inset-1 rounded-xl border-2 border-orange/0 transition-all duration-500 group-hover:border-orange/30" />
              </div>
              
              <div>
                <span className="font-display text-sm font-semibold text-white">
                  Power Point Technical Services
                </span>
                <span className="block font-technical text-[10px] uppercase tracking-wider text-orange-light">
                  Est. {company.founded}
                </span>
              </div>
            </div>
            
            <p className="max-w-xs text-sm leading-relaxed text-white/60 transition-colors duration-300 hover:text-white/80">
              {yearsExperience}+ years delivering fit-out, technical drawing and contracting
              services across Dubai. Design, drawings, approvals and execution — end to end.
            </p>
            
            {/* Social Links - Enhanced */}
            <div className="mt-6 flex gap-2">
              <SocialLink 
                href="#" 
                icon="linkedin" 
                label="LinkedIn"
              />
              <SocialLink 
                href="#" 
                icon="instagram" 
                label="Instagram"
              />
              <SocialLink 
                href="#" 
                icon="facebook" 
                label="Facebook"
              />
              <SocialLink 
                href="#" 
                icon="youtube" 
                label="YouTube"
              />
              <SocialLink 
                href="#" 
                icon="twitter" 
                label="Twitter/X"
              />
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <h3 className="font-technical mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-orange-light">
              <span className="h-px w-4 bg-orange/30" />
              Navigate
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="h-1 w-1 rounded-full bg-orange/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-orange group-hover:scale-150" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-technical mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-orange-light">
              <span className="h-px w-4 bg-orange/30" />
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((s, index) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-2 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="h-1 w-1 rounded-full bg-orange/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-orange group-hover:scale-150" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-technical mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-orange-light">
              <span className="h-px w-4 bg-orange/30" />
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 text-white/60 transition-all duration-300 hover:text-white"
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-orange/20">
                    <svg className="h-4 w-4 text-orange/50 transition-colors duration-300 group-hover:text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="break-all">{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-3 text-white/60 transition-all duration-300 hover:text-white"
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-orange/20">
                    <svg className="h-4 w-4 text-orange/50 transition-colors duration-300 group-hover:text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="break-all">{company.email}</span>
                </a>
              </li>
              <li>
                <span className="group flex items-start gap-3 text-white/60">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-orange/20">
                    <svg className="h-4 w-4 text-orange/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>{company.location}</span>
                </span>
              </li>
            </ul>

            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white/60 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="transition-colors hover:text-white/60 hover:underline">
              Terms of Service
            </Link>
            <span className="text-white/10">|</span>
            <span className="font-technical tracking-wider text-orange/50">
              EST. {company.founded} · DUBAI, UAE
            </span>
          </div>
        </div>

        {/* Back to Top Button - Fixed Position */}
        <div className="flex justify-end mt-8">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/40 backdrop-blur-sm transition-all duration-300 hover:border-orange/30 hover:bg-orange/10 hover:text-orange-light hover:scale-105 hover:shadow-lg hover:shadow-orange/10"
            aria-label="Back to top"
          >
            <svg className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <span className="text-xs font-medium">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

// Social Link Component
function SocialLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  const icons = {
    linkedin: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    facebook: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    youtube: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    twitter: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  };

  return (
    <a
      href={href}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-orange/30 hover:bg-orange/10 hover:text-orange-light hover:scale-110 hover:shadow-lg hover:shadow-orange/10"
      aria-label={label}
    >
      {icons[icon as keyof typeof icons] || icons.linkedin}
      <span className="absolute -bottom-6 text-[8px] font-medium uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}