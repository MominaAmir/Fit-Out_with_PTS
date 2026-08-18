import type { Metadata } from "next";
import { company, stats, yearsExperience } from "@/lib/data";

export const metadata: Metadata = {
  title: "About PTS | Fit-Out & Technical Services Since 2007",
  description:
    "Power Point Technical Services L.L.C. has delivered fit-out, drawing and technical contracting works across Dubai since 2007.",
};

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-indigo text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            About Us
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            {yearsExperience}+ years of building
            <br /> exactly what was drawn.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-ink/80">
              {company.name} — known as {company.shortName} — has been providing fit-out,
              interior design and technical contracting services across Dubai since{" "}
              {company.founded}. Over {yearsExperience}+ years, we&apos;ve built a network of
              trades, consultants and contractors that lets us take on anything from strict
              design consulting to full project design, management and execution.
            </p>
            <p className="mt-6 leading-relaxed text-ink/70">
              What sets PTS apart is that design and execution sit under the same roof. Our
              drawing and technical design team produces the layouts, 3D models and shop drawings
              that our civil, joinery and MEP teams build from directly — so what gets approved is
              what gets built, without translation errors between a design studio and a
              contractor.
            </p>

            <blockquote className="mt-10 border-l-2 border-orange pl-6 font-display text-xl italic text-ink">
              &ldquo;{company.mission}&rdquo;
            </blockquote>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="border border-line bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Expertise you can trust
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Two decades of practical, on-the-ground experience across every trade a fit-out
                  needs.
                </p>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Tailored solutions
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Every client and every space is different — we scope to the project, not a
                  fixed package.
                </p>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Seamless execution
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  One team, one timeline, from consultation through to handover.
                </p>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Commitment to detail
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Drawings drive every stage, which is how we keep quality consistent at scale.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            {stats.map((stat) => (
              <div key={stat.label} className="corner-ticks border border-line bg-white p-5">
                <div className="font-display text-3xl font-semibold text-indigo">
                  {stat.value}
                </div>
                <div className="font-technical mt-1 text-xs uppercase tracking-wide text-ink/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
