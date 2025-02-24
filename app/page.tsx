"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ru'>('ru');
  const { theme } = useTheme();

  return (
    <main className="relative min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative">
        <HeroSection
          language={language}
          onLanguageChange={(code) => setLanguage(code as 'en' | 'ru')}
          className="section-transition-bottom"
        />
        <FeaturesSection language={language} className="section-transition-top section-transition-bottom" />
        <TestimonialsSection language={language} className="section-transition-top section-transition-bottom" />
        <PricingSection language={language} className="section-transition-top" />
        
        {/* Footer */}
        <Footer theme={theme as 'light' | 'dark'} language={language} className="section-transition-top" />
      </div>
    </main>
  );
} 