"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, company } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo font-display text-sm font-bold text-white">
            PTS
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-semibold text-ink">Power Point</span>
            <span className="font-technical text-[10px] tracking-wide text-ink/60">
              TECHNICAL SERVICES L.L.C.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-technical text-[13px] uppercase tracking-wide text-ink/70 transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="font-technical text-sm text-ink/70 hover:text-orange"
          >
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-orange px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-orange-light"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="font-technical text-lg text-ink">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-technical text-sm uppercase tracking-wide text-ink/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-orange px-4 py-2.5 text-center font-display text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
