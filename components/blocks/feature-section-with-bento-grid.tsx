import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import DisplayCards from "@/components/ui/display-cards";

interface FeaturesSectionWithBentoGridProps {
  language?: 'en' | 'ru';
}

// Skeleton Components
export const SkeletonOne = () => {
  return (
    <div className="relative flex py-4 px-2 gap-6 h-full">
      <div className="w-full p-4 mx-auto bg-white dark:bg-neutral-900 shadow-xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="/images/telegram-integration.webp"
            alt="Telegram Integration"
            width={800}
            height={800}
            className="h-[300px] w-full object-cover object-center rounded-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-40 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/images/vk-1.webp",
    "/images/vk-2.webp",
    "/images/vk-3.webp",
    "/images/vk-4.webp",
    "/images/vk-5.webp",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-4 gap-6 h-full overflow-hidden">
      <div className="flex flex-row -ml-10">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="VK Data Analysis"
              width="500"
              height="500"
              className="rounded-lg h-16 w-16 md:h-24 md:w-24 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="VK Data Analysis"
              width="500"
              height="500"
              className="rounded-lg h-16 w-16 md:h-24 md:w-24 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-10 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-10 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=b_-i6-kao-0"
      target="__blank"
      className="relative flex gap-6 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-[300px] flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-16 w-16 absolute z-10 inset-0 text-red-500 m-auto" />
          <Image
            src="/images/brand-voice-learning.webp"
            alt="Brand Voice Learning"
            width={800}
            height={800}
            className="h-full w-full object-cover object-center rounded-lg blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [55.7558, 37.6173], size: 0.1 }, // Moscow
        { location: [59.9343, 30.3351], size: 0.08 }, // St. Petersburg
        { location: [56.8389, 60.6057], size: 0.06 }, // Yekaterinburg
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-[400px] flex flex-col items-center justify-center relative bg-transparent dark:bg-transparent">
      <Globe className="absolute inset-0 m-auto" />
    </div>
  );
};

const content = {
  en: {
    title: "Everything you need",
    subtitle: "A comprehensive suite of features designed to help your brand voice thrive across platforms.",
    features: [
      {
        title: "Telegram Integration",
        description: "Seamlessly connect and analyze your Telegram channels and chats.",
        skeleton: <SkeletonOne />,
        className: "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
      },
      {
        title: "VK Data Analysis",
        description: "Extract and learn from your VK communications and posts.",
        skeleton: <SkeletonTwo />,
        className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
      },
      {
        title: "Brand Voice Learning",
        description: "Advanced AI algorithms to capture your unique brand personality.",
        skeleton: <SkeletonThree />,
        className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
      },
      {
        title: "Real-time Adaptation",
        description: "Bots that learn and improve from ongoing conversations.",
        skeleton: <SkeletonFour />,
        className: "col-span-1 md:col-span-3 lg:col-span-3 overflow-visible",
      },
    ]
  },
  ru: {
    title: "Всё необходимое",
    subtitle: "Полный набор функций, разработанных для развития голоса вашего бренда на всех платформах.",
    features: [
      {
        title: "Интеграция с Telegram",
        description: "Легкое подключение и анализ ваших Telegram каналов и чатов.",
        skeleton: <SkeletonOne />,
        className: "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
      },
      {
        title: "Анализ данных ВКонтакте",
        description: "Извлечение и обучение на основе ваших коммуникаций в ВК.",
        skeleton: <SkeletonTwo />,
        className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
      },
      {
        title: "Изучение голоса бренда",
        description: "Продвинутые алгоритмы ИИ для захвата уникальности вашего бренда.",
        skeleton: <SkeletonThree />,
        className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
      },
      {
        title: "Адаптация в реальном времени",
        description: "Боты, которые учатся и улучшаются в процессе общения.",
        skeleton: <SkeletonFour />,
        className: "col-span-1 md:col-span-3 lg:col-span-3 overflow-visible",
      },
    ]
  }
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export function FeaturesSectionWithBentoGrid({ language = 'en' }: FeaturesSectionWithBentoGridProps) {
  const t = content[language];

  return (
    <div className="relative z-20 py-10 lg:py-20 w-full">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h4 className="text-3xl lg:text-4xl lg:leading-tight max-w-4xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          {t.title}
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          {t.subtitle}
        </p>

        {/* Spacer */}
        <div className="h-16" />

        {/* Display Cards */}
        <div className="max-w-4xl mx-auto relative">
          <DisplayCards language={language} />
        </div>

        {/* Spacer */}
        <div className="h-32" />

        <div className="relative mt-8">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 xl:border rounded-lg dark:border-neutral-800">
            {t.features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 