import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceIcon from "@/components/ServiceIcon";
import { services, yearsExperience } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | PTS Dubai`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetail({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* ===== HERO SECTION - STICKY BACKGROUND ===== */}
      <section className="relative overflow-hidden">
        {/* Sticky Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: `url('/images/service-${service.slug}-bg.png')`,
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
            {/* Back Link */}
            <Link 
              href="/services" 
              className="group inline-flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-white"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Services
            </Link>

           

            {/* Icon */}
            <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange/20 text-orange backdrop-blur-sm">
              <ServiceIcon icon={service.icon} className="h-8 w-8" />
            </div>

            {/* Heading */}
            <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE DETAILS SECTION ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-ink/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Scope of Work - Enhanced */}
              <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
                Scope of Work
              </h2>
              <div className="mt-4 h-px w-16 bg-orange/30" />
              
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.scope.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-ink/70 group-hover:text-ink/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Card - Enhanced */}
              <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      Ready to scope this project?
                    </h3>
                    <p className="mt-2 text-sm text-ink/60 max-w-md">
                      Tell us the space and sector — we'll come back with a plan and, where
                      relevant, first-pass drawings.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-orange px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-all duration-300 hover:scale-105 hover:shadow-orange/30"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request a Quote
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </Link>
                </div>
              </div>

              {/* Related Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-line bg-white p-4 text-center">
                  <div className="font-display text-2xl font-bold text-orange">
                    {yearsExperience}+
                  </div>
                  <div className="text-xs text-ink/50 font-technical uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="rounded-xl border border-line bg-white p-4 text-center">
                  <div className="font-display text-2xl font-bold text-orange">
                    120+
                  </div>
                  <div className="text-xs text-ink/50 font-technical uppercase tracking-wider">
                    Projects Done
                  </div>
                </div>
                <div className="rounded-xl border border-line bg-white p-4 text-center">
                  <div className="font-display text-2xl font-bold text-orange">
                    100%
                  </div>
                  <div className="text-xs text-ink/50 font-technical uppercase tracking-wider">
                    In-House
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Other Services */}
            <aside>
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-technical text-xs font-medium uppercase tracking-widest text-orange">
                  Other Services
                </h3>
                <div className="mt-4 h-px w-12 bg-orange/30" />
                
                <ul className="mt-4 space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group block rounded-xl border border-line bg-white p-4 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo/5 text-indigo transition-all duration-300 group-hover:bg-orange/10 group-hover:text-orange">
                            <ServiceIcon icon={s.icon} className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-display text-sm font-semibold text-ink group-hover:text-orange transition-colors">
                              {s.title}
                            </h4>
                            <p className="text-xs text-ink/50 line-clamp-1">
                              {s.shortDescription}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* View All Link */}
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange transition-all duration-300 hover:gap-4"
                >
                  View All Services
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

     
    </>
  );
}