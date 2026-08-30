import { MessageCircle } from "lucide-react";
import { WHATSAPP, img } from "@/lib/madhuban";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={img.platter}
        alt="A shared vegetarian platter at Madhuban"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.18_0.05_155/0.55),oklch(0.16_0.05_155/0.85))]" />

      <div className="shell relative flex flex-col items-center py-28 text-center md:py-40">
        <h2 className="reveal max-w-3xl font-display text-[clamp(2.4rem,6.2vw,5rem)] leading-[1.05] font-light text-cream">
          Good food tastes better
          <br />
          <span className="italic text-leaf">when shared.</span>
        </h2>
        <p className="reveal mt-6 max-w-md text-cream/70">
          Bring your family, bring your friends, come hungry.
        </p>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          <a href="#menu" className="btn-base btn-gold">
            View Menu
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-base btn-ghost-light">
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
