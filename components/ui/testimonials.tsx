"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TelegramIcon } from "@/components/icons"

interface Testimonial {
  image: string
  name: string
  username: string
  text: string
  social: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  language: 'en' | 'ru'
  className?: string
}

const content = {
  en: {
    title: "What our clients say",
    description: "Hear from the brands that have transformed their communication with our AI",
    loadMore: "Load More",
    viewProfile: "View Profile"
  },
  ru: {
    title: "Что говорят наши клиенты",
    description: "Узнайте, как бренды трансформировали свое общение с помощью нашего ИИ",
    loadMore: "Загрузить еще",
    viewProfile: "Смотреть профиль"
  }
}

const INITIAL_DISPLAY_COUNT = 3

export function Testimonials({ testimonials, language, className }: TestimonialsProps) {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT)
  const t = content[language]

  const showLoadMore = displayCount < testimonials.length
  const displayedTestimonials = testimonials.slice(0, displayCount)

  return (
    <div className={cn("flex flex-col items-center gap-16", className)}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 rounded-xl border bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.username}
                </div>
              </div>
            </div>
            <p className="flex-grow text-muted-foreground">
              {testimonial.text}
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(testimonial.social, '_blank')}
            >
              <TelegramIcon className="w-4 h-4 mr-2" />
              {t.viewProfile}
            </Button>
          </div>
        ))}
      </div>

      {showLoadMore && (
        <Button
          variant="outline"
          size="lg"
          onClick={() => setDisplayCount(prev => prev + INITIAL_DISPLAY_COUNT)}
        >
          {t.loadMore}
        </Button>
      )}
    </div>
  )
} 