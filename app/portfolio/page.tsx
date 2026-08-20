import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { PROJECTS_QUERY, FEATURED_PROJECTS_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { projects as fallbackProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | PTS Dubai — Fit-Out & Technical Projects",
  description: "A selection of PTS fit-out, drawing and technical contracting projects across Dubai.",
};

// Revalidate the page every 60 seconds
export const revalidate = 60;

async function getProjects() {
  try {
    const projects = await client.fetch(PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return fallbackProjects;
  }
}

async function getFeaturedProjects() {
  try {
    const projects = await client.fetch(FEATURED_PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.error("Failed to fetch featured projects:", error);
    return [];
  }
}

export default async function Portfolio() {
  const [projects, featuredProjects] = await Promise.all([
    getProjects(),
    getFeaturedProjects(),
  ]);

  const hasProjects = projects && projects.length > 0;

  return (
    <>
      {/* ===== HERO SECTION - STICKY BACKGROUND ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: "url('/images/portfolio-hero-bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/90 via-indigo/80 to-indigo/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange/10 blur-3xl" />
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          
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

        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-orange-light backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
                </span>
                Our Portfolio
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Projects across{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Dubai.</span>
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

            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              A sample of the sectors and project types PTS has delivered. Photos and full case
              studies are added as projects are completed.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <div className="font-display text-3xl font-bold text-orange-light">
                  {hasProjects ? projects.length : '0'}
                </div>
                <div className="text-xs text-white/40 font-technical uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-display text-3xl font-bold text-orange-light">
                  {hasProjects ? [...new Set(projects.map((p: any) => p.sector))].length : '0'}
                </div>
                <div className="text-xs text-white/40 font-technical uppercase tracking-wider">
                  Sectors Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      {featuredProjects && featuredProjects.length > 0 && (
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 blueprint-grid-dim opacity-10" />
          
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
                Featured Projects
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                Our <span className="gradient-text">finest work</span>
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-orange/30" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project: any) => (
                <Link
                  key={project._id}
                  href={`/portfolio/${project.slug.current}`}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3]">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(600).height(450).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-paper-dim flex items-center justify-center">
                        <span className="font-technical text-xs text-ink/30">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 rounded-full bg-orange px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-technical text-xs uppercase tracking-wider text-orange-light">
                      {project.sector}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ALL PROJECTS GRID ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
              All Projects
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Every project tells a{' '}
              <span className="gradient-text">story</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-orange/30" />
          </div>

          {hasProjects ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project: any) => (
                <Link
                  key={project._id}
                  href={`/portfolio/${project.slug.current}`}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:border-orange/30 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-paper-dim">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(600).height(400).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-technical text-xs text-ink/30">No Image</span>
                      </div>
                    )}
                    
                    {/* Year Badge */}
                    {project.year && (
                      <div className="absolute bottom-4 right-4 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                        {project.year}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-technical text-xs uppercase tracking-wider text-orange">
                        {project.sector}
                      </span>
                      {project.featured && (
                        <span className="rounded-full bg-orange/10 px-2 py-0.5 text-[10px] font-medium text-orange">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-orange transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="mt-2 text-sm text-ink/60 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Services Provided */}
                    {project.servicesProvided && project.servicesProvided.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.servicesProvided.slice(0, 3).map((service: string) => (
                          <span
                            key={service}
                            className="rounded-full bg-paper-dim px-2 py-0.5 text-[10px] text-ink/50"
                          >
                            {service}
                          </span>
                        ))}
                        {project.servicesProvided.length > 3 && (
                          <span className="rounded-full bg-paper-dim px-2 py-0.5 text-[10px] text-ink/50">
                            +{project.servicesProvided.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Learn More */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-orange opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-4">
                      <span>View Project</span>
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

                  {/* Bottom Bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange to-orange-light transition-all duration-700 group-hover:w-full" />
                </Link>
              ))}
            </div>
          ) : (
            // Fallback when no projects in Sanity
            <div className="text-center py-20">
              <div className="inline-block rounded-full bg-orange/10 p-4">
                <svg className="h-12 w-12 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">No projects yet</h3>
              <p className="mt-2 text-sm text-ink/60">Projects will appear here once added to Sanity CMS.</p>
              <p className="mt-1 text-xs text-ink/40">Check back soon for our latest work.</p>
            </div>
          )}

          {/* Project Count */}
          {hasProjects && (
            <div className="mt-12 text-center text-sm text-ink/40">
              Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
            </div>
          )}
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
              Start Your Project
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Ready to create your{' '}
              <span className="relative inline-block">
                <span className="gradient-text">own success story?</span>
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
              Let's discuss your project and create something exceptional together.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-orange px-8 py-4 font-display text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange/40"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}