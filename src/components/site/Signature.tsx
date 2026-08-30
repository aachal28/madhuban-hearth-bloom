import { ArrowRight } from "lucide-react";
import { SIGNATURE } from "@/lib/madhuban";

function Dish({
  dish,
  className,
  imgClass,
}: {
  dish: (typeof SIGNATURE)[number];
  className?: string;
  imgClass: string;
}) {
  return (
    <article className={`reveal group ${className ?? ""}`}>
      <div className="zoom-frame rounded-[2rem] shadow-soft md:rounded-[2.75rem]">
        <img src={dish.image} alt={dish.name} className={imgClass} loading="lazy" />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl text-forest md:text-[1.75rem]">{dish.name}</h3>
        <span className="font-display text-xl text-gold">{dish.price}</span>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{dish.desc}</p>
    </article>
  );
}

export function Signature() {
  const [a, b, c, d] = SIGNATURE;

  return (
    <section id="signature" className="grain py-24 md:py-36">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-3 text-forest/70">
              <span className="h-px w-8 bg-gold" />
              From Our Kitchen
            </p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.03] font-light text-forest">
              Dishes people <span className="italic">come back for.</span>
            </h2>
          </div>
          <a
            href="#menu"
            className="group hidden items-center gap-2 text-[0.8rem] font-medium tracking-[0.16em] text-forest uppercase md:inline-flex"
          >
            Explore Full Menu
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={1.6} />
          </a>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-14">
          {a && (
            <Dish
              dish={a}
              className="lg:row-span-2 lg:self-start"
              imgClass="h-[420px] w-full object-cover md:h-[680px]"
            />
          )}
          {b && <Dish dish={b} imgClass="h-[300px] w-full object-cover md:h-[330px]" />}
          {c && <Dish dish={c} imgClass="h-[300px] w-full object-cover md:h-[330px]" />}
        </div>

        {d && (
          <div className="mt-14">
            <Dish dish={d} imgClass="h-[320px] w-full object-cover md:h-[520px]" />
          </div>
        )}

        <a
          href="#menu"
          className="group mt-12 inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.16em] text-forest uppercase md:hidden"
        >
          Explore Full Menu
          <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
        </a>
      </div>
    </section>
  );
}
