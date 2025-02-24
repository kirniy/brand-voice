"use client";

import { cn } from "@/lib/utils";
import { MessageSquareText, Users, BrainCircuit } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

const content = {
  en: {
    cards: [
      {
        icon: <MessageSquareText className="size-4 text-blue-300" />,
        title: "Smart Responses",
        description: "AI-powered chat responses for social media",
        date: "24/7",
        iconClassName: "text-blue-500",
        titleClassName: "text-blue-500",
        className: "[grid-area:stack] hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      },
      {
        icon: <Users className="size-4 text-blue-300" />,
        title: "Community Management",
        description: "Automated engagement with your audience",
        date: "Real-time",
        iconClassName: "text-blue-500",
        titleClassName: "text-blue-500",
        className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-6 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      },
      {
        icon: <BrainCircuit className="size-4 text-blue-300" />,
        title: "Brand Voice AI",
        description: "Learns and adapts to your communication style",
        date: "Adaptive",
        iconClassName: "text-blue-500",
        titleClassName: "text-blue-500",
        className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-4",
      },
    ],
  },
  ru: {
    cards: [
      {
        icon: <MessageSquareText className="size-4 text-blue-300" />,
        title: "Умные ответы",
        description: "ИИ-ответы для социальных сетей",
        date: "24/7",
        iconClassName: "text-blue-500",
        titleClassName: "text-blue-500",
        className: "[grid-area:stack] hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      },
      {
        icon: <Users className="size-4 text-blue-300" />,
        title: "Управление сообществом",
        description: "Автоматическое взаимодействие с аудиторией",
        date: "Онлайн",
        iconClassName: "text-blue-500",
        titleClassName: "text-blue-500",
        className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-6 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      },
      {
        icon: <BrainCircuit className="size-4 text-blue-300" />,
        title: "ИИ голос бренда",
        description: "Изучает и адаптирует ваш стиль общения",
        date: "Адаптивный",
        iconClassName: "text-blue-500",
        titleClassName: "text-blue-500",
        className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-4",
      },
    ],
  },
};

function DisplayCard({
  className,
  icon,
  title,
  description,
  date,
  iconClassName,
  titleClassName,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-40 w-[28rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/50 hover:bg-muted/90",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="relative inline-block rounded-full bg-blue-800 p-1 flex-shrink-0">
          {icon}
        </span>
        <p className={cn("text-lg font-medium truncate", titleClassName)}>{title}</p>
      </div>
      <p className="text-base truncate">{description}</p>
      <p className="text-muted-foreground text-sm">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
  language?: 'en' | 'ru';
}

export default function DisplayCards({ cards, language = 'en' }: DisplayCardsProps) {
  const displayCards = cards || content[language].cards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
} 