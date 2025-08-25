import { useState } from 'react';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { useMotionTemplate, useMotionValue, motion } from 'motion/react';
import { AnimatedTooltip } from "./animated-tooltip";
import wehanImage from "../assets/images/wehan.png";
import AboutFeatures from './AboutFeatures';
import shanilkaImage from "../assets/images/shanilka.png";
import { div } from 'motion/react-client';
import { CanvasRevealEffectDemo3 } from './CanvasRevealEffectDemo3';
import { FAQ } from './FAQ';
import AutomationTabs from './AutomationTabs';

export function AboutSection() {
  const people = [
    {
      id: 1,
      name: "Shanilka Rajapakse",
      designation: "Founder & CEO",
      image: shanilkaImage.src
    },
    {
      id: 2,
      name: "Wehan Himsara",
      designation: "Lead Software Engineer",
      image: wehanImage.src
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <section id="about" className="bg-[#121212]">
      <div className="bg-[#121212] text-white bg-[linear-gradient(to_bottom,#121212,#00398C_34%,#0060EB_65%,#01A6EB_82%)] py-[72px] sm:py-[250px] relative overflow-clip lg:h-[60vh]">
        <div className="container relative mx-auto">
          <div className="flex justify-center -mt-6">
            <div className="inline-flex relative">
              <h1 className="text-6xl sm:text-[104px] font-medium tracking-tighter text-center leading-tight">
                <span className="">We Are Tezzeract</span>
              </h1>
              <div className="absolute h-[500px] w-[1200px] sm:w-[3400px] sm:h-[1200px] lg:w-[3000px] lg:h-[1400px] sm:py-24 rounded-[100%] bg-[#121212] left-1/2 -translate-x-1/2 border-2 border-[#84DBFF] bg-[radial-gradient(closest-side,#121212_84%,#003D8F)] sm:top-[calc(100%-38px)] top-[calc(100%-100px)]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pb-[100px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We're on a mission to make work feel effortless.
            </h2>
            <p className="text-xl text-neutral-500 mx-auto">
              Tezzeract is built for the purpose to help businesses work smarter, not harder by putting the power of AI into the hands of teams that need it most.
            </p>
            <p className='text-xl text-neutral-500 mx-auto'>
              Whether you're a startup founder, an HR lead, or running a scaling business, chances are you're struggling too much. We help businesses cut through the chaos with no-code automations, smart AI tools, and creative solutions built for maximum efficiency.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>

      <div className="px-12 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Approach
        </h2>
      </div>
      <CanvasRevealEffectDemo3/>
    </section>
  );
}