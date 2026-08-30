import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { ADDRESS, NAV, PHONE, PHONE_DISPLAY, WHATSAPP, img } from "@/lib/madhuban";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/70">
      <div className="shell grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={img.logo}
              alt="Madhuban Pure Veg logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
              loading="lazy"
            />
            <span>
              <span className="block font-display text-2xl leading-none text-cream">Madhuban</span>
              <span className="eyebrow text-[0.55rem] text-leaf">Pure Veg</span>
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Pure vegetarian food made with care, served with warmth.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: MessageCircle, href: WHATSAPP, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="nav-link transition-colors hover:text-cream">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Opening Hours</h3>
          <ul className="mt-6 space-y-3 text-sm">
            <li>Monday – Friday · 11:00 AM – 11:30 PM</li>
            <li>Saturday – Sunday · 11:00 AM – 11:30 PM</li>
            <li className="text-cream/50">Party hall bookings on request</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Visit Us</h3>
          <ul className="mt-6 space-y-3 text-sm">
            <li>{ADDRESS}</li>
            <li>
              <a href={`tel:${PHONE}`} className="nav-link hover:text-cream">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="nav-link hover:text-cream">
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-cream/45">
          <p>© 2025 Madhuban Pure Veg. All Rights Reserved.</p>
          <p>Tasty, good and healthy.</p>
        </div>
      </div>
    </footer>
  );
}
