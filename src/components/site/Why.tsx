import { Leaf, Flame, Users, Sofa } from "lucide-react";

const ITEMS = [
  { n: "01", icon: Leaf, title: "100% Pure Vegetarian", body: "A strictly vegetarian kitchen — no exceptions, ever." },
  { n: "02", icon: Flame, title: "Freshly Prepared", body: "Cooked to order through the day, never pre-plated." },
  { n: "03", icon: Users, title: "Family Friendly", body: "Portions, prices and seating built around families." },
  { n: "04", icon: Sofa, title: "Comfortable Ambience", body: "Indoor dining, open-air patio and a private party hall." },
];

export function Why() {
  return (
    <section className="bg-beige/60 py-20 md:py-28">
      <div className="shell">
        <div className="hairline" />
        <div className="grid gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ITEMS.map((item, i) => (
            <div
              key={item.n}
              className="reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="font-display text-2xl text-gold">{item.n}</span>
              <item.icon className="mt-6 h-6 w-6 text-forest" strokeWidth={1.1} />
              <h3 className="mt-5 font-display text-2xl leading-tight text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
