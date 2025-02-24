"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import ParticleGradientBackground from "@/components/ui/particle-gradient-background";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const content = {
  en: {
    badge: "Pricing",
    title: "Simple, transparent pricing",
    description: "Choose the perfect plan for your brand voice needs",
    billing: {
      monthly: "Monthly",
      yearly: "Yearly",
      period: "/mo"
    },
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Perfect for small businesses",
        monthlyPrice: "$29",
        yearlyPrice: "$24",
        features: [
          "Up to 3 chat bots",
          "Basic brand voice analysis",
          "Telegram integration",
          "Community support",
          "5K messages/month"
        ],
        button: {
          text: "Get Started",
          url: "#"
        }
      },
      {
        id: "pro",
        name: "Professional",
        description: "For growing brands",
        monthlyPrice: "$79",
        yearlyPrice: "$64",
        features: [
          "Up to 10 chat bots",
          "Advanced brand voice analysis",
          "Telegram & VK integration",
          "Priority support",
          "50K messages/month",
          "Custom training data"
        ],
        button: {
          text: "Upgrade Now",
          url: "#"
        }
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For large organizations",
        monthlyPrice: "Custom",
        yearlyPrice: "Custom",
        features: [
          "Unlimited chat bots",
          "Enterprise brand voice analysis",
          "All platform integrations",
          "24/7 dedicated support",
          "Unlimited messages",
          "Custom features",
          "SLA guarantee"
        ],
        button: {
          text: "Contact Sales",
          url: "#"
        }
      }
    ]
  },
  ru: {
    badge: "Тарифы",
    title: "Простые и прозрачные цены",
    description: "Выберите идеальный план для вашего бренда",
    billing: {
      monthly: "Ежемесячно",
      yearly: "Ежегодно",
      period: "/мес"
    },
    plans: [
      {
        id: "starter",
        name: "Начальный",
        description: "Идеально для малого бизнеса",
        monthlyPrice: "2900₽",
        yearlyPrice: "2400₽",
        features: [
          "До 3 чат-ботов",
          "Базовый анализ голоса бренда",
          "Интеграция с Telegram",
          "Поддержка сообщества",
          "5 тыс. сообщений/месяц"
        ],
        button: {
          text: "Начать",
          url: "#"
        }
      },
      {
        id: "pro",
        name: "Профессиональный",
        description: "Для растущих брендов",
        monthlyPrice: "7900₽",
        yearlyPrice: "6400₽",
        features: [
          "До 10 чат-ботов",
          "Продвинутый анализ голоса бренда",
          "Интеграция с Telegram и ВК",
          "Приоритетная поддержка",
          "50 тыс. сообщений/месяц",
          "Пользовательские данные обучения"
        ],
        button: {
          text: "Улучшить",
          url: "#"
        }
      },
      {
        id: "enterprise",
        name: "Корпоративный",
        description: "Для крупных организаций",
        monthlyPrice: "Индивидуально",
        yearlyPrice: "Индивидуально",
        features: [
          "Безлимитные чат-боты",
          "Корпоративный анализ голоса бренда",
          "Все интеграции",
          "Выделенная поддержка 24/7",
          "Безлимитные сообщения",
          "Индивидуальные функции",
          "Гарантия SLA"
        ],
        button: {
          text: "Связаться с продажами",
          url: "#"
        }
      }
    ]
  }
};

export function PricingSection({ 
  language = 'en',
  className
}: { 
  language: 'en' | 'ru';
  className?: string;
}) {
  const [isYearly, setIsYearly] = React.useState(false);
  const { theme } = useTheme();
  const t = content[language];

  return (
    <section className={cn("relative py-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50", className)}>
      {/* Background Animation */}
      <ParticleGradientBackground
        particleCount={50}
        particleSize={2}
        particleColor={theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}
        gradientColors={[
          theme === 'dark' ? '#0A0A0A' : '#ffffff',
          '#2979FF',
          '#FF80AB',
          '#FF6D00',
          '#FFD600',
          '#00E676',
          '#3D5AFE'
        ]}
        gradientStops={[0, 50, 60, 70, 80, 90, 100]}
        animationSpeed={0.02}
        breathingRange={5}
        containerClassName="absolute inset-0 z-0"
      />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge variant="outline" className="px-3 py-1 bg-background/80 backdrop-blur-sm">
            {t.badge}
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t.title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.description}
          </p>

          <div className="flex items-center gap-4 p-2 rounded-full bg-background/80 backdrop-blur-sm">
            <span className="text-sm font-medium">{t.billing.monthly}</span>
            <Switch
              checked={isYearly}
              onCheckedChange={() => setIsYearly(!isYearly)}
            />
            <span className="text-sm font-medium">{t.billing.yearly}</span>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:max-w-5xl mx-auto w-full">
            {t.plans.map((plan) => (
              <Card 
                key={plan.id} 
                className="flex flex-col backdrop-blur-md bg-background/80 border-background/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className={cn(
                      "text-4xl font-bold",
                      plan.monthlyPrice === "Custom" || plan.monthlyPrice === "Индивидуально" ? "text-2xl" : ""
                    )}>
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== "Custom" && plan.monthlyPrice !== "Индивидуально" && (
                      <span className="text-muted-foreground ml-1">{t.billing.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <Separator className="my-4 bg-background/20" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full bg-primary/90 hover:bg-primary transition-colors" 
                    onClick={() => window.location.href = plan.button.url}
                  >
                    {plan.button.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 