"use client";

import { Users, Zap, Palette, Package, MessageSquare, FileText } from "lucide-react";
import { GlowingEffect } from "./GlowingEffect";

export function GlowingEffectDemo() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="flex gap-3 lg:gap-3">
        {/* Left Column - 3 cards */}
        <div className="flex-1 flex flex-col gap-2 lg:gap-3">
          {/* HR Card - Medium */}
          <GridItem
            height="medium"
            icon={<Users className="h-4 w-4 text-blue-400" />}
            category="Human Resources"
            title={
              <>
                From onboarding to time-off tracking, automation saves{" "}
                <span className="text-blue-400 font-bold text-3xl">40%</span> of the time spent on routine tasks.
              </>
            }
            description="AI can free your HR team from repetitive admin."
            source="Deloitte, 2024"
          />

          {/* Creatives Card - Medium */}
          <GridItem
            height="large"
            icon={<Palette className="h-4 w-4 text-blue-400" />}
            category="Creatives & Advertising"
            title={
              <>
                AI-generated visuals and copy see{" "}
                <span className="text-pink-400 font-bold text-3xl">2.1x</span> more engagement and lower ad spend by{" "}
                <span className="text-pink-400 font-bold text-3xl">40%</span>
              </>
            }
            description="AI produces ads that perform better, built in half the time."
            source="Meta, 2023"
          />
         
        </div>

        {/* Right Column - 3 cards */}
        <div className="flex-1 flex flex-col gap-2 lg:gap-3">
          {/* Operations Card - Large (Tall) */}
          <GridItem
            height="large"
            icon={<Zap className="h-4 w-4 text-blue-400" />}
            category="Operations"
            title={
              <>
                AI helps nurture prospects automatically, increasing sales opportunities by{" "}
                <span className="text-pink-400 font-bold text-3xl">20%</span>
              </>
            }
            description="Follow up with every lead without a burnout."
            source="Forrester"
          />

          {/* Operations Card - Medium */}
          <GridItem
            height="medium"
            icon={<Package className="h-4 w-4 text-blue-400" />}
            category="Operations"
            title={
              <>
                AI optimization can reduce excess inventory by{" "}
                <span className="text-pink-400 font-bold text-3xl">20-50%</span>, while improving availability.
              </>
            }
            description="Smarter inventory, fewer headaches."
            source="BCG"
          />

          {/* HR Card - Medium */}
          
        </div>
      </div>
      <div className="flex gap-3 mt-3">
         <GridItem
            height="small"
            icon={<MessageSquare className="h-4 w-4 text-blue-400" />}
            category="Customer Experience"
            title={
              <>
                Automated email and chat responses can reduce customer service costs by up to{" "}
                <span className="text-pink-400 font-bold text-3xl">80%</span>
              </>
            }
            description=""
            source="IBM"
          />
          <GridItem 
            height="small"
            icon={<FileText className="h-4 w-4 text-blue-400" />}
            category="Human Resources"
            title={
              <>
                AI cuts invoicing costs by{" "}
                <span className="text-pink-400 font-bold text-3xl">80%</span>, and gets the job done in minutes not days.
              </>
            }
            description="With AI, no more late invoices or manual data entry."
            source="APQC"
          />
      </div>
    </div>
  );
}

interface GridItemProps {
  height: 'small' |'medium'| 'medium2' | 'large'| 'large2';
  icon: React.ReactNode;
  category: string;
  title: React.ReactNode;
  description: string;
  source: string;
}

const GridItem = ({ height, icon, category, title, description, source }: GridItemProps) => {
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
        return 'min-h-[35.5rem]';
      default:
        return 'min-h-[20rem]';
    }
  };

  return (
    <div className={`${getHeightClass()} list-none`}>
      <div className="relative h-full rounded-2xl border border-gray-700 p-2 md:rounded-3xl md:p-3 bg-[#121212]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-lg border border-blue-600 bg-blue-900/20 p-2">
                {icon}
              </div>
              <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-600">
                {category}
              </span>
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="text-lg leading-relaxed text-white">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-gray-400">
                  {description}
                </p>
              )}
            </div>
            <div className="text-xs text-gray-500 border border-gray-700 bg-gray-800/50 px-3 py-1 rounded w-fit">
              {source}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder GlowingEffect component
