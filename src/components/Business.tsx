import React from 'react';
import Image from 'next/image';
import { Users, Zap, Palette, Package, MessageSquare, FileText } from "lucide-react";
import { GlowingEffect } from "./GlowingEffect";
import { AuroraText } from "./Auratext";
import { BackgroundBeams } from "./backgroundbeam";
import { WarpBackground } from "./WarpBackground";
import Clock from "../assets/images/clock.png";
import Operations from "../assets/images/operationsicons.png";
import Piggy from "../assets/images/piggy.png";
import Video from "../assets/images/video.png";



export function GlowingEffectDemo() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-[156px] max-w-7xl h-[180vh]">
      <div className="py-8 sm:py-12 text-white">
        <h2 className="text-center font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight">
          Transform Every Part of Your Business with AI          
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-4 sm:mt-5 text-lg sm:text-xl text-white/70 px-2 sm:px-0">
            From customer service to HR, AI helps teams do more with less, faster, smarter, and without burnout.
          </p>
        </div>
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex gap-3 lg:gap-3">
          <div className="flex-1 flex flex-col gap-2 lg:gap-3">
            <GridItem
              height="medium"
              category="Human Resources"
              title={
                <>
                  From onboarding to time-off tracking, automation saves{" "}
                  <span className="text-blue-400 font-bold text-3xl"><AuroraText>40%</AuroraText></span> of the time spent on routine tasks.
                </>
              }
              description="Deloitte, 2024"
              source="AI can free your HR team from repetitive admin."
              image={{
                src: Clock.src,
                alt: "HR team collaboration",
                position: "bottom-right",
                size: "medium"
              }}
            />

            <GridItem
              height="large"
              category="Creatives & Advertising"
              title={
                <>
                  AI-generated visuals and copy see{" "}
                  <span className=" font-bold text-3xl"><AuroraText>2.1%</AuroraText></span> more engagement and lower ad spend by{" "}
                  <span className=" font-bold text-3xl"><AuroraText>40%</AuroraText></span>
                </>
              }
              description="Meta, 2023"
              source="AI produces ads that perform better, built in half the time."
              image={{
                src: Piggy.src,
                alt: "Creative advertising design",
                position: "bottom",
                size: "large2"
              }}
            />
          </div>

          <div className="flex-1 flex flex-col gap-2 lg:gap-3">
            <GridItem
              height="large"
              category="Operations"
              title={
                <>
                  AI helps nurture prospects automatically, increasing sales opportunities by{" "}
                  <span className="font-bold text-3xl"><AuroraText>20%</AuroraText></span>
                </>
              }
              description="Forrester"
              source="Follow up with every lead without a burnout."
              image={{
                src: Operations.src,
                alt: "Sales operations dashboard",
                position: "bottom",
                size: "large2"
              }}
            />

            <GridItem
              height="medium"
              category="Operations"
              title={
                <>
                  AI optimization can reduce excess inventory by{" "}
                  <span className="text-pink-400 font-bold text-3xl"><AuroraText>20%-50%</AuroraText></span>, while improving availability.
                </>
              }
              description="BCG"
              source="Smarter inventory, fewer headaches."
            />
          </div>
        </div>
        
        {/* Bottom row with adjustable widths */}
        <div className="flex gap-3 mt-3 h-96">
          <div className="flex-[2]">
            <GridItem
              height="small"
              category="Customer Experience"
              title={
                <>
                  Automated email and chat responses can reduce customer service costs by up to{" "}
                  <span className="text-pink-400 font-bold text-3xl"><AuroraText>80%</AuroraText></span>
                </>
              }
              description="IBM"
              source=""
             
            />
          </div>
          
          <div className="flex-[5]">
            <GridItem 
              height="small"
              category="Human Resources"
              title={
                <>
                  AI cuts invoicing costs by{" "}
                  <span className="text-pink-400 font-bold text-3xl"><AuroraText>80%</AuroraText></span>, and gets the job done in minutes not days.
                </>
              }
              description="APQC"
              source="With AI, no more late invoices or manual data entry."
              image={{
                src: Video.src,
                alt: "Invoice automation",
                position: "bottom-right",
                size: "large"
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden space-y-4">
        <GridItem
          height="mobile"
          category="Human Resources"
          title={
            <>
              From onboarding to time-off tracking, automation saves{" "}
              <span className="text-blue-400 font-bold text-2xl sm:text-3xl"><AuroraText>40%</AuroraText></span> of the time spent on routine tasks.
            </>
          }
          description="AI can free your HR team from repetitive admin."
          source="Deloitte, 2024"
        />

        <GridItem
          height="mobile"
          category="Operations"
          title={
            <>
              AI helps nurture prospects automatically, increasing sales opportunities by{" "}
              <span className="text-pink-400 font-bold text-2xl sm:text-3xl"><AuroraText>20%</AuroraText></span>
            </>
          }
          description="Follow up with every lead without a burnout."
          source="Forrester"
        />

        <GridItem
          height="mobile"
          category="Creatives & Advertising"
          title={
            <>
              AI-generated visuals and copy see{" "}
              <span className="text-pink-400 font-bold text-2xl sm:text-3xl"><AuroraText>2.1%</AuroraText></span> more engagement and lower ad spend by{" "}
              <span className="text-pink-400 font-bold text-2xl sm:text-3xl"><AuroraText>40%</AuroraText></span>
              <WarpBackground className="absolute inset-0 z-0" />
            </>
          }
          description="AI produces ads that perform better, built in half the time."
          source="Meta, 2023"
        />

        <GridItem
          height="mobile"
          category="Operations"
          title={
            <>
              AI optimization can reduce excess inventory by{" "}
              <span className="text-pink-400 font-bold text-2xl sm:text-3xl"><AuroraText>20%-50%</AuroraText></span>, while improving availability.
            </>
          }
          description="Smarter inventory, fewer headaches."
          source="BCG"
        />

        <GridItem
          height="mobile"
          category="Customer Experience"
          title={
            <>
              Automated email and chat responses can reduce customer service costs by up to{" "}
              <span className="text-pink-400 font-bold text-2xl sm:text-3xl"><AuroraText>80%</AuroraText></span>
            </>
          }
          description=""
          source="IBM"
        />

        <GridItem 
          height="mobile"
          category="Human Resources"
          title={
            <>
              AI cuts invoicing costs by{" "}
              <span className="text-pink-400 font-bold text-2xl sm:text-3xl"><AuroraText>80%</AuroraText></span>, and gets the job done in minutes not days.
              <BackgroundBeams />
            </>
          }
          description="With AI, no more late invoices or manual data entry."
          source="APQC"
        />
      </div>
    </div>
  );
}

