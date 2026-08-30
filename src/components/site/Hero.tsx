import { useRef } from "react";
import { ArrowUpRight, Leaf, MapPin } from "lucide-react";
import { img } from "@/lib/madhuban";
import { useParallax } from "@/hooks/use-reveal";

const TRUST = ["100% Pure Veg", "Freshly Cooked", "Family Friendly"];

export function Hero() {
  const bg = useRef<HTMLImageElement>(null);
  useParallax(bg, 0.06);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-forest-deep">
      <img
        ref={bg}
        src={img.exterior}
        alt="Madhuban Pure Veg family restaurant lit up on a Nashik evening"
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.05_155/0.94)_0%,oklch(0.18_0.05_155/0.72)_44%,oklch(0.18_0.05_155/0.25)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,var(--cream),transparent)] opacity-20" />

      {/* decorative motifs */}
      <Leaf
        className="drift absolute top-[22%] right-[8%] hidden h-10 w-10 text-leaf/45 lg:block"
        strokeWidth={1}
      />
      <svg
        className="absolute top-[38%] right-[16%] hidden h-40 w-40 text-gold/30 lg:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M4 96C4 46 46 4 96 4" stroke="currentColor" strokeWidth="0.6" />
        <path d="M22 96C22 55 55 22 96 22" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="96" cy="4" r="2" fill="currentColor" />
      </svg>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pt-32 pb-16 md:justify-center md:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/70" />
            100% Pure Vegetarian
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,6.5rem)] leading-[0.92] font-light text-white">
            Good Food.
            <br />
            <span className="italic text-leaf">Pure Veg.</span>
            <br />
            Happy You.
          </h1>

          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-white/75">
            Freshly prepared vegetarian food, warm hospitality, and flavours the whole family can
            enjoy.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#menu" className="btn-base btn-gold">
              View Menu
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </a>
            <a href="#contact" className="btn-base btn-ghost-light">
              <MapPin className="h-4 w-4" strokeWidth={1.6} />
              Visit Us
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[0.72rem] tracking-[0.16em] text-white/70 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
