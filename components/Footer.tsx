import Link from "next/link";
import { company, navLinks, services, yearsExperience } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="blueprint-grid border-t border-white/10 bg-indigo text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-orange font-display text-sm font-bold text-white">
                PTS
              </span>
              <span className="font-display text-sm font-semibold">Power Point Technical Services</span>
            </div>
            <p className="max-w-xs text-sm text-white/60">
              {yearsExperience}+ years delivering fit-out, technical drawing and contracting
              services across Dubai. Design, drawings, approvals and execution — end to end.
            </p>
          </div>

          <div>
            <h3 className="font-technical mb-4 text-xs uppercase tracking-wider text-orange">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-technical mb-4 text-xs uppercase tracking-wider text-orange">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-technical mb-4 text-xs uppercase tracking-wider text-orange">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span className="font-technical">EST. {company.founded} · DUBAI, UAE</span>
        </div>
      </div>
    </footer>
  );
}
