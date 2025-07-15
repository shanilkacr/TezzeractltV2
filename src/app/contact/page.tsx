"use client";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/#features" },
  { name: "About Us", link: "/#AboutUs" },
  { name: "Contact", link: "/contact" }
];

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton variant="primary">Get Started</NavbarButton>
        </NavBody>
        
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          
          <MobileNavMenu 
            isOpen={mobileMenuOpen} 
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-neutral-700">
              <NavbarButton variant="primary" className="w-full">
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
    
      
      <ContactSection />
      <Footer />
    </div>
  );
}