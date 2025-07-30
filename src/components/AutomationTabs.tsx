import { useState } from 'react';

const AutomationTabs = () => {
  const [activeTab, setActiveTab] = useState('Automation');

  const tabs = ['Automation', 'Agents', 'AI for Business', 'AI for Creatives'];

  const automationData = {
    'Automation': [
      {
        title: 'Task & Process Automation',
        description: 'Automate repetitive internal tasks like approvals, follow-ups, and data entry.',
        highlighted: false
      },
      {
        title: 'Invoice & Document Handling',
        description: 'Automatically extract data from PDFs, emails, or receipts and update records in real time.',
        highlighted: true
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
        highlighted: true
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
        highlighted: true
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
        highlighted: true
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
    <div className="bg-[#121212] text-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#27272A] rounded-lg p-1 gap-10 backdrop-blur-sm b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-12 py-1 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationData[activeTab].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border  `}
            >
              <h3 className="text-3xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm  leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationTabs;