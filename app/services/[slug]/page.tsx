import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";

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
      <section className="border-b border-line bg-indigo text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link href="/services" className="font-technical text-xs uppercase tracking-widest text-white/50 hover:text-white">
            ← All Services
          </Link>
          <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-md bg-orange/15 text-orange">
            <ServiceIcon icon={service.icon} className="h-6 w-6" />
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-xl text-white/70">{service.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="leading-relaxed text-ink/80">{service.description}</p>

            <h2 className="mt-10 font-display text-xl font-semibold text-ink">Scope of Work</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 border border-line bg-white px-4 py-3 text-sm text-ink/70"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Ready to scope this project?
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Tell us the space and sector — we&apos;ll come back with a plan and, where
                relevant, first-pass drawings.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-md bg-orange px-6 py-3 font-display text-sm font-semibold text-white hover:bg-orange-light"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <aside>
            <h3 className="font-technical text-xs uppercase tracking-widest text-orange">
              Other Services
            </h3>
            <ul className="mt-4 space-y-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block border border-line bg-white px-4 py-3 text-sm text-ink/70 hover:border-orange/50 hover:text-ink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
