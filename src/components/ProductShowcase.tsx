"use client";

import { useRef } from "react";
import appScreen from "../assets/images/app-screen.png";
import { WordRotate } from "./WordRotate";
import { AuroraText } from "./Auratext";
import { AnimatedBeam } from "./AnimatedBeam";

export const ProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLDivElement>(null);
  const centerIconRef = useRef<HTMLDivElement>(null);
  const rightIconRef = useRef<HTMLDivElement>(null);
  const appScreenRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center text-center">
          <div className="text-5xl font-medium text-white text-center mt-10">
            <span>
              Busywork is stealing your team's time
              {/* <WordRotate words={["time.", "money.", "resources."]} /> */}
              <br />
              <AuroraText>Let's fix that</AuroraText>
            </span>
          </div>
          <p className="text-white/40 text-lg py-5">
            Every hour your team spends chasing emails, copying data, or doing
            repetitive tasks is an hour they could’ve spent creating, growing,
            or solving real problems.
          </p>
          {/* Animated Beam Demo Section */}
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl h-96 mt-3  overflow-hidden"
          >
            {/* Left Icon */}
            <div
              ref={leftIconRef}
              className="absolute transform -translate-y-1/2  flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
            </div>

            {/* Center Icon */}
            <div
              ref={centerIconRef}
              className="absolute left-1/2 top-[5px] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
            </div>

            {/* Right Icon */}
            <div
              ref={rightIconRef}
              className="absolute right-16 top-[5px]   flex items-center justify-center "
            >
              {/* <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg> */}
            </div>

            {/* App Screen */}
            <div
              ref={appScreenRef}
              className="absolute z-1 left-1/2 bottom-8 bg-white w-20 h-20 rounded-full transform -translate-x-1/2 flex items-center justify-center "
            >
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Animated Beams */}
            {/* <AnimatedBeam
              containerRef={containerRef}
              fromRef={leftIconRef}
              toRef={centerIconRef}
              curvature={50}
              gradientStartColor="#3b82f6"
              gradientStopColor="#8b5cf6"
              delay={1}
              duration={3}
            />
            
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerIconRef}
              toRef={rightIconRef}
              curvature={-50}
              gradientStartColor="#10b981"
              gradientStopColor="#06b6d4"
              delay={1}
              duration={3}
            /> */}

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerIconRef}
              toRef={appScreenRef}
              curvature={0}
              gradientStartColor="#00378A"
              gradientStopColor="#00A9EE"
              delay={0.2}
              duration={3}
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={leftIconRef}
              toRef={appScreenRef}
              curvature={80}
              gradientStartColor="#00378A"
              gradientStopColor="#00A9EE"
              delay={0.2}
              duration={3}
            />

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={rightIconRef}
              toRef={appScreenRef}
              curvature={-80}
              gradientStartColor="#00378A"
              gradientStopColor="#00A9EE"
              delay={0.2}
              duration={3}
              reverse={true}
            />
          </div>
          <div className="text-white/40 text-lg ">
            <p>That’s where we come in. </p>

            <p>
              At Tezzeract, we build intelligent systems that take care of the
              boring stuff. So your people can focus on what they do best.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
