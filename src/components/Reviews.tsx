import Image from "next/image";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  {
    name: "Carter",
    role: "Founder at UrbanFit",
    quote:
      "Jamie's work turns into a perfect design with purpose. They crafted a website that fit the business perfectly while making us stand out online.",
  },
  {
    name: "Sofia Toms",
    role: "Founder at Greenlit Studios",
    portrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKpvACWM6z4yuX-B99uiO5TP4CCwltmpePlJnCYA_hHZNbW5IAbJDxdfMOs4067wShc89arFtqV4gxmAasXn3-5bNYFDozFgLnSIL_jYa-f3pfOvjln9YW4t96eBNyMDLIuhmDRkfJBn4Dgq2_muCrF9-9N7Umn0xmQXEywVtwg8ol8nVlgxMuEhI9LwDOuRf0L6QaqDT5lLy5_7Cgs1PZydCnvqYMYYrnuaDxyPORpKyhU0k9j7bNyA",
    quote:
      "Jamie's websites speak for themselves — bold, strategic, and impactful. They took the time to understand our brand, delivering a site that resonated with our target audience and boosted our online visibility.",
  },
  {
    name: "Richards Johnson",
    role: "Creative Director & Lead Designer",
    portrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvm6rj3glXJuzFMQBM0Sw1tFaBaoiOSLFNPvf8vuVNn8F3tO15_yZ261_3ESP7HDSLElP8fpzBj346Dns3LTiyvEvLRN4uwtgqFunwXn_pEBZpaFB-pVsB5_KQLA9sH3nsqS9WhYyT-OAs5kjISf2RsQqdgyxgMM_SdzLFkS8td0jMkZA6dlI8kJPAGMCmn7Aol6lgaBdEf_JTuUwflXSUtqOnfPPIFtVuyP-z-UU5rHJAnlTHYwUwqA",
    quote:
      "Working with Jamie was a seamless experience. Their ability to merge creativity with strategic insight led to a website that not only looked stunning but also drove meaningful engagement. Highly recommended!",
  },
];

const METRICS = [
  { value: "100%", label: "Mobile Responsive" },
  { value: "1 On 1", label: "Direct Communication" },
  { value: "Ongoing", label: "Website Support" },
];

export default function Reviews() {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        <Reveal className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-neutral-900 card-border h-[260px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ARf6zyrSXXIRTFXQrY9G5-jIvj_UorUPfVGBTeghX6Gz3C6ARHVvMjWSxWWu8ClrGbLw3Ub16ZaAgC-P5__UXvOxyb_bI3El5ZkGmM3RBfo8uKtyUaKURVlfZOKDwtWQPyp70poPAr1AXQkx7enc4WyefExEWSFuhxwP3kT7ap9j08duc8jfji71Maeqy38V9OA17dHLYTmF3yVZ1E1TOrLq8hK2dn7E8QR6iL5adcK1Yq_jofJhiQ"
            alt="Design team working on branding projects in a modern studio workspace"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover filter grayscale contrast-125"
          />
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-sm border border-neutral-800 text-[11px] text-white">
            <span>❖ Portfolite</span>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 space-y-4" delay={1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
            <span>✦</span>
            <span>Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
            What Clients Say
          </h2>
          <p className="text-sm text-neutral-400">
            Real feedback from businesses I&apos;ve worked with to build a
            stronger, more professional online presence.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {REVIEWS.map((review, index) => (
          <Reveal
            key={review.name}
            delay={index + 1}
            className="p-6 rounded-2xl bg-neutral-900/50 card-border flex flex-col justify-between space-y-6"
          >
            <div>
              {review.portrait ? (
                <div className="flex items-center gap-3 mb-1">
                  <Image
                    src={review.portrait}
                    alt={`${review.name} portrait`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover filter grayscale border border-neutral-700"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {review.name}
                    </h4>
                    <p className="text-xs text-neutral-500">{review.role}</p>
                  </div>
                </div>
              ) : (
                <h4 className="text-sm font-semibold text-white mb-4">
                  {review.name}
                  <span className="block text-xs text-neutral-500 mt-0.5">
                    {review.role}
                  </span>
                </h4>
              )}
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-xs pt-2">
              {Array.from({ length: 5 }).map((_, star) => (
                <span key={star}>★</span>
              ))}
              <span className="text-neutral-400 ml-2 font-mono text-xs">
                5.0
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-center border-t border-neutral-900 mt-16">
        {METRICS.map((metric) => (
          <div key={metric.label} className="space-y-1">
            <h3 className="text-4xl sm:text-5xl font-semibold text-white">
              {metric.value}
            </h3>
            <p className="text-xs text-neutral-400">{metric.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}