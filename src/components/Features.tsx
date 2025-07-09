import { Feature } from "./Feature";
import { AuroraText } from "./Auratext";

// Import your different icons here
import AutomationIcon from "../assets/icons/automate.png"; // Replace with your actual icon path
import TeamIcon from "../assets/icons/agent.png"; // Replace with your actual icon path
import UpgradeIcon from "../assets/icons/business.png"; // Replace with your actual icon path
import ContentIcon from "../assets/icons/create.png"; // Replace with your actual icon path

const features = [
  {
    title: "Automate the Busywork. Focus on What Matters",
    description:
      "We connect your apps, tools, and systems — then automate tasks like data entry, file transfers, and reporting, so your team can focus on bigger things.",
    icon: AutomationIcon,
  },
  {
    title: "Add a Digital Team Member, Without Hiring One",
    description:
      "We build intelligent agents that can answer emails, manage calendars, chase leads, and more — without you lifting a finger.",
    icon: TeamIcon,
  },
  {
    title: "Upgrade Your Business Without Rebuilding It",
    description:
      "We use AI to improve how your current systems work — cutting down time, cost, and chaos across operations, HR, finance, and more.",
    icon: UpgradeIcon,
  },
  {
    title: "Create Stunning Content — No Creative Team Required",
    description:
      "We help you create AI-generated videos, visuals, product mockups, even virtual avatars — tailored for your brand and ready to use.",
    icon: ContentIcon,
  },
];

export const Features = () => {
  return (
    <div className=" text-white py-[72px] sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Smart <AuroraText>AI</AuroraText> Solutions,
          <br /> Built for the Way You Work{" "}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Whether you're drowning in tasks or just starting to scale, our
            AI-driven solutions are designed to simplify, automate, and
            accelerate every part of your business.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ title, description, icon }) => (
            <Feature title={title} description={description} icon={icon} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;