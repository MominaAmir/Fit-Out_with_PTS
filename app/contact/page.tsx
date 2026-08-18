import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact PTS | Request a Quote in Dubai",
  description: "Get in touch with Power Point Technical Services for fit-out, drawing and technical contracting work in Dubai.",
};

export default function Contact() {
  return (
    <>
      <section className="border-b border-line bg-indigo text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="font-technical text-xs uppercase tracking-widest text-orange">
            Contact
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Let&apos;s scope your project.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Call, email, or send the details below — we typically respond within one business
            day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="font-display text-xl font-semibold text-ink">Direct Contact</h2>
            <div className="mt-6 space-y-5">
              <div>
                <span className="font-technical text-xs uppercase tracking-wide text-ink/50">
                  Phone
                </span>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-lg text-ink hover:text-orange"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <span className="font-technical text-xs uppercase tracking-wide text-ink/50">
                  Email
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-lg text-ink hover:text-orange"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <span className="font-technical text-xs uppercase tracking-wide text-ink/50">
                  Location
                </span>
                <p className="mt-1 text-lg text-ink">{company.location}</p>
              </div>
            </div>

            <div className="mt-10 border border-line bg-paper-dim p-5">
              <p className="font-technical text-xs uppercase tracking-wide text-ink/50">
                Established
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-indigo">
                {company.founded}
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
