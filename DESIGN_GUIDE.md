# Wakalo Landing Page - Design Guide

## 🎨 Design Philosophy: "Tropical Modernism"

A fresh take on carpooling that feels distinctly West African yet globally sophisticated. The design combines warm, inviting community vibes with premium polish, creating an experience that builds trust while celebrating connection.

## 🌈 Color System

### Primary Palette - "Benin Sunset"
```
Forest Deep:   #064E3B - Deep, trustworthy foundation
Forest Mid:    #065F46 - Rich forest tones
Green Living:  #059669 - Active, vibrant energy
Mint Bright:   #34D399 - Electric, fresh CTAs
Mint Soft:     #6EE7B7 - Gentle highlights
```

### Warm Accents
```
Amber Gold:    #F59E0B - Sunset warmth
Coral Red:     #EF4444 - Energy and passion
Cream Soft:    #FEF3C7 - Warm neutrals
```

### Neutrals
```
Night Dark:    #0F172A - Rich backgrounds
Slate Range:   #1E293B → #F1F5F9 - Full spectrum
```

## ✨ Typography

### Font Stack
- **Body**: Plus Jakarta Sans (400-800) - Warm, humanist, matches the app
- **Display**: Space Grotesk (400-700) - Technical precision, geometric confidence
- **Numbers**: Space Grotesk (monospace variant) - Clean data presentation

### Type Scale
```
Hero Headline:     text-5xl → text-8xl (responsive)
Section Titles:    text-4xl → text-6xl
Card Titles:       text-xl → text-3xl
Body:             text-base → text-xl
Small:            text-sm → text-base
```

## 🎭 Motion & Animation

### Philosophy
High-impact orchestrated moments over scattered micro-interactions. Every animation serves purpose: delight, guidance, or feedback.

### Key Patterns
1. **Page Load**: Staggered reveals with 0.1s delays
2. **Scroll Reveals**: Fade up with 30px translation
3. **Hover States**: Subtle scale (1.05) + glow shadows
4. **Buttons**: Scale tap (0.95) with spring physics
5. **Counters**: Spring-animated with damping: 50, stiffness: 100

### Performance
- CSS-only animations where possible
- Framer Motion for complex orchestration
- GPU-accelerated transforms (translateZ(0))
- Reduced motion support via prefers-reduced-motion

## 📐 Layout & Spacing

### Grid System
```
Container:     max-w-7xl mx-auto
Padding:       px-6 sm:px-8 lg:px-12
Sections:      py-32 (desktop) | py-20 (mobile)
Component Gap: gap-6 → gap-12
```

### Border Radius - "Organic Curves"
```
sm:  0.5rem  (8px)   - Small elements
md:  1rem    (16px)  - Cards
lg:  1.5rem  (24px)  - Features
xl:  2rem    (32px)  - Hero elements
2xl: 3rem    (48px)  - Major containers
```

## 🎯 Component Breakdown

### 1. Hero Section
**Concept**: Immersive gradient mesh with floating orbs
- Full viewport height
- Parallax scrolling (50% Y transform)
- 3 animated gradient orbs (20s, 25s, 18s cycles)
- Grid overlay pattern (4rem × 4rem)
- Staggered content reveals

**Key Elements**:
- Beta badge with sparkles
- Gradient text treatment for "Ensemble"
- Primary CTA with hover animation
- 3-column floating stats
- Scroll indicator with bounce

### 2. Trust Bar
**Concept**: Animated counting statistics with icon badges
- 4-column grid (2-col mobile)
- Number animations on scroll into view
- Icon containers with hover rotate
- Mint gradient backgrounds

### 3. How It Works
**Concept**: Dual journey visualization (passengers vs drivers)
- 2-column split layout
- Connecting vertical lines between steps
- Gradient badges for each user type
- Icon circles with hover effects

### 4. Benefits (Bento Grid)
**Concept**: Asymmetric layout with varied card sizes
- 4-column grid with spanning elements
- Large (2×2), Medium (1×2), Small (1×1) cards
- Gradient borders with inner white backgrounds
- Hover lift and subtle glow

