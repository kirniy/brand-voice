"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Spotlight from "@/components/ui/spotlight"
import FloatingLanguageMenu from "@/components/ui/floating-language-menu"
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock"
import { TelegramIcon, VKIcon, WhatsAppIcon, InstagramIcon } from '@/components/icons'

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  language?: 'en' | 'ru'
  onLanguageChange?: (code: string) => void
}

const content = {
  en: {
    badge: "AI-Powered Chat Bots",
    title: "Brand Voice AI",
    subtitle: {
      regular: "Train chat bots with your ",
      gradient: "authentic brand voice"
    },
    description: "Preserve and expand your brand voice across messaging platforms. Our AI analyzes your Telegram and VK communications to create chat bots that truly represent your brand's personality.",
    ctaText: "Start Training",
    features: [
      "Telegram & VK data integration",
      "Natural language processing",
      "Brand voice preservation"
    ]
  },
  ru: {
    badge: "Чат-боты на базе ИИ",
    title: "Голос бренда ИИ",
    subtitle: {
      regular: "Обучайте чат-ботов вашим ",
      gradient: "фирменным стилем общения"
    },
    description: "Сохраняйте и расширяйте голос вашего бренда на платформах обмена сообщениями. Наш ИИ анализирует ваши коммуникации в Telegram и ВКонтакте для создания чат-ботов, которые по-настоящему представляют индивидуальность вашего бренда.",
    ctaText: "Начать обучение",
    features: [
      "Интеграция с Telegram и ВК",
      "Обработка естественного языка", 
      "Сохранение голоса бренда"
    ]
  }
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' }
];

const RetroGrid = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [perspective:200px] opacity-40">
      <div className="absolute inset-0 [transform:rotateX(65deg)]">
        <div className="animate-grid [background-image:linear-gradient(to_right,#4a4a4a_1px,transparent_0),linear-gradient(to_bottom,#4a4a4a_1px,transparent_0)] [background-size:50px_50px] [height:100%] [transform-origin:100%_0_0] [width:100%] dark:[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_0),linear-gradient(to_bottom,#2a2a2a_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const socialLinks = [
  {
    icon: <div className="w-8 h-8 flex items-center justify-center"><TelegramIcon /></div>,
    href: "https://t.me/brandvoiceai",
    label: "Telegram"
  },
  {
    icon: <div className="w-8 h-8 flex items-center justify-center"><VKIcon /></div>,
    href: "https://vk.com/brandvoiceai",
    label: "VK"
  },
  {
    icon: <div className="w-8 h-8 flex items-center justify-center"><WhatsAppIcon /></div>,
    href: "https://wa.me/brandvoiceai",
    label: "WhatsApp"
  },
  {
    icon: <div className="w-8 h-8 flex items-center justify-center"><InstagramIcon /></div>,
    href: "https://instagram.com/brandvoiceai",
    label: "Instagram"
  }
];

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, language = 'en', onLanguageChange, ...props }, ref) => {
    const t = content[language]

    return (
      <div className={cn("relative h-[85vh]", className)} ref={ref} {...props}>
        <div className="absolute inset-0 z-[0] bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        <section className="relative h-full mx-auto z-1">
          <RetroGrid />
          <Spotlight className="top-0 left-0" size={800} />
          
          <div className="h-full max-w-screen-xl z-10 mx-auto px-4 flex flex-col">
            <div className="space-y-8 max-w-3xl mx-auto text-center mt-[15vh]">
              <Badge variant="outline" className="mx-auto">
                {t.badge}
              </Badge>

              <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-medium mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                {t.title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>

              <h2 className="text-4xl tracking-tighter font-bold bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                {t.subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                  {t.subtitle.gradient}
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t.description}
              </p>

              <div className="flex flex-col items-center gap-6">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-opacity">
                  {t.ctaText}
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl">
                  {t.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-white/5 border border-gray-200 dark:border-gray-800 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links Dock */}
                <div className="relative">
                  <Dock 
                    magnification={60} 
                    distance={100}
                    className="backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 py-3"
                  >
                    {socialLinks.map((social, i) => (
                      <DockItem key={i}>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-full w-full flex items-center justify-center"
                        >
                          <DockIcon className="flex items-center justify-center">
                            {social.icon}
                          </DockIcon>
                          <DockLabel>{social.label}</DockLabel>
                        </a>
                      </DockItem>
                    ))}
                  </Dock>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FloatingLanguageMenu
          languages={languages}
          currentLanguage={language}
          onLanguageChange={onLanguageChange || (() => {})}
        />
      </div>
    )
  }
)

HeroSection.displayName = "HeroSection"

export { HeroSection } 