import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, stats, yearsExperience } from "@/lib/data";
import VideoPlayer from "@/components/VideoPlayer";
import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata: Metadata = {
  title: "About PTS | Fit-Out & Technical Services Since 2007",
  description:
    "Power Point Technical Services L.L.C. has delivered fit-out, drawing and technical contracting works across Dubai since 2007.",
};

export default function About() {
  return (
    <>
      {/* ===== HERO SECTION - STICKY BACKGROUND ===== */}
      <section className="relative overflow-hidden">
        {/* Sticky Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: "url('/images/about-hero-bg.png')",
            }}
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/90 via-indigo/80 to-indigo/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Orange accent glow */}
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange/10 blur-3xl" />
          
          {/* Blueprint grid */}
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          
          {/* Animated particles - Static version */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${2 + (i % 4)}px`,
                  height: `${2 + (i % 4)}px`,
                  top: `${(i * 7) % 100}%`,
                  left: `${(i * 13) % 100}%`,
                  animation: `floatParticle ${8 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${(i * 0.5) % 8}s`,
                  opacity: 0.1 + (i % 3) * 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-orange-light backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
                </span>
                About PTS
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              {yearsExperience}+ years of building{' '}
              <span className="relative inline-block">
                <span className="gradient-text">exactly what was drawn.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full pulse-glow"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 4 Q 50 0 100 4 T 198 3"
                    fill="none"
                    stroke="var(--color-orange)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Power Point Technical Services L.L.C. has been delivering fit-out, drawing and 
              technical contracting works across Dubai since {company.founded}.
            </p>


            {/* Scroll indicator - Using client component */}
            <div className="mt-12">
              <ScrollIndicator />
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTORY VIDEO SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-24" id="about-content">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
                Watch Our Story
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                See how we bring{' '}
                <span className="gradient-text">visions to life</span>
              </h2>
              <div className="mt-4 h-px w-16 bg-orange/30" />
              <p className="mt-6 text-ink/60 leading-relaxed">
                From concept to completion, watch how our team transforms spaces across Dubai. 
                See our process, our people, and the quality that sets us apart.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">Design & Planning</h4>
                    <p className="text-sm text-ink/50">Detailed drawings and 3D renderings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">Construction & Execution</h4>
                    <p className="text-sm text-ink/50">Professional fit-out and MEP works</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ink">Handover & Support</h4>
                    <p className="text-sm text-ink/50">Complete project delivery and aftercare</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Video Player */}
            <div>
              <VideoPlayer
                videoId="your-video-id"
                thumbnail="/images/video-thumbnail.png"
                title="PTS Introduction Video"
              />
              {/* Video Duration Badge */}
              <div className="mt-4 flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-lg">
                  <svg className="h-3 w-3 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-ink/60">Watch Video (2:30)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT CONTENT SECTION ===== */}
      <section className="relative overflow-hidden bg-paper py-24">
        <div className="absolute inset-0 blueprint-grid-dim opacity-20" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="max-w-3xl">
                <span className="font-technical text-xs font-medium uppercase tracking-[0.25em] text-orange">
                  Our Story
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                  Building Dubai's future,{' '}
                  <span className="gradient-text">one project at a time</span>
                </h2>
                <div className="mt-4 h-px w-16 bg-orange/30" />
              </div>

              <div className="mt-8 space-y-6 text-ink/70 leading-relaxed">
                <p className="text-lg">
                  {company.name} — known as {company.shortName} — has been providing fit-out,
                  interior design and technical contracting services across Dubai since{' '}
                  {company.founded}. Over {yearsExperience}+ years, we&apos;ve built a network of
                  trades, consultants and contractors that lets us take on anything from strict
                  design consulting to full project design, management and execution.
                </p>
                <p>
                  What sets PTS apart is that design and execution sit under the same roof. Our
                  drawing and technical design team produces the layouts, 3D models and shop drawings
                  that our civil, joinery and MEP teams build from directly — so what gets approved is
                  what gets built, without translation errors between a design studio and a
                  contractor.
                </p>

                <blockquote className="relative border-l-2 border-orange pl-6 font-display text-xl italic text-ink">
                  <svg className="absolute -left-1 -top-6 h-8 w-8 text-orange/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  &ldquo;{company.mission}&rdquo;
                </blockquote>
              </div>

              {/* Feature Grid */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Expertise you can trust
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    Two decades of practical, on-the-ground experience across every trade a fit-out needs.
                  </p>
                </div>

                <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Tailored solutions
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    Every client and every space is different — we scope to the project, not a fixed package.
                  </p>
                </div>

                <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Seamless execution
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    One team, one timeline, from consultation through to handover.
                  </p>
                </div>

                <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Commitment to detail
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    Drawings drive every stage, which is how we keep quality consistent at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Stats */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-technical text-xs font-medium uppercase tracking-widest text-orange">
                  Our Impact
                </h3>
                <div className="mt-4 space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="group border-b border-line/50 pb-4 last:border-0 last:pb-0">
                      <div className="font-display text-3xl font-bold text-indigo transition-all duration-300 group-hover:text-orange">
                        {stat.value}
                      </div>
                      <div className="font-technical mt-1 text-xs uppercase tracking-wide text-ink/50">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="rounded-2xl bg-indigo p-6 text-center">
                <h4 className="font-display text-lg font-semibold text-white">
                  Ready to start your project?
                </h4>
                <p className="mt-2 text-sm text-white/60">
                  Let's discuss how we can bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block rounded-lg bg-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-light hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      
    </>
  );
}