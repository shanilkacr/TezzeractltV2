"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CanvasRevealEffect } from "@/components/canvas-reveal-effect";

interface CardProps {
  text: string;
  hoverText: string; // New prop for hover text
}

function Card({ text, hoverText }: CardProps) {
  const [hovered, setHovered] = React.useState(false);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interface MousePositionEvent extends MouseEvent {
      x: number;
      y: number;
    }

    const updateMousePosition = (e: MousePositionEvent): void => {
      if (!border.current) return;
      const borderRect: DOMRect = border.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      className="innercontainer p-5 rounded-[20px] h-[338px] w-[266px] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-[#1b3946]  relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute rounded-[20px] inset-0 border-2 border-[#00AAF0]"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      
      {/* Animated text that changes on hover */}
      <motion.p 
        className="md:text-xl text-xl font-normal text-center text-white relative z-20 max-w-2xl mx-auto"
        key={hovered ? 'hovered' : 'normal'} // Key change triggers animation
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: -10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        {hovered ? hoverText : text}
      </motion.p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
              colors={[[0, 169, 238, 1]]}
              opacities={ [0.7, 0.7, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 [mask-image:radial-gradient(500px_at_center,white,transparent)] bg-black/70" />
    </div>
  );
}

export function CanvasRevealEffectDemo3() {
  return (
    <div className="cardContainer flex flex-col lg:flex-row gap-20 !justify-center py-8">
      <Card text="People First" hoverText="Putting people at the center of everything we do" />
      <Card text="Customize" hoverText="Tailor solutions to your unique needs" />
      <Card text="Innovation" hoverText="Pushing boundaries with cutting-edge technology" />
    </div>
  );
}