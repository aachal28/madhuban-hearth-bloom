import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { MENU, WHATSAPP } from "@/lib/madhuban";

export function MenuPreview() {
  const [active, setActive] = useState(MENU[0]?.id ?? "starters");
  const current = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <section id="menu" className="grain bg-cream py-24 md:py-36">
      <div className="shell">
        <div className="reveal max-w-xl">
          <p className="eyebrow flex items-center gap-3 text-forest/70">
            <span className="h-px w-8 bg-gold" />
            The Menu
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.03] font-light text-forest">
            What's on the <span className="italic">table?</span>
          </h2>
        </div>

        <div className="no-scrollbar reveal mt-12 -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.72rem] tracking-[0.14em] uppercase transition-all duration-400 ${
                active === cat.id
                  ? "border-forest bg-forest text-primary-foreground"
                  : "border-forest/20 text-ink-soft hover:border-forest/50 hover:text-forest"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div key={active} className="mt-12 grid gap-x-16 md:grid-cols-2">
          {current?.items.map((item, i) => (
            <div
              key={item.name}
              className="animate-fade-in border-b border-forest/12 py-6"
              style={{ animationDelay: `${i * 70}ms`, animationFillMode: "backwards" }}
            >
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-[1.6rem] leading-tight text-forest">{item.name}</h3>
                <span className="mx-2 hidden h-px flex-1 bg-forest/15 sm:block" />
                <span className="ml-auto font-display text-xl text-gold sm:ml-0">{item.price}</span>
              </div>
              <p className="mt-1.5 max-w-sm text-sm text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="group mt-12 inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.16em] text-forest uppercase"
        >
          View Complete Menu
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={1.6} />
        </a>
      </div>
    </section>
  );
}
