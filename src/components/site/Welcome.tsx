import { ArrowRight } from "lucide-react";
import { img } from "@/lib/madhuban";

export function Welcome() {
  return (
    <section id="about" className="grain relative overflow-hidden py-24 md:py-36">
      <svg
        className="pointer-events-none absolute -top-10 -left-24 h-[420px] w-[420px] text-forest/8"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 190C60 160 20 130 20 90a80 80 0 01160 0c0 40-40 70-80 100z"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path d="M100 190V40M100 90l34-30M100 120L62 92" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      <div className="shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow flex items-center gap-3 text-forest/70">
            <span className="h-px w-8 bg-gold" />
            Welcome to Madhuban
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.03] font-light text-forest">
            Vegetarian food made for <span className="italic">good moments.</span>
          </h2>
          <p className="mt-7 max-w-lg leading-relaxed text-ink-soft">
            Madhuban began with a simple idea — that pure vegetarian food should never feel like a
            compromise. Our kitchen cooks everything fresh through the day, from tandoor classics
            and slow-simmered gravies to the Indo-Chinese plates our regulars order on repeat.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
            Whether it's a weeknight dinner, a birthday in the party hall or a long evening on the
            open-air patio, you'll be looked after like family.
          </p>
          <a
            href="#signature"
            className="group mt-9 inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.16em] text-forest uppercase"
          >
            Our Story
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
              strokeWidth={1.6}
            />
          </a>
        </div>

        <div className="reveal relative">
          <div className="zoom-frame overflow-hidden rounded-[2.5rem] shadow-lift md:rounded-[3.5rem]">
            <img
              src={img.patio}
              alt="Open-air patio seating at Madhuban Pure Veg"
              className="h-[380px] w-full object-cover md:h-[560px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -left-4 h-36 w-36 overflow-hidden rounded-full border-[6px] border-cream shadow-soft md:-left-14 md:h-52 md:w-52">
            <img
              src={img.signage}
              alt="Madhuban entrance signage"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-6 -right-2 hidden h-24 w-24 rounded-full border border-gold/40 md:block" />
        </div>
      </div>
    </section>
  );
}
