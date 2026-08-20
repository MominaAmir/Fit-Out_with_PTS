"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission (send to email, API, etc.)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-4">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">Message Sent!</h3>
        <p className="mt-2 text-ink/60">We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm text-orange hover:text-orange-light"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink/70">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1.5 w-full rounded-lg border border-line px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:border-orange/50 focus:shadow-lg focus:shadow-orange/5"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink/70">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1.5 w-full rounded-lg border border-line px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:border-orange/50 focus:shadow-lg focus:shadow-orange/5"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink/70">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1.5 w-full rounded-lg border border-line px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:border-orange/50 focus:shadow-lg focus:shadow-orange/5"
            placeholder="+971 XX XXX XXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-medium text-ink/70">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            required
            className="mt-1.5 w-full rounded-lg border border-line px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:border-orange/50 focus:shadow-lg focus:shadow-orange/5"
            placeholder="Project Inquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink/70">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-line px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:border-orange/50 focus:shadow-lg focus:shadow-orange/5"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full overflow-hidden rounded-lg bg-orange px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-all duration-300 hover:scale-105 hover:shadow-orange/30 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>

      <p className="text-xs text-ink/40 text-center">
        We'll never share your information. Privacy is important to us.
      </p>
    </form>
  );
}