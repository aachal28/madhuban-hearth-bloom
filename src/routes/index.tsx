import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { Why } from "@/components/site/Why";
import { Signature } from "@/components/site/Signature";
import { Experience } from "@/components/site/Experience";
import { MenuPreview } from "@/components/site/MenuPreview";
import { Rating } from "@/components/site/Rating";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Visit } from "@/components/site/Visit";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Madhuban Pure Veg — Family Vegetarian Restaurant & Party Hall";
const DESC =
  "Freshly prepared pure vegetarian Indian and Indo-Chinese food, warm hospitality and a family restaurant, open-air patio and private party hall at Madhuban Pure Veg.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Why />
        <Signature />
        <Experience />
        <MenuPreview />
        <Rating />
        <Reviews />
        <Gallery />
        <Visit />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
