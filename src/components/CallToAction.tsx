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
import gridlines from "../assets/images/grid-line-grd.png";
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

export const CallToAction = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const borderdDivRef = useRef<HTMLDivElement>(null);
  const [mouseX, mouseY] = useRelativeMousePosition(borderdDivRef);
  
  const maskImage = useMotionTemplate`radial-gradient(70% 70% at ${mouseX}px ${mouseY}px, black, transparent)`;
  
  return (
    <section className=" flex flex-row text-white bg-[radial-gradient(220%_200%_at_center_0.1%,#01A6EB_10%,#0060EB_15%,#00398C_25%,#121212_40%)] py-[72px] relative overflow-hidden lg:h-[120vh] " >
      {/* Bottom arc circle behind the CTA */}
      <div className="absolute w-[1600px] sm:w-[4000px] sm:h-[1600px] lg:w-[4000px] lg:h-[2000px] rounded-[100%] left-1/2 -translate-x-1/2 border-2 border-[#84DBFF] bg-[radial-gradient(closest-side,#121212_84%,#003D8F)] bottom-[60%] z-0">
      </div>
       
      <div className="  w-full z-10 mx-auto  flex items-center justify-center">
        <motion.div
          ref={borderdDivRef}
          className="border border-white/15 bg-[#121212] py-[60px] rounded-[30px] overflow-hidden relative group w-full max-w-6xl mx-auto"
        >
          <div
            className="absolute inset-0 bg-[transparent] bg-blend-overlay [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridlines.src})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[transparent] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ 
              maskImage, 
              backgroundImage: `url(${gridlines.src})` 
            }}
          ></motion.div>
          <div className="relative ">
            <div className="mt-14 ">
              <h2 className=" text-3xl md:text-5xl mx-auto tracking-tighter font-medium text-center pb-6 px-[30px] mt-5">
AI-driven automations for<br/> everyone. </h2>
            <p className="text-lg text-white/70 max-w-[1000px] md:text-xl text-center px-10 mx-auto">
{`              Don't let manual processes hold you back. Our automation experts are ready to design a custom solution that will streamline your operations and accelerate your growth.
`}            </p>
            </div> 
            <div className="flex justify-center py-10 mt-6">
              <button className="bg-gradient-to-r from-[#00A9EE] to-[#00378A] text-white py-4 px-5 rounded-2xl font-light  hover:shadow-[inset_0_-6px_10px_#ffffff3f] transform-gpu transition-all duration-300 ease-in-out">
                Schedule an AI Strategy Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};