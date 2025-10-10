"use client";

import { useState } from "react";
import { 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle, 
  Navbar, 
  NavbarButton, 
  NavbarLogo, 
  NavBody, 
  NavItems 
} from "@/components/Navbar";

import { ShimmerButton } from "../ShimmerButton";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Solutions", link: "/solutions" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <ShimmerButton  
        
        >Get Started</ShimmerButton>
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
              className="block px-4 py-2 text-neutral-300 hover:bg-neutral-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* CTA button in mobile menu */}
          <div className="pt-4 border-t border-gray-200 dark:border-neutral-700">
            <NavbarButton variant="primary" className="w-full">
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}