import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | PTS Dubai — Fit-Out & Technical Projects",
  description: "A selection of PTS fit-out, drawing and technical contracting projects across Dubai.",
};

export default function Portfolio() {
  return (
    <>
      <section className="border-b border-line bg-indigo text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            Portfolio
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Projects across Dubai.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            A sample of the sectors and project types PTS has delivered. Photos and full case
            studies are added as projects are completed and cleared for sharing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="corner-ticks group border border-line bg-white">
              <div className="blueprint-grid-dim relative flex h-44 items-center justify-center bg-paper-dim">
                <span className="font-technical text-xs uppercase tracking-widest text-ink/30">
                  Project Photo
                </span>
              </div>
              <div className="p-6">
                <span className="font-technical text-xs uppercase tracking-wide text-orange">
                  {project.sector}
                </span>
                <h2 className="mt-2 font-display text-lg font-semibold text-ink">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-ink/60">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border border-dashed border-line bg-paper-dim p-6 text-center">
          <p className="font-technical text-sm text-ink/60">
            Note: replace these placeholders with real project photography, floor plans and
            drawing previews as they become available — this is the section that will most
            directly build client trust.
          </p>
        </div>
      </section>
    </>
  );
}
