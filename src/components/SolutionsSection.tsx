import { useState } from 'react';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { useMotionTemplate, useMotionValue, motion } from 'motion/react';
import { AnimatedTooltip } from "./animated-tooltip";
import wehanImage from "../assets/images/wehan.png";
import AboutFeatures from './AboutFeatures';
import shanilkaImage from "../assets/images/shanilka.png";
import { div, h2 } from 'motion/react-client';
import { CanvasRevealEffectDemo3 } from './CanvasRevealEffectDemo3';
import { FAQ } from './FAQ';
import AutomationTabs from './AutomationTabs';

export function SolutionsSection() {
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
      <div className=" text-white bg-[linear-gradient(to_bottom,#121212,#00398C_34%,#0060EB_65%,#01A6EB_82%)] py-[150px] md:py-[250px] relative overflow-clip h-[50vh] lg:h-[60vh]">
        <div className="container relative mx-auto">
          <div className="flex justify-center -mt-6">
            <div className="inline-flex relative">
              <h1 className="text-6xl sm:text-[104px] font-medium tracking-tighter text-center mb-[80px] sm:m-0 sm:mb-0 leading-none sm:leading-tight">
                <span className="">Our Solutions</span>
              </h1>
              <div className="absolute h-[500px] w-[1200px] sm:w-[3400px] sm:h-[1200px] lg:w-[3000px] lg:h-[1400px] sm:py-24 rounded-[100%] bg-[#121212] left-1/2 -translate-x-1/2 border-2 border-[#84DBFF] bg-[radial-gradient(closest-side,#121212_84%,#003D8F)] sm:top-[calc(100%-38px)] top-[calc(100%-100px)]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" mx-auto pb-[100px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
We can reclaim your time back to you by our AI automations            </h2>
            <p className="text-xl text-neutral-500 mx-auto">
Every growing business hits a wall. Manual processes stack up. Teams get stretched. Mistakes creep in. You didn’t sign up to babysit spreadsheets. That’s where we come in.            </p>     
          </div>
    
        </div>
      </div>      
      <AutomationTabs />
      <FAQ />
    </section>
  );
}