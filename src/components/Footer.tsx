import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-black pt-28 pb-8 px-6 min-h-[600px] flex flex-col justify-between"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida/AEtjO1WbaCaLyUg7Hw4O6tYo8cUgoV6ko3mOjnHhPVNIOfO78-oeWHl9N9byRF-CIOdIYus0QgNvXI6YK-B5CG4np5jnjg7720PKD7gTMQ1V3pncQI2b0FK4ez7F1HxOU5VYR7J-UAghICO1vGed3Hhm99gyRqhqt85EJvVitTTzLCUoSvrPd-iGjoPX2Y0IY3SdhSqS54hjtDk2m02mC2GHYYzk35mFica4UE-EAz2pZ4CkIFfRlm60VwfteXg"
          alt="Smoke background texture"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      </div>

      <Reveal className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto pt-28 pb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 mb-8 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
          <span>Available For Work</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal tracking-tight text-white leading-snug md:leading-tight mb-8 max-w-2xl">
          Ready to build your{" "}
          <strong className="font-semibold">online presence?</strong>
        </h2>

        <a
          href="#contact"
          className="px-6 py-2.5 rounded-xl bg-neutral-900/60 border border-neutral-700/80 text-sm font-normal text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:bg-neutral-800/80 hover:border-neutral-500 transition duration-200 mb-8"
        >
          Book a Free Call
        </a>

        <div className="flex items-center justify-center gap-5 text-neutral-400 text-sm">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
            aria-label="Website"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
          <span className="text-neutral-700 text-xs">|</span>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </Reveal>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 pt-12 pb-6 px-4 text-xs text-neutral-400">
        <div className="text-center md:text-left">
          <a
            className="hover:text-white transition text-neutral-400"
            href="mailto:hello@yourbusiness.com"
          >
            hello@yourbusiness.com
          </a>
        </div>
        <div className="text-center text-neutral-400">Sydney, Australia</div>
        <div className="flex items-center justify-center md:justify-end gap-3 text-neutral-400">
          <span>© 2026 [Business Name]. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}