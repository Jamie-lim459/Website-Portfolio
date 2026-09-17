import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 flex flex-col items-center justify-between hero-glow px-4 overflow-hidden"
    >
      {/* Ambient drifting glow blob */}
      <div
        data-animate-drift
        aria-hidden="true"
        className="hero-blob animate-drift absolute top-24 left-1/2 -translate-x-1/2 w-[720px] h-[560px] rounded-full blur-3xl pointer-events-none"
      />

      <Reveal
        className="flex flex-col items-center justify-center text-center my-auto w-full max-w-4xl"
        delay={1}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-white/90 tracking-wide mb-8 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
          <span>Modern Websites &amp; Online Presence</span>
        </div>

        <div className="space-y-6 z-10 w-full">
          <h1 className="text-5xl sm:text-7xl md:text-[80px] lg:text-[88px] font-normal tracking-tight text-white leading-[1.05]">
            <span className="font-serif italic font-light text-white">
              <span style={{ fontStyle: "normal" }}>
                Building Websites Growing&nbsp;
              </span>
              Presence
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/70 font-normal leading-relaxed pt-2">
            Modern websites built to make your business look professional, get
            found online, and turn visitors into customers.
          </p>
          <div className="flex items-center justify-center gap-3 pt-4">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-neutral-200 transition-all duration-200"
            >
              Get Started
            </a>
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-black/40 backdrop-blur-sm border border-neutral-700 text-white text-xs sm:text-sm font-normal hover:bg-neutral-800/80 transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal className="w-full flex flex-col items-center gap-8 pb-4 z-10" delay={3}>
        <div className="flex items-center justify-between w-full max-w-xs px-4 text-[10px] sm:text-[11px] font-medium text-white/50 uppercase tracking-widest">
          <span>SCROLL DOWN</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-neutral-400 animate-bounce" />
          </div>
          <span>TO SEE PROJECTS</span>
        </div>

        <div className="w-full max-w-5xl border-t border-neutral-900/80 pt-8 mt-2">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-20 text-white/50 font-medium tracking-widest text-xs sm:text-sm uppercase">
            <span className="hover:text-white transition-colors font-serif tracking-widest">
              Pristine Cleanz
            </span>
            <span className="hover:text-white transition-colors flex items-center gap-1.5 font-sans">
              Anto cuts
            </span>
            <span className="hover:text-white transition-colors font-serif normal-case text-sm tracking-normal">
              unanimous
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}