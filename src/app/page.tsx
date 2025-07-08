import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { CallToActioncopy } from "@/components/CallToActioncopy";

import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="bg-[#242424]">
      <Navbar />
      <Hero />
      <ProductShowcase />

      <LogoTicker />
      <Features />
      <FAQs />
      <CallToActioncopy />
      <Footer />
      </div>
    </>
  );
}
