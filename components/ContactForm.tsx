"use client";

import { useState } from "react";
import { services } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // TODO: wire this up to a real endpoint (e.g. an API route that sends
      // an email via Resend, or a form service like Formspree). For now this
      // just simulates a submission so the UI is testable end to end.
      console.log("Quote request:", data);
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="corner-ticks border border-line bg-white p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-ink/60">
          Thanks — we&apos;ll get back to you shortly at the email or phone number provided.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 font-technical text-xs uppercase tracking-wide text-orange"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="corner-ticks space-y-5 border border-line bg-white p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-technical text-xs uppercase tracking-wide text-ink/60">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-orange"
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-technical text-xs uppercase tracking-wide text-ink/60">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="font-technical text-xs uppercase tracking-wide text-ink/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-orange"
        />
      </div>

      <div>
        <label htmlFor="service" className="font-technical text-xs uppercase tracking-wide text-ink/60">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-orange"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure / general enquiry">Not sure / general enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-technical text-xs uppercase tracking-wide text-ink/60">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about the space, sector and scope..."
          className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-orange"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-orange px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-orange-light disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Quote"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong — please try again or call us directly.
        </p>
      )}
    </form>
  );
}
