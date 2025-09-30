# Design Guidelines: Marathon of Hope Foundation Merchandise Store

## Design Approach

**Selected Approach:** Reference-Based with E-commerce Excellence + Charitable Mission Integration

**Primary References:**
- Shopify's clean product presentation and checkout flow
- Patagonia's purpose-driven commerce aesthetic
- Nike's bold athletic imagery and product storytelling

**Core Principle:** Blend inspiring Terry Fox legacy imagery with modern e-commerce functionality. Every design decision should honor the foundation's mission while creating a seamless shopping experience.

## Color Palette

**Primary Colors:**
- Foundation Blue: 210 70% 45% (trust, hope, endurance)
- Canadian Red: 0 75% 50% (Terry Fox's iconic imagery)
- Deep Navy: 220 40% 20% (professional, grounded)

**Supporting Colors:**
- White/Off-white: 0 0% 98% (clean backgrounds)
- Light Gray: 220 15% 95% (subtle section breaks)
- Text Gray: 220 10% 30% (readable body text)

**Accent (Use Sparingly):**
- Warm Gold: 40 85% 55% (achievement, hope - only for CTAs and highlights)

## Typography

**Font Families:**
- Headlines: 'Inter', sans-serif (700, 800 weights) - modern, strong, athletic
- Body: 'Inter', sans-serif (400, 500, 600 weights) - cohesive system
- Accent/Quotes: 'Playfair Display', serif (600 italic) - for inspirational Terry Fox quotes

**Hierarchy:**
- Hero Headline: text-5xl lg:text-7xl font-bold
- Section Headers: text-3xl lg:text-4xl font-bold
- Product Titles: text-xl lg:text-2xl font-semibold
- Body Text: text-base lg:text-lg
- Captions: text-sm

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy:**
- Full-width hero and product grids: w-full with max-w-7xl inner container
- Content sections: max-w-6xl mx-auto px-6
- Product pages: max-w-5xl for optimal focus

**Grid Systems:**
- Product catalog: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Featured items: grid-cols-1 lg:grid-cols-2 gap-12
- Cart items: Single column with spacious py-6 separation

## Component Library

**Navigation:**
- Sticky header with foundation logo, product categories, cart icon
- Clean white background with subtle shadow on scroll
- Mobile: Hamburger menu with slide-in drawer

**Product Cards:**
- Large product image (4:5 aspect ratio)
- Product name, price, and quick "Add to Cart" button
- Hover: Subtle scale transform and shadow lift
- Color swatches displayed as small circles below image

**Hero Section:**
- Full-width inspirational image featuring Terry Fox running or marathon imagery
- Overlaid text: Foundation mission statement + primary CTA
- Height: min-h-[600px] lg:min-h-[700px]
- Gradient overlay for text readability: from-black/60 to-black/30

**Product Detail:**
- Two-column layout (image gallery left, details right)
- Size selector: Large pill buttons
- Color options: Square swatches with border on selected
- "Add to Cart" CTA: Large, prominent button
- Foundation impact statement below purchase area

**Shopping Cart:**
- Slide-out drawer from right side
- Item thumbnails with quantity adjusters
- Running subtotal with prominent checkout button
- Empty state: Inspirational message encouraging support

**Checkout Flow:**
- Single-page checkout with clear progress indicators
- Mocked Stripe payment form
- Order summary sidebar (sticky on desktop)
- Foundation impact messaging: "Your purchase supports cancer research"

**Footer:**
- Multi-column: About Foundation, Quick Links, Contact, Newsletter signup
- Social media links
- Charitable registration number and mission statement
- Terry Fox quote as footer tagline

## Images

**Required Images:**

1. **Hero Image (Primary):** Full-width heroic shot of Terry Fox running or modern marathon runners in Foundation gear. Should convey determination, hope, and athletic spirit. Dimensions: 1920x800px minimum

2. **Product Images:** 
   - T-shirts and shorts on clean white backgrounds (primary)
   - Lifestyle shots of people wearing merchandise while running/active (secondary)
   - Multiple angles per product (front, back, detail)
   - Dimensions: 800x1000px (4:5 ratio)

3. **Mission Section:** Image of Terry Fox or Foundation work in action, positioned in a 2-column layout alongside mission text

4. **Impact Statistics Banner:** Background image of marathon/runners with overlaid statistics about Foundation's impact

5. **Testimonial Section:** Small circular headshots of supporters (if testimonials included)

**Image Treatment:** All images maintain vibrant, high-energy color while product shots remain true-to-color for accurate representation

## Distinctive Features

**Inspirational Integration:**
- Terry Fox quote prominently featured on homepage
- Impact counter showing funds raised through merchandise
- "Run of Hope" badge/icon on products
- Foundation story section with timeline imagery

**E-commerce Excellence:**
- Quick view modal for products
- Size guide overlay with Canadian sizing
- Recently viewed products widget
- Related products suggestions

**Charitable Emphasis:**
- Clear messaging: "100% of profits support cancer research"
- Donation option at checkout
- Impact stories from researchers
- Volunteer/event signup CTAs alongside commerce

## Animations

**Minimal, Purposeful Motion:**
- Product card hover: transform scale-105 transition-transform duration-300
- Cart drawer: slide-in-right animation
- Success notifications: Subtle fade-in from top
- NO scroll-triggered animations or distracting effects

## Accessibility & Dark Mode

**Note:** This commerce experience prioritizes light mode for product accuracy. Dark mode toggle available but products always shown on light backgrounds for color fidelity. Maintain WCAG AA contrast standards throughout.