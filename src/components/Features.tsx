import { Feature } from "./Feature";
import { AuroraText } from "./Auratext";

// Import your different icons here
import AutomationIcon from "../assets/icons/automate.png"; // Replace with your actual icon path
import TeamIcon from "../assets/icons/agents.png"; // Replace with your actual icon path
import UpgradeIcon from "../assets/icons/business.png"; // Replace with your actual icon path
import ContentIcon from "../assets/icons/create.png"; // Replace with your actual icon path

const features = [
  {
    title: "Automate the busywork. Focus on what matters",
    description:
      "We connect your apps, tools, and systems — then automate tasks like data entry, file transfers, and reporting, so your team can focus on bigger things.",
    icon: AutomationIcon,
  },
  {
    title: "Add a digital team member, without hiring one",
    description:
      "We build intelligent agents that can answer emails, manage calendars, chase leads, and more — without you lifting a finger.",
    icon: TeamIcon,
  },
  {
    title: "Upgrade your business without rebuilding it",
    description:
      "We use AI to improve how your current systems work — cutting down time, cost, and chaos across operations, HR, finance, and more.",
    icon: UpgradeIcon,
  },
  {
    title: "Create Stunning Content - No creative team required",
    description:
      "We help you create AI-generated videos, visuals, product mockups, even virtual avatars — tailored for your brand and ready to use.",
    icon: ContentIcon,
  },
];

export const Features = () => {
  return (
    <div className="text-white w-full py-[100px]">
      
      <div className=" mx-auto ">
        <h2 className="text-center font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight">
          Smart <AuroraText>AI</AuroraText> Solutions,
          <br className="hidden sm:block" /> 
          <span className="block sm:inline">Built for the Way You Work</span>
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-4 sm:mt-5 text-lg sm:text-xl text-white/70 px-4 sm:px-0">
           {` Whether you're drowning in tasks or just starting to scale, our
            AI-driven solutions are designed to simplify, automate, and
            accelerate every part of your business.`}
          </p>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-4 -gap-2 ">
          {features.map(({ title, description, icon }) => (
            <Feature title={title} description={description} icon={icon} key={title} />
          ))}
        </div>
         
      </div>
    </div>
  );
};

export default Features;