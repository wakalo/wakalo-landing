# Wakalo Landing Page 🚗💚

**Voyagez Ensemble** - The official landing page for Wakalo, Benin's revolutionary carpooling platform.

![Wakalo](https://img.shields.io/badge/Status-Beta%20Program-34D399?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌟 Overview

A production-grade, meticulously crafted landing page featuring:

- 🎨 **Tropical Modernism Design** - Warm, sophisticated, distinctly African aesthetic
- ⚡ **Blazing Fast Performance** - Next.js 14 + Tailwind CSS v4
- 🎭 **Orchestrated Animations** - Framer Motion for delightful interactions
- 📱 **Mobile-First Responsive** - Perfect on all devices
- ♿ **Accessible** - WCAG AA compliant
- 🌍 **i18n Ready** - French primary, expandable

## 🎨 Design Philosophy

**"Tropical Modernism meets Digital Warmth"**

This isn't generic SaaS design. We've created a unique visual language that:
- Celebrates West African warmth and community
- Builds trust through sophisticated polish
- Uses "living" animations (flowing routes, breathing gradients)
- Breaks traditional grids with asymmetric layouts
- Employs sunset-inspired color palette

→ Read the full [Design Guide](./DESIGN_GUIDE.md)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## 📦 Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 14 (App Router) | Best-in-class React framework, excellent SEO |
| **Styling** | Tailwind CSS v4 | Rapid development, optimal bundle size |
| **Animation** | Framer Motion | Declarative, performant animations |
| **Language** | TypeScript | Type safety, better DX |
| **Icons** | Lucide React | Beautiful, consistent icon system |
| **Fonts** | Google Fonts (Plus Jakarta Sans, Space Grotesk) | Web-safe, optimized loading |

## 🎨 Color Palette

```css
/* Primary - Forest & Mint */
--forest-deep:   #064E3B  /* Trust, foundation */
--green-living:  #059669  /* Active, vibrant */
--mint-bright:   #34D399  /* CTAs, energy */

/* Warm Accents - Sunset */
--amber-gold:    #F59E0B  /* Warmth, value */
--coral-red:     #EF4444  /* Passion, urgency */
--cream-soft:    #FEF3C7  /* Gentle backgrounds */
```

## 📐 Project Structure

```
wakalo-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Design system, CSS variables
├── components/
│   ├── Hero.tsx            # Animated hero with gradient mesh
│   ├── TrustBar.tsx        # Counting statistics
│   ├── HowItWorks.tsx      # Dual journey visualization
│   ├── Benefits.tsx        # Asymmetric bento grid
│   ├── LivingRoute.tsx     # Signature animated routes (🌟)
│   ├── BetaSignup.tsx      # Beta program form
│   ├── FAQ.tsx             # Accordion Q&A
│   └── Footer.tsx          # Comprehensive footer
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/                 # Static assets
```

## ✨ Key Features

### 1. Hero Section
- Full-viewport immersive gradient mesh
- 3 animated floating orbs (different speeds)
- Parallax scrolling effects
- Staggered content reveals
- Scroll indicator with bounce

### 2. Living Route Visualization (Signature Feature)
- Animated SVG path that "draws" on scroll
- Popular routes with real pricing
- Popularity bars with smooth animations
- Flowing background patterns
- **This is what makes the page unforgettable**

### 3. Bento Grid Benefits
- Asymmetric layout (large, medium, small cards)
- Gradient borders with hover effects
- Intelligent responsive behavior
- Micro-interactions on every element

### 4. Beta Signup
- Split-card design (benefits + form)
- Real-time validation
- Animated states (idle/loading/success/error)
- Limited seats counter

### 5. Performance
- Optimized fonts with `next/font`
- CSS-only animations where possible
- GPU-accelerated transforms
- Lazy-loaded components
- Minimal JavaScript bundle

## 🎭 Animation Strategy

**Philosophy**: High-impact orchestrated moments > scattered micro-interactions

**Patterns**:
- Page load: Staggered reveals (0.1s delays)
- Scroll: Fade up + translate (30px)
- Hover: Scale 1.05 + glow shadow
- Tap: Scale 0.95 with spring physics
- Counters: Spring animation (damping: 50, stiffness: 100)

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- `sm`: 640px (Large phones)
- `md`: 768px (Tablets)
- `lg`: 1024px (Laptops)
- `xl`: 1280px (Desktops)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Deploy via Vercel Dashboard
# Or use CLI:
vercel
```

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Development

```bash
# Run dev server with hot reload
npm run dev

# Type check
npm run build

# Lint
npm run lint
```

## 🎯 Customization

### Colors
Edit `app/globals.css` → `:root` CSS variables

### Content
Each component has hardcoded content for now. For dynamic content:
1. Extract to `constants/` folder
2. Or connect to CMS (Contentful, Sanity, etc.)

### Animations
Adjust timings in individual components:
```tsx
transition={{ duration: 0.5, delay: 0.1 }}
```

## 🔮 Future Enhancements

- [ ] Dark mode toggle (CSS vars already structured)
- [ ] Connect beta signup to Supabase
- [ ] Add Testimonials carousel with real data
- [ ] Video background for hero
- [ ] 3D elements with Three.js
- [ ] Multi-language support (i18n)
- [ ] Analytics integration
- [ ] Performance monitoring

## 📊 Performance Benchmarks

Target metrics (Lighthouse):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🤝 Contributing

This is a private project for Wakalo. For questions or suggestions, contact the team.

## 📄 License

© 2025 Wakalo. All rights reserved.

---

**Built with passion for Wakalo**
*Voyagez Ensemble • Économisez Ensemble* 🚗💚
