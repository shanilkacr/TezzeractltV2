"use client";
import { AboutSection } from "@/components/AboutSection";
import { useState } from "react";
import { CallToAction } from "@/components/CallToAction";
import { ClientTicker } from "@/components/ClientTicker";



export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen">
   
      
  
      
      <AboutSection />
      <ClientTicker />

      <CallToAction />

    </div>
  );
}