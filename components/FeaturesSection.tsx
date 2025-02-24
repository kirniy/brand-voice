"use client";

import * as React from "react";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";

interface FeaturesSectionProps {
  language: 'en' | 'ru';
  className?: string;
}

export function FeaturesSection({ 
  language = 'en',
  className
}: FeaturesSectionProps) {
  return (
    <FeaturesSectionWithBentoGrid language={language} />
  );
} 