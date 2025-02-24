"use client";

import { Testimonials } from "@/components/ui/testimonials"

const testimonials = {
  en: [
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      name: "Alex Thompson",
      username: "@techstart_ceo",
      text: "The brand voice consistency across our Telegram channels has improved dramatically. Our engagement rates are up by 40%!",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      name: "Maria Rodriguez",
      username: "@socialflow_maria",
      text: "Training chat bots with our brand's voice was surprisingly easy. The AI picks up on our communication style perfectly.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
      name: "Ivan Petrov",
      username: "@digitalwave_ceo",
      text: "A game-changer for our multi-language communication. The bots maintain our brand personality across English and Russian channels.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      name: "Sarah Chen",
      username: "@innovate_ai",
      text: "The natural language processing is impressive. Our chatbots now sound exactly like our brand - friendly, professional, and authentic.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      name: "Dmitry Volkov",
      username: "@tech_pioneer",
      text: "Implementing BrandVoice AI was seamless. The way it preserves our unique communication style is remarkable.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Emma Watson",
      username: "@digital_emma",
      text: "Our customer service has transformed. The chatbots maintain our brand's personality while handling inquiries efficiently.",
      social: "https://t.me/brandvoiceai"
    }
  ],
  ru: [
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      name: "Алексей Томсон",
      username: "@techstart_ceo",
      text: "Согласованность голоса бренда в наших Telegram-каналах значительно улучшилась. Показатели вовлеченности выросли на 40%!",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      name: "Мария Родригес",
      username: "@socialflow_maria",
      text: "Обучение чат-ботов голосу нашего бренда оказалось удивительно простым. ИИ отлично улавливает наш стиль общения.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
      name: "Иван Петров",
      username: "@digitalwave_ceo",
      text: "Это прорыв для нашей многоязычной коммуникации. Боты сохраняют индивидуальность бренда как в русских, так и в английских каналах.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      name: "Сара Чен",
      username: "@innovate_ai",
      text: "Обработка естественного языка впечатляет. Наши чат-боты теперь звучат точно как наш бренд - дружелюбно, профессионально и аутентично.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      name: "Дмитрий Волков",
      username: "@tech_pioneer",
      text: "Внедрение BrandVoice AI прошло безупречно. То, как он сохраняет наш уникальный стиль общения, просто замечательно.",
      social: "https://t.me/brandvoiceai"
    },
    {
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      name: "Эмма Уотсон",
      username: "@digital_emma",
      text: "Наше обслуживание клиентов преобразилось. Чат-боты сохраняют индивидуальность бренда при обработке запросов.",
      social: "https://t.me/brandvoiceai"
    }
  ]
};

export function TestimonialsSection({ 
  language = 'en',
  className
}: { 
  language: 'en' | 'ru';
  className?: string;
}) {
  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <Testimonials 
          testimonials={testimonials[language]}
          language={language}
          className={className}
        />
      </div>
    </div>
  );
} 