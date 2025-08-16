# HDFrames Productions Website

A premium, dark-themed marketing and portfolio website for HDFrames Productions, built with Next.js 14, TypeScript, and Tailwind CSS. Features glassmorphism design, broadcast-standard quality showcases, and comprehensive business solutions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Dark Theme**: Premium glassmorphism design with subtle animations
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, fonts, and code splitting
- **Contact Forms**: Professional inquiry forms with validation
- **Component Library**: Reusable UI components with design system

## 🎨 Design System

### Color Palette
The design uses a sophisticated dark theme with brand colors derived from the HDFrames logo:

```css
/* Primary Brand Colors (Purple-Blue) */
--primary: 258 86% 65%
--primary-600: 258 86% 55%
--primary-700: 258 86% 45%

/* Accent Colors (Magenta-Purple) */
--accent: 288 84% 60%
--accent-600: 288 84% 50%

/* Surface Colors for Glassmorphism */
--background: 215 28% 5%
--surface: 215 25% 8%
--surface-2: 215 20% 12%
```

### Typography
- **Headings**: Inter font with tight tracking for editorial style
- **Body**: Inter with comfortable line height for readability
- **Scale**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

### Components
All components use consistent design tokens and follow accessibility best practices.

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── (marketing)/       # Marketing route group
│   ├── services/          # Services page
│   ├── work/             # Portfolio pages
│   ├── contact/          # Contact page
│   ├── about/            # About page
│   ├── legal/            # Legal pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── ui/               # Foundational UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── layout/           # Layout components
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── blocks/           # Page sections
│       ├── hero.tsx
│       ├── services-grid.tsx
│       └── testimonials.tsx
├── content/              # Content data (JSON/MDX)
├── lib/                  # Utilities and helpers
│   └── utils.ts
└── styles/
    └── globals.css       # Global styles and design tokens
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Quick Start

1. **Clone and install dependencies**
   ```bash
   cd hdframes-website
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Run static export (if needed)
npm run build && npm run export
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🎨 Customizing Design Tokens

### Colors
Update colors in `src/app/globals.css`:

```css
:root {
  /* Update brand colors */
  --primary: 258 86% 65%;
  --accent: 288 84% 60%;
  
  /* Surface colors for glassmorphism */
  --surface: 215 25% 8%;
  --glass: 215 25% 8% / 0.6;
}
```

### Typography
Modify fonts in `src/app/layout.tsx`:

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

### Spacing & Layout
Update Tailwind config in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    spacing: {
      "1": "0.25rem",   // 4px base
      "2": "0.5rem",    // 8px
      // ... more spacing tokens
    }
  }
}
```

## 📝 Content Management

### Adding Services
Update services in `src/components/blocks/services-grid.tsx`:

```typescript
const services = [
  {
    id: "new-service",
    title: "New Service",
    description: "Service description...",
    icon: ServiceIcon,
    features: ["Feature 1", "Feature 2"],
    // ... more properties
  }
];
```

### Testimonials
Modify testimonials in `src/components/blocks/testimonials.tsx`:

```typescript
const testimonials = [
  {
    id: "1",
    quote: "Client testimonial...",
    author: "Client Name",
    role: "Job Title",
    company: "Company Name",
    rating: 5
  }
];
```

### Contact Information
Update contact details in multiple files:
- `src/components/layout/footer.tsx` - Footer contact info
- `src/components/blocks/contact-form.tsx` - Contact form details
- `src/app/layout.tsx` - Meta contact information

## 🔧 Component Usage

### Using UI Components

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

<Button variant="primary" size="lg">
  Get Quote
</Button>

<Card glass="lg" hover>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

### Creating New Pages

```typescript
// src/app/new-page/page.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Page Title | HDFrames Productions",
  description: "Page description...",
};

export default function NewPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page content */}
      </main>
      <Footer />
    </>
  );
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command `npm run build`, publish directory `out`
- **AWS S3**: Use `npm run build && npm run export` for static hosting
- **Docker**: Dockerfile included for containerized deployment

## 📊 Performance Optimization

- **Images**: Use Next.js Image component with optimization
- **Fonts**: Google Fonts with `display: swap`
- **Code Splitting**: Automatic with App Router
- **Lazy Loading**: Components and images load on demand
- **Caching**: Optimized cache headers for static assets

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects user preferences

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript errors with `npm run type-check`
2. **Styling Issues**: Verify Tailwind classes and CSS variables
3. **Image Loading**: Ensure images are in `public/` directory
4. **Navigation**: Check route files in `src/app/` directory

### Development Tips

- Use TypeScript strict mode for better type safety
- Follow the established component patterns
- Test components in isolation
- Validate HTML for semantic correctness

## 📄 License

This project is proprietary software for HDFrames Productions. All rights reserved.

## 🤝 Support

For technical support or questions about this website:
- Email: tech@hdframes.co.uk
- Internal Documentation: See `/docs` folder
- Component Storybook: Run `npm run storybook` (if configured)

---

**HDFrames Productions** - Bringing Your Vision to Life in Broadcast-Standard Quality
