"use client";

import TezzeractBrick from "../assets/images/tezzeractbrick.webp";
import { useRouter } from "next/navigation";
import {
  m,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import gridlines from "../assets/images/grid-lines.png";
import { RefObject, useEffect, useRef, useCallback } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = useCallback((event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }, [mouseX, mouseY, to]);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return [mouseX, mouseY];
};

export const CallToActioncopy = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const borderdDivRef = useRef<HTMLDivElement>(null);

  const [mouseX, mouseY] = useRelativeMousePosition(borderdDivRef);
  
  // Fixed the template - correct order is x, y coordinates
  const maskImage = useMotionTemplate`radial-gradient(70% 70% at ${mouseX}px ${mouseY}px, black, transparent)`;
  
  return (
    <section className="text-white pb-10">
      <div className="container mx-auto ">
        <motion.div
          ref={borderdDivRef}
          className="border bg-[#00378A] border-white/15 py-[120px] rounded-xl overflow-hidden relative group"
        >
          <div
            className="absolute inset-0 bg-[rgb(53,147,206)] bg-blend-overlay [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridlines.src})` }}
          ></div>

          <motion.div
            className="absolute inset-0 bg-[rgb(53,147,206)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ 
              maskImage, 
              backgroundImage: `url(${gridlines.src})` 
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl mx-auto tracking-tighter font-bold text-center px-4 mt-5">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg max-w-[1000px] md:text-xl text-center px-4 mt-4 mx-auto">
              Don't let manual processes hold you back. Our automation experts
              are ready to design a custom solution that will streamline your
              operations and accelerate your growth.
            </p>
            <div className="flex justify-center mt-6">
              <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
                Schedule an AI Strategy Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};