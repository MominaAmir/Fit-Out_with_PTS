"use client";

export default function ScrollIndicator() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('about-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContent}
      className="flex items-center gap-4 text-white/30 hover:text-white/50 transition-colors group"
      aria-label="Scroll to content"
    >
      <span className="text-xs font-technical uppercase tracking-widest">Scroll to explore</span>
      <span className="h-px w-12 bg-white/10 group-hover:bg-white/20 transition-colors" />
      <svg className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
}