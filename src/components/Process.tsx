import Image from "next/image";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    icon: "📍",
    title: "Understand Your Business",
    body: "We start by understanding your business, goals, customers and the style you want for your website.",
  },
  {
    icon: "𝌆",
    title: "Design & Build",
    body: "I design and develop a modern, responsive website tailored to your business and refine it based on your feedback.",
  },
  {
    icon: "📦",
    title: "Launch & Grow",
    body: "Once everything is ready, your website goes live. From there, I can also help manage your website and strengthen your business's online presence.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <Reveal className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-neutral-900 card-border min-h-[500px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF5tDJQvJapq2hKX0-2z2n4WfyuYVcgCl1ZaM3FIW2ydk9UxY2Sdz5QwBxu6tGRWNWP0ummPfHWYCp6JxXKGm0TpxjyplvUI1eb8WZbNJCMxmqFOyx41gc8xe-lyMF6ciRefK-Nzl0mUDNFAxAlkAGYCbmhee2JzGFsNa8zOtKl8Xvii9dmUn7Bix9GtQQOQy65MZemH54XjM32Djt263LvYTDeR_fu5_--0t0io1FVUJ9dgNxBr0OyA"
            alt="Designer sketching blueprint and brand marks with drafting pencil at desk"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover filter grayscale contrast-125"
          />
        </Reveal>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white/70 mb-4">
              <span>✦</span>
              <span>How i work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-3">
              From Idea To Online
            </h2>
            <p className="text-sm text-white/70 font-normal max-w-md">
              A simple, streamlined process to take your business from an idea
              to a modern online presence.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-neutral-200 transition"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white/90 text-xs sm:text-sm hover:bg-neutral-800 transition"
              >
                View My Work
              </a>
            </div>
          </Reveal>

          <div className="space-y-4 pt-4">
            {STEPS.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index + 1}
                className="p-6 rounded-2xl bg-neutral-900/60 card-border hover:bg-neutral-900/90 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-white/70 text-base">{step.icon}</span>
                    <h4 className="text-base sm:text-lg font-medium text-white">
                      {step.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-white/50">
                    {index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-3 leading-relaxed pl-7">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}