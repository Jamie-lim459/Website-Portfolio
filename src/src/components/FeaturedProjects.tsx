import Image from "next/image";
import Reveal from "@/components/Reveal";

type Project = {
  src: string;
  alt: string;
  heightClass: string;
};

const PROJECTS: Project[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAndog2WBsdKJjTQyv27PtqA4JFu97GyfjBATxiFEwADx26RzfFW3cLAQRyhzKx-QFFWASGZ-r3-eEEbUocE6G6U_8GAa2THojmmCCFQAlkprPextESi5-YIKdSRn6bLnyZ-fegJ8Vqd7K07-qu9Mn2TFCt2l_4pZBDNJdPhlPtDdHjdK36FoGNbepDu318qKJn2I34qCxWwR9xEzpo0hWaANzj3SU00CISYb5aFDtuGZf_NSlHG3Ctsg",
    alt: "Tactile audio gadget hardware casing",
    heightClass: "min-h-[360px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0BkTN1is7LJlscvv0SKAtpkIks_3HxyP6lrUEv6a_PpxOGFirzmmBGhVG4OkmRe3tnx6d7Zkdh3KVTgRh8yZq6S76Z0AbzeH49cUpPwAzFCiB-Sn1-JznlObdPW4VC5xEaR__dAOPm8VTk5cK_jSs93AL7tibyM2WLA8J4-bIncUZwCJlbaqgb_y74JDepI1rnNz7fabMqbBbEHKHo7hPzA8UV0S_yryRvnRzjHHxdXyFRSYtbhNEQ",
    alt: "Woman wearing minimal over-ear headphones black and white portrait",
    heightClass: "min-h-[420px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWBDrsCnhUtcnC_M2OVDAhA4JxFTrNb1P4H9nZpN94cVTWzsEiMRUR1AdI9905pAORQIpNNrGR8gwAcNUaFsSnkdN25M-vQ5bQTQycKhhbT7wEP8XOa8SWoO2bgAfEY9JrRURUeCfytz_DmCLbYMVUctomxk4YrCrxFeQwYT6wrrMFobceP-3mf8-dIoeiAlrNFsGD3mlnZfQsU44bUIfzZoe6tEubBLNSC-t0bTxGDeWv9VCtjS9LJA",
    alt: "Hand holding clean minimal cosmetic tube against plain background",
    heightClass: "min-h-[360px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3HGGiWElBV1kTPWKJJ7ufvqxPGfgDBCZPOWarPcDYKxSjzUP5cWHDnHq_7Cld0NTfI-h7br0OauGT59pI6yf4dLcwkpYyjDr52YNDcKV2RlcXsqA15PnV5sbyUjN6vEbLWLRqeZlEeLto5-63iTOihxbNfirXlcwiUdmhw5yVOgmmj5H0zuXbBRBJZuPADtbOPv7Iv03w8N-dgYIwARiC-mIkH1S0NZB_tcs3gFuDfXjaHjiAnePy3A",
    alt: "Cosmetic flacon positioned on raw rock formation",
    heightClass: "min-h-[380px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIIrPLOHvZxnbTIbCFIBzjbNf0uADDM-6VXlIWmDOXCkPxzINzzxeFW5uTgrunM4RqJK0SM4g_czIzCPZOK7JhGe1HS78eHQVJnUqHaeEnvxXIb8dFNt-bj2mN_l5UTV94Td6tFpOYptYrLfQA_3ZPkX7BZXl-pK2Gaor-qWh4GuYbe57ht-zXkzOe2TZnf7gQQqSThL8laIxQZnKuh8XaiesZJ5GQeV0wz1QXZHOXrt4ivm5_0zm6Pw",
    alt: "Sculptural sliced citrus fruit resting on minimalist stone plinth",
    heightClass: "min-h-[380px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAbDZNdWbUckYhjz0GLs8A30POUuKncXRscOeeyK8N3CWKSIJVGD7UJaRh9ej3wfPb8yvRRzL7-YKC2T6u_J4-smj91KlKrnNLWmtsT4nMXkDnPrq-ShVvKN24yuYqD2IEGxt7ERZMFcSywh15UwodqnvW6N7V9h13z_lUw8OfFtza15bmZW1ioQbmzmctV8pYg9jln1ZBuX2P2JcYqlT40LlQubBssNVa8WHh9BJdvHT6pil9V7aFLw",
    alt: "Minimal skincare dispenser set upon round pedestal bathed in soft daylight",
    heightClass: "min-h-[380px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAUSXvs2nmyMZ4SL5i1niD-z7-LYM5OHA6u6f2LkfIKV66Rl81qsjD25tc5nlUV5GV6cerLzJNPR27M2pmXNfPfufWQtIi4nLVp6g1QZZ6WjPeq15bzpawHiXb4M1DP5Q_WA5qoBmVw4Qdr4erwsZDYi1D8cSraiXDifh5jeY4kSK_fzol-_wkjJwY_jP5J5-FJqlmI3x_HHjxyq-mqAWdfBC2-aDvcP6tcmU64pruiiKwUOMNIww07A",
    alt: "Paper packaging bag standing against a rustic wall with tropical foliage shadows",
    heightClass: "min-h-[380px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr59bWmFbK2fPlheerF54Jms3attP_y9UD6fhQRKNElezkHh7KZGGw5-OlqP_laTasOYiXZtrXaaDXwBQ0TjHGwFmpXJDXrFdolKJ1ofndwSwPQmVZpgohkiot5bSetpnf6sm3gXaQ6eoIiZt-41XwkOImriPDYYXR3gpQa1f4GTSsb8mUtVzUaj-KlEzlDXC-2qPYelJ9LQ6V7YF5Bf239pxZMqjw62NKie1gUgToLoRP_e7caV9SJg",
    alt: "Hands holding white cosmetic treatment bottle",
    heightClass: "min-h-[380px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvOsejvYgQR4j6zdMBKbqKUSDdE9YQA_FDhIeekyOEf5o4e2i5amehlsHN90J34f6cFYLCDjGtzi2yuDnfbYLgy0UseVOk0rZMw4FTD_rcwXRt_nOmUflGwOO3b-YbM5F0VtN_ktcrEkBagNYtIwgiO2lFtapf2tkgSQcxUGVNGIMqOqa540acKzYCT43eAumtwoG2y6yTrhAtjnvNALzB4W26qaA1YRE8wrl8yNvD6uUKLVvB-iuuvg",
    alt: "Minimalist black foil pouch packaging mock-up on solid backdrop",
    heightClass: "min-h-[380px]",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      delay={(index % 3) + 1}
      className={`group relative rounded-2xl overflow-hidden bg-neutral-900 card-border card-border-hover transition-all duration-300 ${project.heightClass} flex flex-col justify-end p-5`}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="absolute inset-0 object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="relative z-10 flex justify-center">
        <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 text-xs text-white hover:bg-white hover:text-black transition-all">
          View Casestudy <span>↗</span>
        </button>
      </div>
    </Reveal>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.src} project={project} index={index} />
        ))}
      </div>

      <Reveal className="mt-12 flex items-center justify-center gap-3" delay={2}>
        <button className="px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white/90 hover:text-white hover:bg-neutral-800 transition">
          All Projects
        </button>
        <button className="px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-neutral-200 transition">
          Book a Free Call
        </button>
      </Reveal>
    </section>
  );
}