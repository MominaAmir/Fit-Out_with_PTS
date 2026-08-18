import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drawing & Technical Design Services | PTS Dubai",
  description:
    "CAD drawings, 2D/3D layouts, shop drawings and as-built documentation for fit-out approvals and execution in Dubai.",
};

const drawingTypes = [
  {
    title: "2D Layout & Space Planning",
    description:
      "Accurate floor plans and space layouts used for design sign-off and authority submission.",
  },
  {
    title: "3D Modelling & Visualisation",
    description:
      "Realistic 3D views so clients can see a space before a single wall is built.",
  },
  {
    title: "Shop Drawings",
    description:
      "Construction-ready detail drawings that our own execution teams build directly from.",
  },
  {
    title: "As-Built Drawings",
    description:
      "Final documentation reflecting exactly what was constructed, for handover and future works.",
  },
  {
    title: "MEP Coordination Drawings",
    description:
      "Layouts that coordinate ducting, plumbing and other services with the interior fit-out.",
  },
  {
    title: "Authority Submission Drawings",
    description:
      "Drawings prepared and formatted to the standard Dubai authorities require for approval.",
  },
];

export default function Drawings() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-indigo text-white">
        <div className="blueprint-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            Drawing & Technical Design
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            The blueprint behind
            <br /> every PTS project.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Design intent only survives contact with a construction site if the drawings are
            right. It&apos;s the first thing we produce, and the reference point for everything
            that follows — approvals, execution, and handover.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drawingTypes.map((item) => (
            <div key={item.title} className="corner-ticks border border-line bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm text-ink/60">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Why it matters
            </h2>
            <p className="mt-4 text-ink/70">
              Most fit-out disputes come from a gap between what was drawn and what was built.
              Because PTS produces the drawings and executes the works with the same team, that
              gap doesn&apos;t exist — the drawing our client approves is the drawing our
              carpenters, civil crew and MEP team all work from.
            </p>
          </div>
          <div className="border border-line bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Need drawings only?
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              We also take on drawing-only engagements — authority submission sets, shop
              drawings, or as-built documentation — without a full execution contract attached.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-md bg-orange px-6 py-3 font-display text-sm font-semibold text-white hover:bg-orange-light"
            >
              Discuss Your Drawing Needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
