"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-8 py-5 bg-black/80 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled ? "border-neutral-900/60" : "border-transparent"
      }`}
    >
      <a href="#hero" className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" />
          </svg>
        </div>
        <span className="text-sm font-semibold tracking-tight text-white">
          Portfolite
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-all duration-200"
        >
          <span>BOOK A CALL</span>
          <span className="text-[11px]">↗</span>
        </a>
      </div>
    </header>
  );
}