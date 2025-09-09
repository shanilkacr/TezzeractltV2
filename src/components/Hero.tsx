"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import aiImage from "../assets/images/ai-icon.png";
import interImage from "../assets/images/inter-icon.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";
import { AuroraText } from "./Auratext";
import { Meteors } from "./Meteors";
import { TextReveal } from "./text-reveal";
import Link from "next/link";

export const Hero = () => {
  const aiImageRef = useRef(null);
  const interImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5; // Adjust this value to change parallax speed
      const rate2 = scrolled * -0.3; // Different speed for the second image

      if (aiImageRef.current) {
        aiImageRef.current.style.transform = `translateY(${rate}px)`;
      }
      if (interImageRef.current) {
        interImageRef.current.style.transform = `translateY(${rate2}px) rotate(6deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#121212] text-white bg-[radial-gradient(190%_200%_at_center_80%,#01A6EB_10%,#0060EB_15%,#00398C_25%,#121212_40%)] py-[120px] sm:py-[120px] relative overflow-hidden lg:h-[95vh]">
      {/* Main content circle/div - Higher z-index */}
      <div className="absolute h-[500px] w-[1200px] sm:w-[3400px] sm:h-[1200px] lg:w-[3000px] lg:h-[1400px] sm:py-24 rounded-[100%] bg-[#121212] left-1/2 -translate-x-1/2 border-2 border-[#84DBFF] bg-[radial-gradient(closest-side,#121212_84%,#003D8F)] sm:top-[calc(100%-320px)] top-[calc(100%-100px)] z-20 ">
        {/* Meteors Effect - Inside the circular div */}
        <Meteors number={10} />
      </div>

      {/* Content container - Highest z-index */}
      <div className="container relative mx-auto z-30">
        <div className="flex justify-center mt-9 lg:mt-10">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-[104px] font-medium tracking-tighter text-center leading-tight">
              <span className="bg-gradient-to-r from-white to-[#9AE1FE] bg-clip-text text-transparent">
                Your Business,
              </span>
              <span className="block bg-gradient-to-r from-white to-[#9AE1FE] bg-clip-text text-transparent">
                Supercharged by{" "}
                <span className="font-bold">
                  <AuroraText>AI</AuroraText>
                </span>
              </span>
            </h1>

            <Image
              ref={aiImageRef}
              src={aiImage}
              alt=""
              height="200"
              width="200"
              className="absolute right-[780px] top-[180px] hidden sm:inline transition-transform duration-75 ease-out will-change-transform"
            />
            <Image
              ref={interImageRef}
              src={interImage}
              alt=""
              height="200"
              width="200"
              className="absolute rotate-6 left-[700px] top-[220px] hidden sm:inline transition-transform duration-75 ease-out will-change-transform"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            From smart automations to AI-driven tools, we design systems that
            boost productivity, unlock growth, and make work feel effortless.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/bookcall"
            className="bg-gradient-to-r font-medium from-white to-[#9AE1FE] text-black py-3 px-5 rounded-xl flex items-center gap-2 w-fit mx-auto"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
};