interface ImageConfig {
  src: string;
  alt: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom' |'bottom-right' | 'center' | 'center-left' | 'center-right';
  size: 'small' | 'medium' | 'large' | 'large2';
}

interface GridItemProps {
  height: 'small' | 'medium' | 'medium2' | 'large' | 'large2' | 'mobile';
  category: string;
  title: React.ReactNode;
  description: string;
  source: string;
  image?: ImageConfig;
}

const GridItem = ({ height, category, title, description, source, image }: GridItemProps) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'min-h-[16rem]';
      case 'medium':
        return 'min-h-[20rem]';
      case 'medium2':
        return 'min-h-[22rem]';
      case 'large':
        return 'min-h-[34rem]';
      case 'large2':
        return 'min-h-[40rem]';
      case 'mobile':
        return 'min-h-[12rem] sm:min-h-[14rem]';
      default:
        return 'min-h-[20rem]';
    }
  };

  const getImagePositionClass = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'absolute top-4 left-4';
      case 'top-right':
        return 'absolute top-4 right-4';
      case 'bottom-left':
        return 'absolute bottom-16 left-4';
      case 'bottom':
        return 'absolute bottom-8  left-1/2 transform -translate-x-1/2 ';
      case 'bottom-right':
        return 'absolute bottom-6 right-4';
      case 'center':
        return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      case 'center-left':
        return 'absolute top-1/2 left-4 transform -translate-y-1/2';
      case 'center-right':
        return 'absolute top-1/2 right-4 transform -translate-y-1/2';
      default:
        return 'absolute top-4 right-4';
    }
  };

  const getImageSizeClass = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-16 h-16 sm:w-20 sm:h-20';
      case 'medium':
        return 'w-24 h-24 sm:w-32 sm:h-32';
      case 'large':
        return 'w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48';
        case 'large2':
        return 'w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64';
      default:
        return 'w-24 h-24 sm:w-32 sm:h-32';
    }
  };

  return (
    <div className={`${getHeightClass()} list-none h-full`}>
      <div className="relative h-full rounded-xl sm:rounded-2xl border border-gray-700 p-2 sm:p-3 bg-[#121212]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-3 sm:gap-4 lg:gap-6 overflow-hidden rounded-lg sm:rounded-xl p-4 sm:p-6">
          
          {/* Image */}
          {image && (
            <div className={`${getImagePositionClass(image.position)} z-10`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`${getImageSizeClass(image.size)} rounded-lg object-cover opacity-80 hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          )}

          <div className="relative flex flex-1 flex-col gap-3 sm:gap-4 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-medium text-blue-400 bg-blue-900/20 px-2 sm:px-3 py-1 rounded-lg border border-blue-600">
                {category}
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1">
              <h3 className="text-base sm:text-lg lg:text-xl leading-relaxed text-white">
                {title}
              </h3>
              {description && (
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            <div className="text-xs text-gray-500 py-1">
              {source}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};