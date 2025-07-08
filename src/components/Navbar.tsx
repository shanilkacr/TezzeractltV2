"use client";
import Image from "next/image";
import logoImage from "../assets/images/Tezzeract Logo.png";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "About Us", href: "#aboutUs" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-4 lg:py-8 sticky z-50 top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center border border-white/45 rounded-full px-4 py-2 text-white bg-blue-950/50 backdrop-blur">
          <div className="flex items-center">
            <Image
              src={logoImage}
              alt="Tezzeract Logo"
              className="ml-2 h-5 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-6 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side - Button for desktop, Hamburger for mobile */}
          <div className="flex items-center">
            <button className="hidden md:block font-medium h-10 px-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-sm">
              Get Started
            </button>
            {/* Mobile Hamburger Menu */}
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-0"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge(isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 -translate-y-0"
                  )}
                ></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
