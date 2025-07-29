"use client";

import { useRef } from "react";
import appScreen from "../assets/images/app-screen.png";
import { WordRotate } from "./WordRotate";
import { AuroraText } from "./Auratext";
import { AnimatedBeam } from "./AnimatedBeam";
import { TextReveal } from "./text-reveal";

export const ProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLDivElement>(null);
  const centerIconRef = useRef<HTMLDivElement>(null);
  const rightIconRef = useRef<HTMLDivElement>(null);
  const appScreenRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-[292px]">
        <div className="flex justify-center flex-col items-center text-center">
          <div className="text-[120px] -mt-[200px] sm:-mt-[450px] font-medium text-white text-center">
            <span>
              <TextReveal className="text-lg font-bold">
              Busywork is stealing your team's time.
                          Let's fix that

              </TextReveal>
              <br />
            </span>
          </div>
          <p className="text-white/40 text-lg py-5 -mt-[550px]">
            Every hour your team spends chasing emails, copying data, or doing
            repetitive tasks is an hour they could’ve spent creating, growing,
            or solving real problems.
          </p>
         
          <div className="text-white/40 text-lg ">
            <p className="py-5">That’s where we come in. </p>

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