**Grid Structure**:
```
[Large  ][Medium]
[Large  ][Medium]
[Small 1][Small 2]
```

### 5. Living Route
**Concept**: Animated route visualization (signature piece)
- Flowing SVG path with gradient
- Animated background pattern
- Route cards with popularity bars
- Scroll-triggered path drawing

**Innovation**: The path "breathes" as you scroll, representing the living, dynamic nature of the platform.

### 6. Beta Signup
**Concept**: Split card with benefits + form
- Left: Dark gradient with perks list
- Right: White form with validation
- Animated submit states (idle/loading/success/error)
- Limited seats counter

### 7. FAQ
**Concept**: Clean accordion with smooth animations
- AnimatePresence for height animations
- Rotating plus icons → X
- Hover states on questions
- Bottom contact CTA

### 8. Footer
**Concept**: Rich, informative with pattern background
- 5-column grid (brand + 4 link columns)
- Contact info with icons
- Social links with hover lift
- Diagonal pattern overlay

## 🌟 Signature Design Elements

### 1. Grain Texture Overlay
Subtle noise texture applied globally via pseudo-element (3% opacity) adds tactile warmth.

### 2. Gradient Meshes
Multi-layered animated gradient orbs create depth and atmosphere without heaviness.

### 3. Living Elements
Everything breathes: patterns animate, routes flow, numbers count, cards lift.

### 4. Asymmetric Confidence
Breaking the grid intentionally (bento boxes, overlapping elements) creates visual interest.

### 5. Warm Technology
Tech stack (Next.js, Framer Motion) deployed with humanist warmth - not cold Silicon Valley.

## 🎨 Color Psychology

- **Green** (primary): Growth, trust, nature, eco-friendliness
- **Mint** (accent): Fresh, modern, energetic, optimistic
- **Amber**: Warmth, value, community, African sunset
- **Coral**: Passion, energy, urgency (CTAs)

## 📱 Responsive Behavior

### Breakpoints
```
sm:  640px   - Large phones
md:  768px   - Tablets
lg:  1024px  - Laptops
xl:  1280px  - Desktops
```

### Mobile-First Patterns
1. Stack columns vertically
2. Reduce font sizes by 1-2 steps
3. Simplify animations (fewer, faster)
4. Increase touch targets (min 48×48px)
5. Hide decorative elements on small screens

## 🚀 Performance Optimizations

1. **Fonts**: Swap strategy prevents FOIT
2. **Images**: Next.js Image optimization (when added)
3. **Animations**: GPU-accelerated, will-change sparingly
4. **Code Splitting**: Route-based (automatic in Next.js)
5. **CSS**: Tailwind purges unused styles

## 🎯 Accessibility

- **Color Contrast**: WCAG AA minimum (AAA preferred)
- **Focus States**: Visible on all interactive elements
- **Semantic HTML**: Proper heading hierarchy
- **Motion**: Respect prefers-reduced-motion
- **Forms**: Labels, error states, keyboard navigation

## 🔮 Future Enhancements

1. **Dark Mode**: Already structured in CSS vars, just needs toggle
2. **Micro-Animations**: Cursor followers, scroll progress
3. **3D Elements**: Three.js integration for hero
4. **Video**: Background ambient footage of Benin
5. **Localization**: French (current) + More languages

## 📦 Tech Stack

```
Framework:    Next.js 14 (App Router)
Styling:      Tailwind CSS v4
Animation:    Framer Motion
Icons:        Lucide React
Language:     TypeScript
Runtime:      Node.js
```

## 🎨 Design Inspiration Sources

- **BlaBlaCar**: Trust-building through community
- **Uber**: Clean, confident interfaces
- **Stripe**: Gradient meshes and micro-interactions
- **Vercel**: Typography-forward minimalism
- **African Patterns**: Geometric backgrounds

## 📝 Content Tone

- **Voice**: Warm, confident, community-focused
- **Language**: French (Benin market)
- **Style**: Benefits-driven, not feature-focused
- **Approach**: Transparent about beta status

---

**Built with passion for Wakalo - Voyagez Ensemble 🚗💚**
