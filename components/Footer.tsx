import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

interface FooterProps {
  className?: string
  theme?: 'light' | 'dark'
  language?: 'en' | 'ru'
}

interface FooterSection {
  title: string
  links: {
    text: string
    href: string
  }[]
}

interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

const content = {
  en: {
    sections: [
      {
        title: "Product",
        links: [
          { text: "Features", href: "/features" },
          { text: "Pricing", href: "/pricing" },
          { text: "Documentation", href: "/docs" },
        ]
      },
      {
        title: "Company", 
        links: [
          { text: "About", href: "/about" },
          { text: "Blog", href: "/blog" },
          { text: "Careers", href: "/careers" },
        ]
      },
      {
        title: "Resources",
        links: [
          { text: "Support", href: "/support" },
          { text: "Contact", href: "/contact" },
          { text: "Privacy", href: "/privacy" },
        ]
      }
    ],
    newsletter: {
      title: "Subscribe to our newsletter",
      placeholder: "Enter your email",
      button: "Subscribe"
    },
    copyright: "© {year} Brand Voice AI, Inc. All rights reserved."
  },
  ru: {
    sections: [
      {
        title: "Продукт",
        links: [
          { text: "Возможности", href: "/features" },
          { text: "Цены", href: "/pricing" },
          { text: "Документация", href: "/docs" },
        ]
      },
      {
        title: "Компания", 
        links: [
          { text: "О нас", href: "/about" },
          { text: "Блог", href: "/blog" },
          { text: "Вакансии", href: "/careers" },
        ]
      },
      {
        title: "Ресурсы",
        links: [
          { text: "Поддержка", href: "/support" },
          { text: "Контакты", href: "/contact" },
          { text: "Конфиденциальность", href: "/privacy" },
        ]
      }
    ],
    newsletter: {
      title: "Подпишитесь на нашу рассылку",
      placeholder: "Введите ваш email",
      button: "Подписаться"
    },
    copyright: "© {year} Brand Voice AI, Inc. Все права защищены."
  }
}

const socialLinks: SocialLink[] = [
  {
    icon: <Facebook className="h-5 w-5" />,
    href: "https://facebook.com",
    label: "Facebook"
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com",
    label: "Twitter"  
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com",
    label: "Instagram"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com",
    label: "GitHub"
  }
]

export function Footer({
  className,
  theme = 'light',
  language = 'en'
}: FooterProps) {
  const isDark = theme === 'dark'
  const t = content[language]
  
  return (
    <footer className={cn(
      "w-full border-t relative",
      isDark ? "bg-[#0B0C0F] border-[#16181D]" : "bg-white border-gray-200",
      "section-transition-top",
      className
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Sections */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {t.sections.map((section, i) => (
              <div key={i}>
                <h3 className={cn(
                  "text-sm font-semibold mb-6",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href={link.href}
                        className={cn(
                          "text-sm hover:opacity-80 transition-opacity",
                          isDark ? "text-gray-400" : "text-gray-600"
                        )}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div>
              <h3 className={cn(
                "text-sm font-semibold mb-6",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {t.newsletter.title}
              </h3>
              <form className="mt-2 sm:flex sm:max-w-md">
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  className={cn(
                    "w-full min-w-0 px-4 py-2 text-sm rounded-md border",
                    isDark 
                      ? "bg-[#16181D] border-[#2E3038] text-white placeholder:text-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  )}
                />
                <Button 
                  className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto"
                  variant={isDark ? "outline" : "default"}
                >
                  {t.newsletter.button}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={cn(
              "text-sm",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              {t.copyright.replace("{year}", new Date().getFullYear().toString())}
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={cn(
                    "hover:opacity-80 transition-opacity",
                    isDark ? "text-gray-400" : "text-gray-600" 
                  )}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 