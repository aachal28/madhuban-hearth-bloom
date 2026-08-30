import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, WHATSAPP, img } from "@/lib/madhuban";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 py-2 shadow-[0_10px_40px_-30px_oklch(0.24_0.08_152)] backdrop-blur-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src={img.logo}
              alt="Madhuban Pure Veg logo"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-gold/40"
              loading="eager"
            />
            <span className="min-w-0">
              <span
                className={`block truncate font-display text-xl leading-none font-semibold tracking-wide transition-colors ${
                  scrolled ? "text-forest" : "text-white"
                }`}
              >
                Madhuban
              </span>
              <span
                className={`eyebrow block text-[0.55rem] transition-colors ${
                  scrolled ? "text-ink-soft" : "text-white/70"
                }`}
              >
                Pure Veg
              </span>
            </span>
          </a>

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-7 lg:flex">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className={`nav-link text-[0.8rem] font-medium tracking-[0.12em] uppercase transition-colors ${
                    scrolled ? "text-ink hover:text-forest" : "text-white/85 hover:text-white"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className={`btn-base hidden px-5 py-3 text-[0.7rem] sm:inline-flex ${
                scrolled ? "btn-solid" : "btn-gold"
              }`}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
              Order Now
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors lg:hidden ${
                scrolled ? "border-forest/25 text-forest" : "border-white/40 text-white"
              }`}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen navigation */}
      <div
        className={`fixed inset-0 z-60 bg-forest-deep transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col py-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-cream">Madhuban</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 text-cream"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-1">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                className={`border-b border-cream/10 py-4 font-display text-4xl text-cream transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold mt-auto w-full"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
