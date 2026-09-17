import Image from "next/image";
import Reveal from "@/components/Reveal";

const CATEGORY_TAGS = [
  "Web Design",
  "Web Development",
  "Google Business Profile",
  "Local SEO",
  "Website Management",
];

const SERVICES = [
  {
    icon: "💻",
    title: "Website Design & Development",
    body: "Modern, responsive websites built around your business, designed to look professional and provide a seamless experience across desktop, tablet and mobile.",
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    body: "Setup and optimisation of your Google Business Profile to strengthen your presence on Google Search and Maps and help local customers discover your business.",
  },
  {
    icon: "🔎",
    title: "Local SEO",
    body: "Improving your website and local presence to help your business appear for relevant searches and attract customers actively looking for your services.",
  },
  {
    icon: "⚙️",
    title: "Website Management",
    body: "Ongoing website updates, content changes, maintenance and support, so you can focus on running your business while I take care of your website.",
  },
];

const TICKER_PILLS = [
  "✦ Responsive Design",
  "✦ Custom Websites",
  "✦ Google Maps",
  "✦ SEO",
  "✦ Website Hosting",
  "✦ Maintenance",
  "✦ Performance",
  "✦ Online Presence",
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <Reveal className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white/70">
            <span>✦</span>
            <span>What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Services
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-lg">
            Helping businesses build a professional online presence with modern
            websites, better local visibility, and ongoing digital support.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-white/90 pt-2">
            {CATEGORY_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-neutral-200 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-white/90 text-xs sm:text-sm hover:bg-neutral-800 transition"
            >
              View My Work
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-neutral-900 card-border h-[260px] sm:h-[280px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFFu9tN68eZASQT3yyC-ULXo7i5J27DD0ui0cvAGA1wB4dOrge3uucA_-AQaxkYJ3k8krzdbrDxMkCAo5iDBvc1vpPBif1YVyZIDLZVYvffbBr-_hxaCTrjcf-kH5uCffMjlGb70bmWr7TC_M9B-O7D5vmDsDm1BVAtlwU15YT5ZHeGwQSAjlMMiUa6BHpMXb1peOX8O5HLI-oRTfywfua2VszAhVXEoVlDBzlRQcZjDtr5DWlVtZWlQ"
            alt="Amber pump bottles with organic formulation on black background"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover filter grayscale contrast-125"
          />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {SERVICES.map((service, index) => (
          <Reveal
            key={service.title}
            delay={(index % 2) + 1}
            className="p-6 rounded-2xl bg-neutral-900/50 card-border hover:bg-neutral-900 transition"
          >
            <div className="flex items-center gap-2.5 mb-3 text-white">
              <span className="text-sm">{service.icon}</span>
              <h3 className="text-base font-medium">{service.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              {service.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="ticker-mask overflow-hidden pt-12 pb-2 group/ticker" delay={2}>
        <div className="flex items-center gap-3 whitespace-nowrap text-xs text-white/70 w-max animate-ticker">
          {[...TICKER_PILLS, ...TICKER_PILLS].map((pill, index) => (
            <span
              key={`${pill}-${index}`}
              className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 inline-flex items-center whitespace-nowrap"
            >
              {pill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}