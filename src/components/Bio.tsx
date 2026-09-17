import Image from "next/image";
import Reveal from "@/components/Reveal";

const SKILLS = [
  "Web Design",
  "Web Development",
  "Responsive Design",
  "UI/UX",
  "Google Business Profile",
  "SEO",
  "Cloud Flare",
];

const TIMELINE = [
  {
    role: "Website Design",
    detail: "Modern, responsive business websites",
    status: "Available",
  },
  {
    role: "Online Presence",
    detail: "Google Business Profile & local visibility",
    status: "Available",
  },
  {
    role: "Website Management",
    detail: "Updates, maintenance & ongoing support",
    status: "Monthly",
  },
];

const RECENT_WORKS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXRTZystEJq3pShjL1a8n0qbuTB4SmZs5fw4s_LCf92vwRHmYD26WIGrJ4kRSILrLbvCb9KcnFVZBuPsCW6wnbU80sqS00IamNOm_nJuJBe1XdqOc5oCYkwZS_ONS5L7G4JQbGvaOSZR-jeHlkSaxtCjHOxRKgkFvahWZOW0iURkjAju4Y3skEswkceflRhapySdR90UdXW1b5OCklhNlAdyKqziVhX1TwkhwwXEFsqOH50NYDD-2qvA",
    alt: "Packaging pouch",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhZTOY6ZnTFe2U2J9FRsWX_1U-f9XCYBt5J_y8dhkZTKuPU8w6CBi-EQ4-sBQTyfAEf4N1CeCnB0fZf76VkiX7CYJiflppBuz4P0D7hmp3uDjTXtKcSaD1XQyEh0RZuEXff8eTGx-l3SvDRW7uNMsWAk_YtgjpsQsWG0yBFJ27NgMWJ0DBf8Iz4jbHwWqp8uAjJzd0VI-1Ej28KhUbK7jPSTNRNvMkwduaPFbEsyxgowC932yfcB7wAg",
    alt: "Amber dispenser cosmetics bottle",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZEaj5g_TZrwawBc6lfj4xfNAFM1Myb7H0yQOdQrq5yV09ddduFZkPpxqwcM7s4mTkpTekn7E8ICtpI_9bwjTJzdpj0jYdW_CqkDfXIkAdxeJ_GD6-349X__h0BB4FRCnqOtYAGAZWGlkEAq7WBUTD2VD3jQHsv1QZijI1EQoYh__J5jHf6ODGkMrifAegBlGgoCrYRoSXOIU_udmZ-yLFYMv5TOE5b1ydnDr58R8upWNBtG0qZ6j6Gg",
    alt: "Canvas tote bag with typographic brand print",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUyP2DY1Y5dZB0fLH5QYekLG6TmcG12BS7BA5mBQhZICERt8lhkTFT2zsqiZRlPGM1eW4MlxgsAekFNo5bwhQKJcGzkTyAWSiBa1ThWr2XnIP4KccvBJn62jUaOil2tPBL3JM9XAqRr8B_YQQ56Z008rsuOGzNbazc_TeY7E-a5jalR784iB-zkZctuT1sBPeVLVtm3W03plFmwHEd67yYB0HLOsoRUlpH45lNd_n5PFdlyUhqdMkhw",
    alt: "Cosmetic cream tube held upright",
  },
];

export default function Bio() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
              Meet Jamie
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-xl">
              I&apos;m Jamie, a web designer focused on helping businesses build
              a modern and professional online presence. I create clean,
              responsive websites designed around each business, while also
              helping clients improve how they&apos;re found and presented
              online.
            </p>
          </Reveal>

          <Reveal delay={1} className="flex flex-wrap gap-2 text-xs text-white/90">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800"
              >
                {skill}
              </span>
            ))}
          </Reveal>

          <Reveal
            delay={2}
            className="pt-6 border-t border-neutral-800 divide-y divide-neutral-800/80 text-xs sm:text-sm"
          >
            {TIMELINE.map((item) => (
              <div
                key={item.role}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-3.5 items-center"
              >
                <span className="sm:col-span-4 text-white font-medium">
                  {item.role}
                </span>
                <span className="sm:col-span-6 text-white/70 font-light">
                  {item.detail}
                </span>
                <span className="sm:col-span-2 sm:text-right text-white/50 font-mono text-xs">
                  {item.status}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delay={2}>
          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 card-border aspect-[4/5] shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArvFOKQKiLONJpJVyVX1-2CuigQSsYfVPqolQ1wNCotii7rMnPzdYAD9bwNWpvCD3mRVXswCyMHlvaWsNXJlOkU5ed2GhAzB4anFwgRXKMPdzpvJiNhKMUeWSzNRsH8lWuNpMOdK8OwckeQcrMV-QzsnF7JBMQ9y2nNoKywcgzzfY_FS3iIdN1Ls0jJpvX80HOYsFuNjJpx_FsaJKtBNnMWJKJgKfq7mgkBT1mFHHTmYDLPwFSCVu8y7ueCveTh4jp5rjMWb3I5h9Gi4Y"
              alt="Portrait of Jamie, web designer"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover filter grayscale contrast-125"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 pt-8">
        <Reveal className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-medium tracking-wide text-white/90 flex items-center gap-2">
            Recent Works <span className="text-xs text-white/50">⊕</span>
          </h3>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous works"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-white/70 hover:text-white hover:border-neutral-700 transition text-xs"
            >
              ‹
            </button>
            <button
              aria-label="Next works"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-white/70 hover:text-white hover:border-neutral-700 transition text-xs"
            >
              ›
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RECENT_WORKS.map((work, index) => (
            <Reveal
              key={work.src}
              delay={index + 1}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 card-border p-3 flex flex-col justify-end"
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="absolute inset-0 object-cover filter grayscale group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="relative z-10 inline-flex items-center justify-center text-[10px] text-white/90 bg-black/70 px-2 py-1 rounded-full border border-neutral-800">
                View Casestudy ↗
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}