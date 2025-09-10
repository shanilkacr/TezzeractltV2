import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Define the TypeScript interface for FeatureCard props
interface FeatureCardProps {
  title: string;
  description: string;
  highlighted: boolean;
}

const FeatureCard = ({ title, description, highlighted }: FeatureCardProps) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-white/5 px-8 rounded-xl py-10 text-center relative group">
      <motion.div
        className="absolute inset-0 border-[0.5px] border-[#00AAF0] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      />
      <div className="relative rounded-xl z-10 border-red-500">
        <h3 className="text-xl font-medium mb-4 text-white">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        {highlighted && (
          <div className="mt-4 inline-block px-3 py-1 bg-[#00AAF0]/20 border border-[#00AAF0]/30 rounded-full text-xs text-[#00AAF0]">
            Featured
          </div>
        )}
      </div>
    </div>
  );
};

const AutomationTabs = () => {
  // Define the tab type
  type TabType = 'Automation' | 'Agents' | 'AI for Business' | 'AI for Creatives';
  
  const [activeTab, setActiveTab] = useState<TabType>('Automation');

  const tabs: TabType[] = ['Automation', 'Agents', 'AI for Business', 'AI for Creatives'];

  const automationData: Record<TabType, Array<{title: string; description: string; highlighted: boolean}>> = {
    'Automation': [
      {
        title: 'Task & Process Automation',
        description: 'Automate repetitive internal tasks like approvals, follow-ups, and data entry.',
        highlighted: false
      },
      {
        title: 'Invoice & Document Handling',
        description: 'Automatically extract data from PDFs, emails, or receipts and update records in real time.',
        highlighted: false
      },
      {
        title: 'Tool Integration (No-Code)',
        description: 'Connect apps like Google Sheets, Notion, Slack, Zoom, etc., using custom workflows.',
        highlighted: false
      },
      {
        title: 'Notifications & Reminders',
        description: 'Automated alerts for due tasks, status changes, or follow-ups that are sent via email, Slack, or chat.',
        highlighted: false
      },
      {
        title: 'Data Cleaning & Syncing',
        description: 'Automatically organize and sync customer or product data between systems.',
        highlighted: false
      },
      {
        title: 'Form & Survey Automations',
        description: 'Auto-collect responses from forms or surveys and push insights into your dashboards or CRMs.',
        highlighted: false
      }
    ],
    'Agents': [
      {
        title: 'Customer Support Agent',
        description: 'AI-powered agent that handles customer inquiries, support tickets, and live chat interactions.',
        highlighted: false
      },
      {
        title: 'Sales Assistant Agent',
        description: 'Automated lead qualification, follow-up emails, and meeting scheduling with prospects.',
        highlighted: false
      },
      {
        title: 'HR Recruitment Agent',
        description: 'Screen resumes, schedule interviews, and manage candidate communications automatically.',
        highlighted: false
      },
      {
        title: 'Content Moderation Agent',
        description: 'Monitor and moderate user-generated content across platforms with smart filtering.',
        highlighted: false
      },
      {
        title: 'Data Analysis Agent',
        description: 'Automatically analyze business data and generate actionable insights and reports.',
        highlighted: false
      },
      {
        title: 'Social Media Agent',
        description: 'Manage social media posts, respond to comments, and track engagement metrics.',
        highlighted: false
      }
    ],
    'AI for Business': [
      {
        title: 'Business Intelligence Dashboard',
        description: 'AI-powered analytics that turn your business data into actionable insights and forecasts.',
        highlighted: false
      },
      {
        title: 'Smart Document Processing',
        description: 'Extract and process information from contracts, invoices, and legal documents automatically.',
        highlighted: false
      },
      {
        title: 'Predictive Analytics',
        description: 'Forecast sales, inventory needs, and market trends using advanced AI algorithms.',
        highlighted: false
      },
      {
        title: 'Customer Behavior Analysis',
        description: 'Understand customer patterns, preferences, and lifetime value through AI insights.',
        highlighted: false
      },
      {
        title: 'Financial Risk Assessment',
        description: 'AI-driven analysis of financial risks, compliance monitoring, and fraud detection.',
        highlighted: false
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Optimize inventory, logistics, and supplier relationships with intelligent automation.',
        highlighted: false
      }
    ],
    'AI for Creatives': [
      {
        title: 'Content Generation Suite',
        description: 'AI-powered writing, copywriting, and content creation for blogs, social media, and marketing.',
        highlighted: false
      },
      {
        title: 'Design Automation Tools',
        description: 'Generate marketing materials, social media graphics, and brand assets automatically.',
        highlighted: false
      },
      {
        title: 'Video & Audio Processing',
        description: 'Automated video editing, transcription, and audio enhancement for creative projects.',
        highlighted: false
      },
      {
        title: 'Brand Consistency Monitor',
        description: 'Ensure all creative outputs maintain brand guidelines and visual consistency.',
        highlighted: false
      },
      {
        title: 'Creative Asset Management',
        description: 'Organize, tag, and search through creative assets using AI-powered categorization.',
        highlighted: false
      },
      {
        title: 'Campaign Performance AI',
        description: 'Analyze creative campaign performance and suggest optimizations for better ROI.',
        highlighted: false
      }
    ]
  };

  return (
    <div className="bg-[#121212] text-white py-[70px] sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#27272A] rounded-xl p-1 gap-10 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-12 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#121212] text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {automationData[activeTab].map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              highlighted={item.highlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationTabs;