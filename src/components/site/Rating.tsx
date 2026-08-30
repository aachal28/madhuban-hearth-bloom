import { Star } from "lucide-react";

const STATS = [
  { k: "100%", v: "Vegetarian" },
  { k: "Daily", v: "Freshly Cooked" },
  { k: "Family", v: "Restaurant & Party Hall" },
];

export function Rating() {
  return (
    <section className="bg-beige/70 py-20 md:py-28">
      <div className="shell grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-24">
        <div className="reveal">
          <div className="flex items-end gap-3">
            <span className="font-display text-[clamp(4rem,12vw,7rem)] leading-none font-light text-forest">
              4.8
            </span>
            <span className="pb-4 font-display text-3xl text-ink-soft">/ 5</span>
          </div>
          <div className="mt-3 flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
            ))}
          </div>
          <p className="mt-3 text-[0.72rem] tracking-[0.2em] text-ink-soft uppercase">
            Rated by our guests
          </p>
        </div>

        <div className="reveal grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.k} className="border-l border-forest/15 pl-5">
              <p className="font-display text-3xl text-forest">{s.k}</p>
              <p className="mt-1 text-[0.72rem] tracking-[0.16em] text-ink-soft uppercase">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
