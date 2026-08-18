import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import { company, processSteps, services, stats, yearsExperience, sectors } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-indigo text-white">
        <div className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl fade-up">
            <span className="font-technical inline-block rounded border border-orange/40 px-3 py-1 text-xs uppercase tracking-widest text-orange">
              Est. {company.founded} · Dubai, UAE
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
              From drawing board
              <br />
              to <span className="text-orange">handover.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              PTS designs, draws, approves and builds fit-out and technical works across Dubai —
              {" "}{yearsExperience}+ years, under one roof, with the drawings to prove every detail.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-orange px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-orange-light"
              >
                Request a Quote
              </Link>
              <Link
                href="/portfolio"
                className="rounded-md border border-white/25 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display text-3xl font-semibold text-indigo md:text-4xl">
                {stat.value}
              </div>
              <div className="font-technical mt-1 text-xs uppercase tracking-wide text-ink/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Six disciplines. One accountable team.
          </h2>
          <p className="mt-4 text-ink/60">
            Every service below feeds the same set of drawings and the same project timeline —
            nothing gets handed off to a stranger halfway through.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="corner-ticks group relative border border-line bg-white p-6 transition-colors hover:border-orange/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-paper-dim text-indigo group-hover:bg-orange/10 group-hover:text-orange">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{service.shortDescription}</p>
              <span className="font-technical mt-5 inline-block text-xs uppercase tracking-wide text-orange opacity-0 transition-opacity group-hover:opacity-100">
                View Service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="blueprint-grid-dim border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            How a project runs
          </span>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-ink md:text-4xl">
            The same three stages, every time.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative border-l-2 border-orange/40 pl-6">
                <span className="font-technical text-sm text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-technical text-xs uppercase tracking-widest text-orange">
              Sectors served
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Built for Dubai&apos;s widest range of spaces.
            </h2>
            <p className="mt-4 text-ink/60">{company.mission}</p>
            <Link
              href="/about"
              className="mt-6 inline-block font-display text-sm font-semibold text-orange hover:text-orange-light"
            >
              More about PTS →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="border border-line bg-white px-4 py-3 font-technical text-sm text-ink/70"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/60">
            Tell us the scope and we&apos;ll come back with a plan — drawings included.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-orange px-8 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-orange-light"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
