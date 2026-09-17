"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    question: "What services do you provide?",
    answer:
      "I design and develop modern, responsive websites for businesses. I also offer Google Business Profile setup and optimisation, local SEO, website maintenance and ongoing online presence management.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every website is different, so pricing depends on the size, features and requirements of your project. After discussing what your business needs, I'll provide a clear quote before any work begins.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most standard business websites can be completed within a few weeks. More complex websites, such as e-commerce stores or websites requiring custom functionality, may take longer.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If your current website looks outdated, isn't mobile-friendly or simply isn't performing the way you'd like, I can redesign it with a more modern and professional approach.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website I build is designed to be responsive across desktop, tablet and mobile devices.",
  },
  {
    question: "Can I make changes to my website after it's launched?",
    answer:
      "Yes. Minor changes can be requested after launch, and I also offer ongoing website management for businesses that want regular updates, maintenance and support.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "Yes. I can help configure your domain, hosting and website deployment so everything is properly set up when your website goes live.",
  },
  {
    question: "What happens after my website is launched?",
    answer:
      "You can choose to manage the website independently or continue with an ongoing management package. This can include website updates, maintenance, Google Business Profile management and improvements to your online presence.",
  },
  {
    question: "How does payment work?",
    answer:
      "A deposit is required before work begins, with the remaining balance due before the website is launched. Full payment terms will be included in your project agreement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white/70 mb-4">
              <span>✦</span>
              <span>FAQ&apos;S</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-3">
              Questions?
            </h2>
            <p className="text-sm text-white/70">
              Everything you need to know about my websites, pricing, ongoing
              support and how the process works.
            </p>
          </Reveal>

          <Reveal delay={1} className="relative rounded-2xl overflow-hidden bg-neutral-900 card-border aspect-square">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiZW1UJX5AjOIqjW2mrd8pxars71eoGt5Cag3m3M2xME4mD8JrMSRKe2R-EQrdn66bjm8Vxt1P6meFhe_C4fbAe1odh0AP45FLsG8yfg8BJIeb2mosKR0jhESylg9-dC1X8sslpi5VkKXzPyObcSxqeHMbeVDfBWojbyq_EqmDhdqRBNGjwLrG4T_LJJ4TSxZ_kW-xMcsmVwAkpKr4Q0bH1AGBSjx1jTwpTXxCzRSa1sOUrW36MhKEfg"
              alt="Sliced grapefruit on stone block architecture in black and white"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover filter grayscale contrast-125"
            />
          </Reveal>

          <Reveal delay={2}>
            <div className="flex flex-wrap gap-2 text-xs text-white/90">
              <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                Web Design
              </span>
              <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                Online Presence
              </span>
              <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                Website Management
              </span>
            </div>
            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white hover:bg-neutral-800 transition"
            >
              Start a Project
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-3" data-purpose="accordion-wrapper">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal
                key={faq.question}
                delay={Math.min(index + 1, 4)}
                className={`rounded-xl border overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-neutral-800 bg-neutral-900/60"
                    : "border-neutral-800/80 bg-neutral-900/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-medium text-white hover:text-neutral-200"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-0 text-white/70" : "rotate-45 text-white/70"
                    }`}
                  >
                    ✕
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden px-5 text-xs text-white/70 font-light leading-relaxed pb-4">
                    {faq.answer}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}