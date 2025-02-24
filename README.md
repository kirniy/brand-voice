# Brand Voice AI Landing Page

A modern, responsive landing page for Brand Voice AI - a service that trains AI-powered chatbots with your brand's authentic voice. Built using MCP (Mission Control Protocol) servers for rapid development and real-time component generation.

## Overview

This landing page showcases Brand Voice AI's capabilities in analyzing Telegram and VK communications to create chat bots that truly represent your brand's personality. The page features a modern design with interactive elements, animations, and full bilingual support (Russian/English).

## Development Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Components**:
  - shadcn/ui for base components
  - MCP's 21st Century Components for modern UI elements
  - MCP Logo Search API for dynamic logo integration
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Internationalization**: Built-in language switching (EN/RU)
- **Development Tools**: MCP servers for rapid prototyping and component generation

## Project Structure

```
brand-voice/
├── app/                                    # Next.js app directory
│   ├── page.tsx                           # Main landing page
│   ├── layout.tsx                         # Root layout with metadata
│   └── providers.tsx                      # Theme and language providers
├── components/                            # React components
│   ├── blocks/   
│   │   └── feature-section-with-bento-grid.tsx  # Interactive feature grid with globe
│   ├── ui/                               # Reusable UI components
│   │   ├── avatar.tsx                    # User avatar component
│   │   ├── badge.tsx                     # Badge/tag component
│   │   ├── button.tsx                    # Custom button component
│   │   ├── card.tsx                      # Card container component
│   │   ├── carousel.tsx                  # Testimonial carousel
│   │   ├── display-cards.tsx             # Animated feature cards
│   │   ├── dock.tsx                      # macOS-style social media dock
│   │   ├── floating-language-menu.tsx    # Language switcher
│   │   ├── particle-gradient-background.tsx  # Animated background
│   │   ├── separator.tsx                 # Visual separator
│   │   ├── spotlight.tsx                 # Spotlight effect component
│   │   ├── switch.tsx                    # Toggle switch component
│   │   ├── testimonials.tsx              # Testimonial display
│   │   └── theme-toggle.tsx              # Dark/light mode toggle
│   ├── Footer.tsx                        # Site footer with newsletter
│   ├── FeaturesSection.tsx               # Unused old version of features section
│   ├── HeroSection.tsx                   # Hero with social dock
│   ├── icons.tsx                         # Custom icon components
│   ├── PricingSection.tsx                # Pricing plans display
│   └── TestimonialsSection.tsx           # Testimonials section
├── lib/
│   └── utils.ts                          # Utility functions
├── public/                               # Static assets
│   └── images/                           # Image assets
└── styles/                               # Global styles
```

## Component Details

### Main Sections

- **HeroSection**: Landing hero with animated title, description, and social media dock. Features language switcher and theme toggle.
- **FeaturesSection**: Wrapper for the bento grid features display.
- **PricingSection**: Interactive pricing cards with monthly/yearly toggle and bilingual pricing information.
- **TestimonialsSection**: Customer testimonials with carousel navigation.
- **Footer**: Site footer with newsletter signup, navigation links, and social media.

### Block Components

- **feature-section-with-bento-grid**: Interactive grid layout with animated globe and feature cards. Includes real-time adaptation showcase.

### UI Components

- **avatar**: User avatar display with image fallback
- **badge**: Styled badge/tag component for labels
- **button**: Custom button with variants
- **card**: Flexible card container with header/content/footer
- **carousel**: Smooth testimonial carousel
- **display-cards**: Animated feature cards with hover effects
- **dock**: macOS-style dock for social media links
- **floating-language-menu**: Language switcher with animation
- **particle-gradient-background**: Animated gradient background
- **separator**: Visual separator line
- **spotlight**: Mouse-following spotlight effect
- **switch**: Toggle switch for theme/billing
- **testimonials**: Testimonial card display
- **theme-toggle**: Dark/light mode switcher

### Utility Components

- **icons**: Custom icon components for social media and features

## MCP Integration

The project utilizes several MCP (Mission Control Protocol) services:

- **21st Century Components**: Used for generating modern UI components like cards, buttons, and interactive elements
- **Logo Search API**: Integrated for dynamic logo rendering and social media icons
- **Console & Network Monitoring**: MCP's built-in debugging tools for performance optimization
- **Screenshot & Element Selection**: Integrated MCP tools for visual debugging and component inspection

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/kirniy/brand-voice.git
cd brand-voice
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## MCP Development Tools

To use MCP tools during development:

1. Access component builder:

```bash
/ui <component-name>
```

2. Search for logos:

```bash
/logo <company-name>
```

3. Debug tools:

- `/console` - View console logs
- `/network` - Check network requests
- `/screenshot` - Take page screenshots
- `/select` - Inspect elements

## Deployment

The landing page is optimized for Vercel deployment:

```bash
vercel
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Kirill - [@kirniy](https://twitter.com/kirniy)

Project Link: [https://github.com/kirniy/brand-voice](https://github.com/kirniy/brand-voice)
