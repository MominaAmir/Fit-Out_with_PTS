import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { company, yearsExperience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact PTS | Request a Quote in Dubai",
  description: "Get in touch with Power Point Technical Services for fit-out, drawing and technical contracting work in Dubai.",
};

export default function Contact() {
  return (
    <>
      {/* ===== HERO SECTION - STICKY BACKGROUND ===== */}
      <section className="relative overflow-hidden">
        {/* Sticky Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: "url('/images/contact-hero-bg.png')",
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
            {[...Array(15)].map((_, i) => (
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
                Get in Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Let's scope your{' '}
              <span className="relative inline-block">
                <span className="gradient-text">project.</span>
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
              Call, email, or send the details below — we typically respond within one business
              day.
            </p>

            {/* Quick Contact Info */}
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-orange/20">
                  <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{company.phone}</span>
              </a>
              
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-orange/20">
                  <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{company.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                {/* Section Label */}
                <div>
                  <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
                    Contact Information
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                    Let's talk about{' '}
                    <span className="gradient-text">your project</span>
                  </h2>
                  <div className="mt-3 h-px w-12 bg-orange/30" />
                  <p className="mt-4 text-ink/60 text-sm">
                    We're here to help. Reach out to us through any of these channels.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-technical text-xs font-medium uppercase tracking-wider text-ink/40">
                        Phone
                      </h4>
                      <a
                        href={`tel:${company.phone.replace(/\s/g, "")}`}
                        className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-orange"
                      >
                        {company.phone}
                      </a>
                      <p className="text-xs text-ink/40">Mon-Fri, 9am - 6pm GST</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-technical text-xs font-medium uppercase tracking-wider text-ink/40">
                        Email
                      </h4>
                      <a
                        href={`mailto:${company.email}`}
                        className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-orange"
                      >
                        {company.email}
                      </a>
                      <p className="text-xs text-ink/40">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-technical text-xs font-medium uppercase tracking-wider text-ink/40">
                        Location
                      </h4>
                      <p className="font-display text-lg font-semibold text-ink">
                        {company.location}
                      </p>
                      <p className="text-xs text-ink/40">Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-line bg-white p-4 text-center transition-all duration-300 hover:border-orange/30 hover:shadow-md">
                    <div className="font-display text-2xl font-bold text-orange">
                      {yearsExperience}+
                    </div>
                    <div className="text-xs text-ink/50">Years Experience</div>
                  </div>
                  <div className="rounded-xl border border-line bg-white p-4 text-center transition-all duration-300 hover:border-orange/30 hover:shadow-md">
                    <div className="font-display text-2xl font-bold text-orange">
                      120+
                    </div>
                    <div className="text-xs text-ink/50">Projects Delivered</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  <SocialLink href="#" icon="linkedin" label="LinkedIn" />
                  <SocialLink href="#" icon="instagram" label="Instagram" />
                  <SocialLink href="#" icon="facebook" label="Facebook" />
                  <SocialLink href="#" icon="youtube" label="YouTube" />
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-line bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Send us a message
                  </h3>
                  <p className="mt-1 text-sm text-ink/50">
                    Fill in the details and we'll get back to you within 24 hours.
                  </p>
                  <div className="mt-3 h-px w-12 bg-orange/30" />
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP OR LOCATION SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-10" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
              Find Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Visit our{' '}
              <span className="gradient-text">office</span>
            </h2>
            <div className="mx-auto mt-3 h-px w-12 bg-orange/30" />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            {/* Google Maps Embed */}
            <div className="aspect-[16/6] bg-paper-dim">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.84328896423!2d55.2971505!3d25.2041854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e7e5f5e5f5e%3A0x5f5e5f5e5f5e5f5e!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            
            {/* Location Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-full bg-white px-6 py-3 shadow-lg">
              <span className="flex items-center gap-2 text-sm font-medium text-ink">
                <svg className="h-4 w-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {company.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: "url('/images/cta-bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/95 via-indigo/85 to-indigo/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange/10 blur-3xl" />
          <div className="absolute inset-0 blueprint-grid opacity-10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange-light">
              Let's Build Together
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Ready to bring your{' '}
              <span className="relative inline-block">
                <span className="gradient-text">vision to life?</span>
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
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Tell us about your space and we'll provide a tailored solution with detailed drawings.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-orange px-8 py-4 font-display text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange/40"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-display text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:scale-105"
              >
                Email Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/5 pt-8 text-sm text-white/30">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24hr Response Time
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Dubai Licensed
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
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
  };

  return (
    <a
      href={href}
      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-orange/30 hover:bg-orange/10 hover:text-orange-light hover:scale-110 hover:shadow-lg hover:shadow-orange/10"
      aria-label={label}
    >
      {icons[icon as keyof typeof icons] || icons.linkedin}
    </a>
  );
}