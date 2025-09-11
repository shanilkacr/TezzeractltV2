"use client";
import { ContactSection } from "@/components/ContactSection";
import { useState } from "react";


export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen">
            <ContactSection />

    </div>
  );
}