import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesCards() {
  const features = [
    {
      title: "Guidance and Advice",
      description:
        "A mentor provides valuable insights and advice based on their own experiences. They can guide you in making informed decisions about your career path, helping you avoid common pitfalls and identify opportunities",
      icon: <IconCloud />,
    },
    {
      title: "Skill Development",
      description:
        "Mentors can help you develop both technical and soft skills. They can offer feedback on your performance, suggest areas for improvement, and recommend resources or training programs to enhance your abilities",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Networking Opportunities",
      description:
        "A mentor often has a broad network of contacts in your industry. They can introduce you to influential people, opening doors to new job opportunities, collaborations, and professional relationships",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Goal Setting and Accountability",
      description:
        "Mentors can assist you in setting realistic and achievable career goals. They can also help you stay accountable, regularly checking in on your progress and encouraging you to stay focused and motivated",
      icon: <IconTerminal2 />,
    },
    {
      title: "Confidence Building",
      description:
        "Having a mentor's support can boost your confidence. They can provide reassurance and encouragement, helping you overcome self-doubt and take on new challenges with greater self-assurance",
      icon: <IconEaseInOut />,
    },
    {
      title: "Perspective and Inspiration",
      description:
        "Mentors can offer a different perspective on work-related issues and career choices. They can inspire you with their own success stories and help you envision a long-term career trajectory that you might not have considered on your own",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        index % 3 === 0 && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
