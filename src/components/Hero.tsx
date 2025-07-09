"use client";
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-[#242424] text-white bg-[linear-gradient(to_bottom,#242424,#022355_34%,#00378A_65%,#00AAF0_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[3000px] sm:h-[568px] sm:py-24 rounded-[100%] bg-[#242424] left-1/2 -translate-x-1/2 border border-[#00AAF0] bg-[radial-gradient(closest-side,#242424_82%,#00AAF0)] top-[calc(100%-96px)]" 
           ></div>
      <div className="container relative mx-auto">
        {/* <div className="absolute h-[200px] w-[3000px] sm:w-[3000px] sm:h-[200px] lg:w-[6000px] lg:h-[500px] bg-[#242424] left-1/2 -translate-x-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-200px)]" 
           style={{
             clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'
           }}></div>
      <div className="container relative mx-auto"></div> */}
        
        <div className="flex justify-center  mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-8xl font-medium tracking-tighter text-center inline-flex">
              Your Business
              <br /> Supercharged by AI
            </h1>
        
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            From smart automations to AI-driven tools, we design systems that boost productivity, unlock growth, and make work feel effortless.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
Book a Call          </button>
        </div>
      </div>
    </div>
  );
};