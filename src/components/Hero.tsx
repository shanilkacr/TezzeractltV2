"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import aiImage from "../assets/images/ai-icon.png";
import interImage from "../assets/images/inter-icon.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";
import { AuroraText } from "./Auratext";


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
    <div className="bg-[#121212] text-white bg-[linear-gradient(to_bottom,#121212,#00398C_34%,#0060EB_65%,#01A6EB_82%)] py-[72px] sm:py-24 relative overflow-clip lg:h-[80vh] mt-[80px]">
      <div className="absolute h-[500px] w-[1200px] sm:w-[3400px] sm:h-[1200px] lg:w-[3000px] lg:h-[1400px] sm:py-24 rounded-[100%] bg-[#121212] left-1/2 -translate-x-1/2 border-2  border-[#84DBFF] bg-[radial-gradient(closest-side,#121212_84%,#003D8F)] sm:top-[calc(100%-320px)] top-[calc(100%-100px)]" 
           ></div>
      <div className="container relative mx-auto">
        
        <div className="flex justify-center -mt-6">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-[104px] font-medium tracking-tighter text-center leading-tight">
  <span className="">Your Business</span>
  <span className="block">
    Supercharged by <span className="font-bold"><AuroraText>AI</AuroraText></span>
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
            From smart automations to AI-driven tools, we design systems that boost productivity, unlock growth, and make work feel effortless.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};