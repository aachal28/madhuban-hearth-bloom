import { Clock, MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { ADDRESS, MAPS, PHONE, PHONE_DISPLAY, WHATSAPP, img } from "@/lib/madhuban";

export function Visit() {
  return (
    <section id="contact" className="grain py-24 md:py-36">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow flex items-center gap-3 text-forest/70">
            <span className="h-px w-8 bg-gold" />
            Visit Madhuban
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.03] font-light text-forest">
            Your table is <span className="italic">waiting.</span>
          </h2>

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
              <div className="min-w-0">
                <dt className="text-[0.68rem] tracking-[0.2em] text-ink-soft uppercase">Address</dt>
                <dd className="mt-1 text-forest">{ADDRESS}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
              <div className="min-w-0">
                <dt className="text-[0.68rem] tracking-[0.2em] text-ink-soft uppercase">Opening Hours</dt>
                <dd className="mt-1 text-forest">Monday – Sunday · 11:00 AM – 11:30 PM</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
              <div className="min-w-0">
                <dt className="text-[0.68rem] tracking-[0.2em] text-ink-soft uppercase">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${PHONE}`} className="nav-link text-forest">
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={MAPS} target="_blank" rel="noreferrer" className="btn-base btn-solid">
              <Navigation className="h-4 w-4" strokeWidth={1.6} />
              Get Directions
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-base btn-outline-dark">
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="zoom-frame block rounded-[2.5rem] shadow-lift md:rounded-[3.5rem]"
          >
            <img
              src={img.signage}
              alt="Entrance to Madhuban Pure Veg"
              className="h-[400px] w-full object-cover md:h-[600px]"
              loading="lazy"
            />
          </a>
          <div className="absolute right-5 bottom-5 left-5 rounded-3xl bg-cream/95 p-5 shadow-soft backdrop-blur md:right-auto md:-left-10 md:max-w-xs">
            <p className="eyebrow text-gold">Now Serving</p>
            <p className="mt-2 font-display text-2xl leading-tight text-forest">
              Family restaurant, open-air patio & private party hall.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
