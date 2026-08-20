import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { client } from "@/lib/sanity/client";
import {
  PROJECT_BY_SLUG_QUERY,
  PROJECT_SLUGS_QUERY,
  PROJECTS_QUERY,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

type Params = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(PROJECT_SLUGS_QUERY);
    return (slugs || [])
      .filter((s: any) => s?.slug?.current)
      .map((s: any) => ({ slug: s.slug.current }));
  } catch {
    return [];
  }
}

async function getProject(slug: string) {
  try {
    return await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error("Failed to fetch project:", error);
    return null;
  }
}

async function getOtherProjects(currentSlug: string) {
  try {
    const projects = await client.fetch(PROJECTS_QUERY);
    return (projects || [])
      .filter((p: any) => p.slug?.current !== currentSlug)
      .slice(0, 3);
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | PTS Dubai Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }: Params) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const otherProjects = await getOtherProjects(slug);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {project.mainImage ? (
            <Image
              src={urlFor(project.mainImage).width(1600).height(900).url()}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-indigo" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/90 via-indigo/80 to-indigo/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute inset-0 blueprint-grid opacity-20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-white"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.sector && (
                <span className="font-technical text-xs font-medium uppercase tracking-wider text-orange-light">
                  {project.sector}
                </span>
              )}
              {project.featured && (
                <span className="rounded-full bg-orange/10 px-2 py-0.5 text-[10px] font-medium text-orange-light">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROJECT DETAILS ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {project.description && (
                <div className="prose prose-lg max-w-none text-ink/80">
                  <PortableText value={project.description} />
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <>
                  <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
                    Gallery
                  </h2>
                  <div className="mt-4 h-px w-16 bg-orange/30" />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((image: any, i: number) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line"
                      >
                        <Image
                          src={urlFor(image).width(600).height(450).url()}
                          alt={image.caption || `${project.title} photo ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Services Provided */}
              {project.servicesProvided && project.servicesProvided.length > 0 && (
                <>
                  <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
                    Services Provided
                  </h2>
                  <div className="mt-4 h-px w-16 bg-orange/30" />
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.servicesProvided.map((service: string) => (
                      <span
                        key={service}
                        className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink/70"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* CTA */}
              <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      Have a similar project in mind?
                    </h3>
                    <p className="mt-2 text-sm text-ink/60 max-w-md">
                      Tell us about your space — we'll come back with a plan and next steps.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-orange px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-all duration-300 hover:scale-105 hover:shadow-orange/30"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get in Touch
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar - Project Facts */}
            <aside>
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-technical text-xs font-medium uppercase tracking-widest text-orange">
                  Project Details
                </h3>
                <div className="mt-4 h-px w-12 bg-orange/30" />

                <dl className="mt-4 space-y-4">
                  {project.location && (
                    <div>
                      <dt className="text-xs text-ink/40 font-technical uppercase tracking-wider">Location</dt>
                      <dd className="mt-1 text-sm text-ink/80">{project.location}</dd>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <dt className="text-xs text-ink/40 font-technical uppercase tracking-wider">Year Completed</dt>
                      <dd className="mt-1 text-sm text-ink/80">{project.year}</dd>
                    </div>
                  )}
                  {project.area && (
                    <div>
                      <dt className="text-xs text-ink/40 font-technical uppercase tracking-wider">Area</dt>
                      <dd className="mt-1 text-sm text-ink/80">{project.area.toLocaleString()} sq ft</dd>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <dt className="text-xs text-ink/40 font-technical uppercase tracking-wider">Duration</dt>
                      <dd className="mt-1 text-sm text-ink/80">{project.duration}</dd>
                    </div>
                  )}
                  {project.client && (
                    <div>
                      <dt className="text-xs text-ink/40 font-technical uppercase tracking-wider">Client</dt>
                      <dd className="mt-1 text-sm text-ink/80">{project.client}</dd>
                    </div>
                  )}
                  {project.category && (
                    <div>
                      <dt className="text-xs text-ink/40 font-technical uppercase tracking-wider">Category</dt>
                      <dd className="mt-1 text-sm text-ink/80">{project.category}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Other Projects */}
              {otherProjects.length > 0 && (
                <div className="mt-6 rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-technical text-xs font-medium uppercase tracking-widest text-orange">
                    Other Projects
                  </h3>
                  <div className="mt-4 h-px w-12 bg-orange/30" />

                  <ul className="mt-4 space-y-3">
                    {otherProjects.map((p: any) => (
                      <li key={p._id}>
                        <Link
                          href={`/portfolio/${p.slug.current}`}
                          className="group block rounded-xl border border-line bg-white p-3 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1"
                        >
                          <div className="flex items-center gap-3">
                            {p.mainImage ? (
                              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                                <Image
                                  src={urlFor(p.mainImage).width(96).height(96).url()}
                                  alt={p.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-paper-dim" />
                            )}
                            <div className="min-w-0">
                              <h4 className="font-display text-sm font-semibold text-ink group-hover:text-orange transition-colors truncate">
                                {p.title}
                              </h4>
                              <p className="text-xs text-ink/50 truncate">{p.sector}</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/portfolio"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange transition-all duration-300 hover:gap-4"
                  >
                    View All Projects
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
