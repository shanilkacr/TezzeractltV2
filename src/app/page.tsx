"use client";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CallToAction } from "@/components/CallToAction";
import { CallToActioncopy } from "@/components/CallToActioncopy";
import { GlowingEffectDemo } from "@/components/Business";
import { IconBrandReact, IconGitBranch, IconRocket, IconWorld } from "@tabler/icons-react";
import { useState } from "react";



export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="bg-[#121212]">
  
      <Hero />
      <ProductShowcase />
      <LogoTicker />
      <Features />
      <GlowingEffectDemo />
      <CallToAction />
      </div>
    </>
  );
}