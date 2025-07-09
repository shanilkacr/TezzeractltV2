"use client";
import { Banner } from "@/components/Banner";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Timeline } from "@/components/Timeline";
import { CallToAction } from "@/components/CallToAction";
import { CallToActioncopy } from "@/components/CallToActioncopy";


import { Footer } from "@/components/Footer";
import { IconBrandReact, IconGitBranch, IconRocket, IconWorld } from "@tabler/icons-react";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Features", link: "#features" },
  { name: "About Us", link: "#AboutUs" },
  { name: "Contact", link: "#contact" }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="bg-[#242424]">
 <Navbar>
  <NavBody>
    <NavbarLogo />
    <NavItems items={navItems} />
    <NavbarButton variant="primary">Get Started</NavbarButton>
  </NavBody>
  
  {/* Add this MobileNav section */}
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
</Navbar>    <Hero />
      <ProductShowcase />

      <LogoTicker />
      <Features />
<Timeline
  data={[
    {
      title: "Started the Journey",
      content: (
        <div className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-base max-w-2xl">
          <IconRocket className="text-purple-500 mt-1" />
          <p>
            Began learning <strong>HTML</strong>, <strong>CSS</strong>, and
            <strong> JavaScript</strong>. Built small projects to grasp the basics of web development.
          </p>
        </div>
      ),
    },
    {
      title: "Dived into React",
      content: (
        <div className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-base max-w-2xl">
          <IconBrandReact className="text-sky-500 mt-1" />
          <p>
            Explored <strong>React.js</strong> to create dynamic UIs.
            Learned about hooks, props, and component-based architecture.
          </p>
        </div>
      ),
    },
    {
      title: "Joined Open Source",
      content: (
        <div className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-base max-w-2xl">
          <IconGitBranch className="text-green-500 mt-1" />
          <p>
            Contributed to open source projects on <strong>GitHub</strong>.
            Collaborated with maintainers and reviewed PRs.
          </p>
        </div>
      ),
    },
    {
      title: "Deployed My First App",
      content: (
        <div className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-base max-w-2xl">
          <IconWorld className="text-blue-500 mt-1" />
          <p>
            Built and deployed a web app using <strong>Next.js</strong> and
            <strong> Vercel</strong>. Implemented mobile-first design using
            <strong> Tailwind CSS</strong>.
          </p>
        </div>
      ),
    },
  ]}
/>      
  <CallToAction />
      <Footer />
      </div>
    </>
  );
}
