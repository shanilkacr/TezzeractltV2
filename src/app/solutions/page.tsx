"use client";
import { useState } from "react";
import { CallToAction } from "@/components/CallToAction";
import { ClientTicker } from "@/components/ClientTicker";
import { SolutionsSection } from "@/components/SolutionsSection";


export default function SolutionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen">
      
      <SolutionsSection />
      <CallToAction />
    </div>
  );
}