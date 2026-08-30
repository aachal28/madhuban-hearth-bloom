import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/madhuban";

export function Reviews() {
  const [i, setI] = useState(0);
  const active = TESTIMONIALS[i];
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="reviews" className="grain relative overflow-hidden py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <span
            aria-hidden
            className="font-display text-[9rem] leading-[0.6] text-gold/35 md:text-[14rem]"
          >
            &ldquo;
          </span>

          <div className="reveal min-w-0">
            <blockquote
              key={i}
              className="animate-fade-in font-display text-[clamp(1.75rem,4.2vw,3.15rem)] leading-[1.18] font-light text-forest"
            >
              {active?.quote}
            </blockquote>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[0.78rem] tracking-[0.18em] text-ink-soft uppercase">
                — {active?.name} · {active?.meta}
              </p>

              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => go(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-forest/25 text-forest transition-colors hover:bg-forest hover:text-primary-foreground"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => go(1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-forest/25 text-forest transition-colors hover:bg-forest hover:text-primary-foreground"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="mt-10 flex gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Review ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-px transition-all duration-500 ${
                    idx === i ? "w-14 bg-forest" : "w-7 bg-forest/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
