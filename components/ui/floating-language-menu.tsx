"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Language = {
  code: string;
  name: string;
  flag?: string;
};

type FloatingLanguageMenuProps = {
  languages: Language[];
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
  className?: string;
};

const FloatingLanguageMenu = ({
  languages,
  currentLanguage,
  onLanguageChange,
  className,
}: FloatingLanguageMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  return (
    <div className={cn("fixed bottom-8 right-8 z-50", className)}>
      <Button
        onClick={toggleMenu}
        className="flex items-center gap-2 bg-[#11111198] hover:bg-[#111111d1] shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-full px-4"
      >
        <Globe className="w-4 h-4" />
        <span>{getCurrentLanguage()?.code.toUpperCase()}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut"
            }}
            className="absolute bottom-14 right-0 mb-2"
          >
            <div className="bg-[#11111198] backdrop-blur-sm rounded-xl shadow-lg p-2 min-w-[120px]">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => {
                    onLanguageChange(language.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg",
                    "hover:bg-white/10 transition-colors",
                    "text-white/90 hover:text-white"
                  )}
                  whileHover={{ x: 4 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <span>{language.name}</span>
                  {currentLanguage === language.code && (
                    <Check className="w-4 h-4 ml-auto" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingLanguageMenu; 