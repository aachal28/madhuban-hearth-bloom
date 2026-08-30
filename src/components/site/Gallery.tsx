import { ArrowRight } from "lucide-react";
import { GALLERY, MAPS } from "@/lib/madhuban";

const SPAN: Record<string, string> = {
  tall: "md:row-span-2 h-[300px] md:h-full",
  wide: "md:col-span-2 h-[240px] md:h-[300px]",
  normal: "h-[220px] md:h-[300px]",
};

export function Gallery() {
  return (
    <section id="gallery" className="bg-beige/50 py-24 md:py-32">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-3 text-forest/70">
              <span className="h-px w-8 bg-gold" />
              Inside Madhuban
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.03] font-light text-forest">
              A look around <span className="italic">the table.</span>
            </h2>
          </div>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.16em] text-forest uppercase"
          >
            View Gallery
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={1.6} />
          </a>
        </div>

        <div className="reveal mt-14 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[repeat(3,300px)]">
          {GALLERY.map((g, i) => (
            <figure
              key={g.src + i}
              className={`zoom-frame rounded-[1.75rem] shadow-soft ${SPAN[g.span] ?? SPAN['normal']}`}
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
