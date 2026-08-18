import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | PTS Dubai — Fit-Out, Drawings, Civil, Joinery, MEP",
  description:
    "PTS offers fit-out & interior design, drawing & technical design, civil maintenance, carpentry & joinery, MEP-related works, and painting & aluminum works in Dubai.",
};

export default function Services() {
  return (
    <>
      <section className="border-b border-line bg-indigo text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            Our Services
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Every trade a fit-out needs.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Six disciplines, coordinated by one team and one set of drawings — from first
            consultation to final handover.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="corner-ticks group relative flex flex-col border border-line bg-white p-6 transition-colors hover:border-orange/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-paper-dim text-indigo group-hover:bg-orange/10 group-hover:text-orange">
                <ServiceIcon icon={service.icon} />
              </div>
              <h2 className="mt-5 font-display text-lg font-semibold text-ink">
                {service.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-ink/60">{service.shortDescription}</p>
              <span className="font-technical mt-5 inline-block text-xs uppercase tracking-wide text-orange">
                View Service →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
