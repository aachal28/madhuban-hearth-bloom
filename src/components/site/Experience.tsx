import { useRef } from "react";
import { img } from "@/lib/madhuban";
import { useParallax } from "@/hooks/use-reveal";

const MOMENTS = ["Family Dinners", "Celebrations", "Casual Meals", "Gatherings"];

export function Experience() {
  const bg = useRef<HTMLImageElement>(null);
  useParallax(bg, 0.1);

  return (
    <section className="relative overflow-hidden bg-forest-deep">
      <img
        ref={bg}
        src={img.patio}
        alt="Evening dining at Madhuban Pure Veg"
        className="absolute inset-0 h-full w-full scale-115 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-deep/72" />

      <div className="shell relative py-28 text-center md:py-44">
        <h2 className="reveal mx-auto max-w-3xl font-display text-[clamp(2.4rem,6vw,4.75rem)] leading-[1.04] font-light text-cream">
          More than a meal.
          <br />
          <span className="italic text-leaf">It's time well spent.</span>
        </h2>

        <ul className="reveal mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-4">
          {MOMENTS.map((m) => (
            <li key={m} className="text-[0.72rem] tracking-[0.22em] text-cream/70 uppercase">
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
