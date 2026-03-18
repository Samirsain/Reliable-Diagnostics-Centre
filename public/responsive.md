# ╔══════════════════════════════════════════════════════════════════╗
# ║  MOBILE-FRIENDLY PROMPT                                         ║
# ║  Reliable Diagnostics Centre — Hanumangarh                      ║
# ║  Stack: Next.js 14 + Tailwind CSS + shadcn/ui                   ║
# ╚══════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PASTE THIS INTO CURSOR / COPILOT / V0 CHAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Make this entire website fully mobile-friendly and responsive.
This is a medical diagnostic centre website for
Reliable Diagnostics Centre, Hanumangarh.
Stack: Next.js 14, Tailwind CSS, shadcn/ui, Framer Motion.

Follow every rule below exactly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 1 — BREAKPOINTS TO USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Always use Tailwind's mobile-first breakpoints:

  default  →  0px – 639px     (mobile phones)
  sm:      →  640px – 767px   (large phones / small tablets)
  md:      →  768px – 1023px  (tablets / iPad)
  lg:      →  1024px – 1279px (small laptops)
  xl:      →  1280px+         (desktops)

Write mobile styles FIRST (no prefix),
then add sm:, md:, lg:, xl: overrides.

Example pattern:
  className="text-2xl md:text-3xl lg:text-5xl"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 2 — NAVBAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile navbar rules:
- Hide desktop nav links on mobile:  hidden lg:flex
- Show hamburger menu button on mobile: flex lg:hidden
- Use shadcn <Sheet> for mobile menu drawer (slides from right)
- Sheet should contain:
    * Logo at top
    * All nav links stacked vertically (gap-6, text-lg)
    * "Book a Test" CTA button full width at bottom
    * Phone number with call icon
    * WhatsApp link
- Hamburger icon: use Lucide <Menu> icon, close with <X>
- Navbar padding: px-4 sm:px-6 lg:px-16
- Logo text size: text-sm lg:text-base

```tsx
// Navbar.tsx mobile pattern
<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md
                border-b border-slate-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16
                  flex items-center justify-between h-16 lg:h-20">

    {/* Logo - always visible */}
    <Logo />

    {/* Desktop links - hidden on mobile */}
    <div className="hidden lg:flex items-center gap-8">
      <NavLinks />
    </div>

    {/* Desktop CTA - hidden on mobile */}
    <div className="hidden lg:flex items-center gap-3">
      <RatingBadge />
      <BookButton />
    </div>

    {/* Mobile: Call button + Hamburger */}
    <div className="flex lg:hidden items-center gap-2">
      <a href="tel:07737774617"
         className="flex items-center gap-1 text-brand-blue
                    text-xs font-semibold bg-brand-bg-light
                    px-3 py-2 rounded-full">
        <PhoneIcon className="w-3 h-3" />
        Call
      </a>
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-lg hover:bg-slate-100">
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
          <MobileMenu />
        </SheetContent>
      </Sheet>
    </div>
  </div>
</nav>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 3 — HERO SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile hero rules:
- Single column on mobile, 2-col on lg:
  grid-cols-1 lg:grid-cols-2
- Heading size: text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
- Body text: text-sm sm:text-base
- Hide right image panel (floating doctor card) on mobile: hidden lg:flex
- Show a compact rating pill below heading on mobile instead
- Action buttons: full-width stack on mobile, row on sm:
  flex flex-col sm:flex-row gap-3
- Padding: pt-24 pb-12 px-4 sm:px-6 lg:pt-32 lg:pb-20 lg:px-16
- Remove large watermark text on mobile: hidden lg:block

```tsx
// Hero.tsx mobile pattern
<section className="bg-gradient-hero min-h-[100svh] lg:min-h-screen
                    relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16
                  grid grid-cols-1 lg:grid-cols-[55%_45%]
                  items-center gap-8 lg:gap-12
                  pt-24 pb-16 lg:pt-32 lg:pb-20 min-h-[100svh] lg:min-h-screen">

    {/* Left — Text */}
    <div className="text-white text-center lg:text-left">
      <div className="section-kicker justify-center lg:justify-start">
        <span>Hanumangarh's Most Trusted Lab</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem]
                     font-heading font-bold leading-[1.15] mb-4">
        Your Health Deserves<br/>
        the Most <em className="text-cyan-200 italic">Accurate Diagnosis.</em>
      </h1>

      {/* Mobile rating - shows only on mobile */}
      <div className="flex items-center justify-center lg:hidden
                      gap-2 mb-4">
        <span className="text-amber-300 font-bold text-lg">4.9 ★</span>
        <span className="text-white/60 text-sm">· 46 Google Reviews</span>
      </div>

      <p className="font-hindi text-white/70 text-sm mb-3 lg:hidden">
        सटीक जाँच — तेज़ रिपोर्ट — आपके घर तक
      </p>

      <p className="text-white/75 text-sm sm:text-base
                    leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
        Combining advanced technology with genuine care —
        precise reports delivered fast, right here at Bharat Mata Chowk.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-3
                      justify-center lg:justify-start">
        <a href="#contact" className="btn-primary text-center py-3.5">
          Book a Test
        </a>
        <a href="#services" className="btn-ghost-dark text-center py-3.5">
          Our Services
        </a>
      </div>

      {/* Social proof */}
      <p className="text-white/50 text-xs mt-5">
        Trusted by families across Hanumangarh
      </p>
    </div>

    {/* Right — hidden on mobile */}
    <div className="hidden lg:flex ...">
      {/* Doctor image + floating cards */}
    </div>
  </div>
</section>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 4 — ALL SECTIONS: PADDING & SPACING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Standard section padding (apply to every section):

```tsx
// Outer section
<section className="py-14 sm:py-16 lg:py-24">
  // Inner container
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
    ...
  </div>
</section>
```

Heading sizes:
  Section h2:  text-2xl sm:text-3xl lg:text-4xl
  Card h3:     text-base sm:text-lg
  Body text:   text-sm sm:text-base
  Kicker:      text-xs font-bold tracking-widest uppercase

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 5 — FEATURE STRIP (3 cards)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Single col mobile → 3 col desktop
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
  {FEATURES.map(f => (
    <div className="card-base p-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-gradient-light
                      flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-brand-blue" />
      </div>
      <h3 className="text-base font-heading font-bold text-slate-800 mb-2">
        {f.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
    </div>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 6 — ABOUT SPLIT SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Stack on mobile, 2 col on lg
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16
                items-center">

  {/* Image side */}
  <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
    <Image
      src={IMAGES.aboutDoctor}
      width={560} height={620}
      className="w-full h-[300px] sm:h-[400px] lg:h-[520px]
                 object-cover rounded-2xl lg:rounded-3xl shadow-card-lg"
      alt="Lab professional"
    />
    {/* Stats card - adjusted for mobile */}
    <div className="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-6
                    bg-white rounded-xl lg:rounded-2xl
                    p-3 lg:p-5 shadow-card-lg">
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl
                        bg-gradient-btn flex items-center justify-center">
          <TrophyIcon className="w-4 h-4 lg:w-6 lg:h-6 text-white"/>
        </div>
        <div>
          <p className="font-bold text-lg lg:text-2xl text-slate-800
                        leading-none">4.9★</p>
          <p className="text-slate-400 text-[0.6rem] lg:text-xs">
            Hanumangarh's #1 Lab
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Text side */}
  <div className="text-center lg:text-left">
    ...
    {/* Highlights: 2 col on all sizes */}
    <div className="grid grid-cols-2 gap-3 my-6">
      {ABOUT.highlights.map(h => (
        <div className="flex items-center gap-2 bg-brand-bg-light
                        rounded-xl p-3 text-left">
          <span className="text-lg">{h.icon}</span>
          <span className="text-slate-700 text-xs sm:text-sm font-medium">
            {h.label}
          </span>
        </div>
      ))}
    </div>

    {/* CTA + phone: stack on mobile */}
    <div className="flex flex-col sm:flex-row items-center gap-4
                    justify-center lg:justify-start">
      <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
        Book Your Test
      </a>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-btn flex
                        items-center justify-center flex-shrink-0">
          <PhoneIcon className="w-4 h-4 text-white"/>
        </div>
        <div>
          <p className="text-xs text-slate-400">Call Now</p>
          <p className="font-semibold text-slate-800 text-sm">077377 74617</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 7 — SERVICES GRID (9 cards)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// 1 col → 2 col → 3 col
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-0 border border-slate-100">
  {SERVICES.map((svc, i) => (
    <div key={i}
         className="p-5 sm:p-6 lg:p-7
                    border-b border-slate-100
                    sm:[&:nth-child(odd)]:border-r
                    lg:[&:nth-child(3n)]:border-r-0
                    lg:[&:nth-child(n+7)]:border-b-0
                    bg-white hover:bg-brand-bg-light
                    hover:-translate-y-1 transition-all group">
      <span className="text-brand-blue/50 text-xs font-bold
                       tracking-widest uppercase mb-3 block">
        {svc.num}
      </span>
      <h3 className="font-heading font-bold text-sm sm:text-base
                     text-slate-800 mb-2 leading-snug">
        {svc.title}
      </h3>
      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
        {svc.desc}
      </p>
      {/* Tags - hide on mobile to save space */}
      <div className="hidden sm:flex flex-wrap gap-1 mt-3">
        {svc.tags.map(tag => (
          <span className="text-[0.6rem] px-2 py-0.5 bg-brand-bg-light
                           text-brand-blue rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 8 — PACKAGES GRID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Horizontal scroll on mobile (like cards you swipe)
// OR simple 1-col stack

// Option A — Swipeable cards on mobile (RECOMMENDED)
<div className="flex overflow-x-auto gap-4 pb-4 sm:pb-0
                sm:grid sm:grid-cols-2 lg:grid-cols-3
                -mx-4 px-4 sm:mx-0 sm:px-0
                snap-x snap-mandatory scroll-smooth">
  {PACKAGES.map((pkg, i) => (
    <div key={i}
         className="card-base p-5 sm:p-6
                    flex-shrink-0 w-[280px] sm:w-auto
                    snap-start">
      {/* Badge */}
      {pkg.badge && (
        <span className="inline-block text-[0.6rem] font-bold
                         uppercase tracking-widest px-2.5 py-1
                         bg-gradient-btn text-white rounded-full mb-3">
          {pkg.badge}
        </span>
      )}

      <h3 className="font-heading font-bold text-sm sm:text-base
                     text-slate-800 mb-1">{pkg.name}</h3>

      <p className="text-slate-400 text-xs leading-relaxed mb-4">
        {pkg.desc}
      </p>

      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-heading font-bold text-brand-blue">
            {pkg.price}
          </span>
          <p className="text-xs text-slate-400">
            {pkg.parameters} parameters
          </p>
        </div>
        <a href="#contact"
           className="text-xs font-semibold text-brand-blue
                      border border-brand-blue rounded-full
                      px-3 py-1.5 hover:bg-brand-blue
                      hover:text-white transition-all">
          Book →
        </a>
      </div>
    </div>
  ))}
</div>

// Mobile scroll indicator dots
<div className="flex justify-center gap-2 mt-4 sm:hidden">
  {PACKAGES.map((_, i) => (
    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"/>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 9 — HOW IT WORKS (5 steps)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Vertical on mobile, horizontal on desktop
<div className="flex flex-col lg:flex-row gap-0 relative">
  {HOW_IT_WORKS.map((step, i) => (
    <div key={i}
         className="flex lg:flex-col items-start lg:items-center
                    gap-4 lg:gap-3 flex-1 relative
                    pb-8 lg:pb-0 pl-16 lg:pl-0
                    lg:text-center">

      {/* Step number circle */}
      <div className="absolute left-0 lg:relative lg:left-auto
                      w-10 h-10 lg:w-12 lg:h-12
                      rounded-full bg-gradient-btn
                      flex items-center justify-center
                      text-white font-bold text-sm lg:text-base
                      shadow-blue flex-shrink-0 z-10">
        {step.step}
      </div>

      {/* Connector line — vertical on mobile, horizontal on desktop */}
      {i < HOW_IT_WORKS.length - 1 && (
        <>
          {/* Mobile: vertical line */}
          <div className="absolute left-5 top-10 w-0.5 h-full
                          bg-gradient-to-b from-brand-blue to-brand-teal
                          opacity-20 lg:hidden"/>
          {/* Desktop: horizontal line */}
          <div className="hidden lg:block absolute top-6 left-1/2
                          w-full h-0.5
                          bg-gradient-to-r from-brand-blue to-brand-teal
                          opacity-20"/>
        </>
      )}

      <div>
        <h4 className="font-heading font-bold text-sm text-slate-800 mb-1">
          {step.title}
        </h4>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed
                      lg:max-w-[140px] lg:mx-auto">
          {step.desc}
        </p>
      </div>
    </div>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 10 — WHY CHOOSE US (pillars)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// 1 col → 2 col → 4 col
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {PILLARS.map((p, i) => (
    <div key={i}
         className="bg-white rounded-2xl p-6 shadow-card
                    hover:shadow-card-md hover:-translate-y-1 transition-all">
      <div className="text-3xl mb-4">{p.icon}</div>
      <h3 className="font-heading font-bold text-base text-slate-800 mb-2">
        {p.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
    </div>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 11 — STATS BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// 2x2 on mobile, 4 col on lg
<div className="grid grid-cols-2 lg:grid-cols-4
                border-b border-slate-200 divide-x divide-slate-200
                divide-y lg:divide-y-0">
  {BRANCH_STATS.map((s, i) => (
    <div key={i}
         className="py-8 px-4 sm:px-6 text-center
                    hover:bg-brand-bg-light transition-colors">
      <span className="font-heading font-bold text-3xl sm:text-4xl
                       text-brand-blue block leading-none">
        {s.value}{s.suffix}
      </span>
      <span className="text-slate-400 text-xs sm:text-sm
                       tracking-wide uppercase mt-2 block">
        {s.label}
      </span>
    </div>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 12 — REVIEWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// 1 col mobile → 2 col sm → 3 col lg
// OR swipeable on mobile

// Rating summary — stack on mobile
<div className="bg-gradient-light border border-brand-teal/20
                rounded-2xl p-5 sm:p-8 mb-8
                flex flex-col sm:flex-row items-start
                sm:items-center justify-between gap-6">
  <div>
    <p className="text-5xl font-heading font-bold text-brand-blue leading-none">
      4.9
    </p>
    <div className="flex gap-1 my-2">
      {[1,2,3,4,5].map(i => (
        <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-amber-400"/>
      ))}
    </div>
    <p className="text-slate-500 text-sm">Based on 46 Google Reviews</p>
  </div>

  {/* Rating bars — full width on mobile */}
  <div className="w-full sm:w-auto sm:min-w-[220px] flex flex-col gap-2">
    {RATINGS.breakdown.map(r => (
      <div key={r.stars} className="flex items-center gap-2">
        <span className="text-xs text-slate-500 w-3">{r.stars}</span>
        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-btn rounded-full"
               style={{width: `${r.percent}%`}}/>
        </div>
        <span className="text-xs text-slate-400 w-4 text-right">
          {r.count}
        </span>
      </div>
    ))}
  </div>
</div>

// Review cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
  {REVIEWS.map((r, i) => (
    <div key={i} className="card-base p-5 sm:p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="w-10 h-10 rounded-full flex items-center
                          justify-content-center font-bold text-white text-sm"
               style={{background: r.color}}>
            {r.initials}
          </div>
          <div className="flex gap-0.5 mt-2">
            {[...Array(r.stars)].map((_, i) => (
              <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400"/>
            ))}
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-slate-50 border
                        flex items-center justify-center
                        text-xs font-bold text-blue-500">G</div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed italic mb-4">
        "{r.text}"
      </p>
      <div className="flex justify-between items-center pt-3
                      border-t border-slate-100">
        <span className="font-semibold text-slate-800 text-sm">{r.name}</span>
        <span className="text-xs text-slate-400">{r.date}</span>
      </div>
    </div>
  ))}
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 13 — FAQ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Always full-width, shadcn Accordion
// Max width container keeps it readable

<div className="max-w-3xl mx-auto">
  <Accordion type="single" collapsible className="space-y-3">
    {FAQS.map((faq, i) => (
      <AccordionItem key={i} value={`faq-${i}`}
        className="bg-white border border-slate-100
                   rounded-2xl px-5 shadow-card overflow-hidden">
        <AccordionTrigger
          className="text-left text-sm sm:text-base
                     font-semibold text-slate-800 py-4
                     hover:text-brand-blue hover:no-underline">
          {faq.q}
        </AccordionTrigger>
        <AccordionContent
          className="text-slate-500 text-sm leading-relaxed pb-4">
          {faq.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</div>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 14 — CONTACT SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Stack on mobile, 2 col on lg
// On mobile: show info blocks ABOVE form

<section className="contact relative overflow-hidden py-0">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[800px]">

    {/* LEFT — Info (dark teal) */}
    <div className="bg-brand-dark px-4 sm:px-8 lg:px-16
                    py-14 lg:py-24 flex flex-col justify-center">

      <div className="section-kicker">
        <span>Get In Touch</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading
                     font-bold text-white mb-2">
        Visit Us or <em className="text-brand-teal italic">Book a Test</em>
      </h2>

      <p className="font-hindi text-white/40 text-sm mb-8">
        सटीक जाँच — आपके घर तक
      </p>

      {/* Info cards — compact on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {CONTACT_SECTION.infoBlocks.map((info, i) => (
          <div key={i}
               className="flex gap-3 items-start p-4
                          bg-white/5 border border-white/8
                          rounded-xl hover:bg-brand-teal/10
                          hover:border-brand-teal/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gradient-btn
                            flex items-center justify-center
                            text-lg flex-shrink-0 shadow-teal">
              {/* icon */}
            </div>
            <div>
              <strong className="block text-[0.65rem] font-bold
                                 tracking-widest uppercase
                                 text-brand-teal mb-1">
                {info.label}
              </strong>
              <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                {info.value}
              </p>
              {info.link && (
                <a href={info.link}
                   className="text-brand-teal text-xs font-semibold
                              hover:text-brand-teal-light mt-1 block">
                  {info.linkLabel} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Open badge */}
      <div className="inline-flex items-center gap-2 mt-6
                      px-4 py-2 bg-green-500/10 border border-green-500/20
                      rounded-full w-fit">
        <span className="w-2 h-2 rounded-full bg-green-400
                         animate-pulse"/>
        <span className="text-green-400 text-xs font-semibold">
          Open Now · Closes 8 PM
        </span>
      </div>
    </div>

    {/* RIGHT — Form */}
    <div className="bg-slate-50 px-4 sm:px-8 lg:px-12
                    py-14 lg:py-24 flex items-center">
      <div className="w-full max-w-lg mx-auto">

        {/* Form card */}
        <div className="bg-white rounded-2xl lg:rounded-3xl
                        p-6 sm:p-8 shadow-card-lg
                        border border-slate-100 relative overflow-hidden">

          {/* Top gradient accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-btn"/>

          <h3 className="font-heading font-bold text-xl text-slate-800 mb-1">
            Send an Enquiry
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            We'll get back to you within the hour.
          </p>

          {/* Form fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase
                                  tracking-wider text-slate-400">
                  Full Name
                </label>
                <input className="input-field" placeholder="Your name"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase
                                  tracking-wider text-slate-400">
                  Phone
                </label>
                <input className="input-field" placeholder="10 digits"/>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase
                                tracking-wider text-slate-400">
                Test / Package
              </label>
              <select className="input-field">
                {CONTACT_SECTION.formFields[2].options.map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase
                                tracking-wider text-slate-400">
                Additional Notes
              </label>
              <textarea className="input-field min-h-[90px]"
                placeholder="Doctor's reference, home address..."/>
            </div>

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button type="submit"
                      className="btn-primary flex-1 py-3.5
                                 flex items-center justify-center gap-2">
                Send Enquiry
                <ArrowRightIcon className="w-4 h-4"/>
              </button>
              <a href="https://wa.me/917737774617"
                 className="flex items-center justify-center gap-2
                            border border-slate-200 rounded-xl
                            px-4 py-3 text-sm text-green-600
                            font-semibold hover:bg-green-50
                            hover:border-green-200 transition-all">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 15 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
<footer className="bg-gradient-dark text-white">

  {/* CTA Strip — stack on mobile */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16
                  py-8 sm:py-10
                  flex flex-col sm:flex-row items-start sm:items-center
                  justify-between gap-5
                  border-b border-white/8">
    <div>
      <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
        Ready for <em className="italic text-brand-teal">Accurate</em> Results?
      </h3>
      <p className="text-white/40 text-xs sm:text-sm">
        Walk in or book from home — we're here for Hanumangarh.
      </p>
    </div>
    <div className="flex gap-3 w-full sm:w-auto">
      <a href="#contact"
         className="btn-primary flex-1 sm:flex-none text-center py-2.5">
        Book a Test
      </a>
      <a href="tel:07737774617"
         className="btn-ghost-dark flex-1 sm:flex-none text-center py-2.5
                    flex items-center justify-center gap-2">
        📞 Call Now
      </a>
    </div>
  </div>

  {/* Main grid — 2x2 on mobile, 4 col on lg */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16
                  py-10 sm:py-12
                  grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

    {/* Brand — full width on mobile */}
    <div className="col-span-2 lg:col-span-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-btn
                        flex items-center justify-center
                        font-heading font-black text-white">R</div>
        <div>
          <span className="font-heading font-bold text-white text-sm block">
            Reliable Diagnostics
          </span>
          <span className="font-hindi text-brand-teal text-[0.6rem]">
            हनुमानगढ़
          </span>
        </div>
      </div>
      <p className="text-white/40 text-xs leading-relaxed mb-4">
        Accurate Results. Trusted Care. At Your Doorstep.
      </p>
      <div className="flex items-center gap-2">
        <span className="font-heading font-bold text-2xl text-white">4.9</span>
        <div>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-amber-400 text-xs">★</span>
            ))}
          </div>
          <span className="text-[0.6rem] text-white/30 uppercase tracking-wide">
            46 Google Reviews
          </span>
        </div>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-[0.65rem] font-bold uppercase tracking-widest
                     text-white/30 mb-4 pb-2 border-b border-white/8">
        Quick Links
      </h4>
      <ul className="space-y-2.5">
        {FOOTER.quickLinks.map(l => (
          <li key={l.href}>
            <a href={l.href}
               className="text-white/50 text-xs sm:text-sm
                          hover:text-white transition-colors
                          flex items-center gap-1 group">
              <span className="w-0 group-hover:w-3 h-px bg-brand-teal
                               transition-all duration-200"/>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Popular Tests */}
    <div>
      <h4 className="text-[0.65rem] font-bold uppercase tracking-widest
                     text-white/30 mb-4 pb-2 border-b border-white/8">
        Popular Tests
      </h4>
      <ul className="space-y-2.5">
        {FOOTER.popularTests.map(t => (
          <li key={t}>
            <a href="#services"
               className="text-white/50 text-xs sm:text-sm
                          hover:text-white transition-colors
                          flex items-center gap-1 group">
              <span className="w-0 group-hover:w-3 h-px bg-brand-teal
                               transition-all duration-200"/>
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div className="col-span-2 lg:col-span-1">
      <h4 className="text-[0.65rem] font-bold uppercase tracking-widest
                     text-white/30 mb-4 pb-2 border-b border-white/8">
        Contact
      </h4>
      <div className="space-y-3">
        <p className="text-white/50 text-xs leading-relaxed">
          📍 Bharat Mata Chowk, Puran Nagar,<br/>
          Hanumangarh, Rajasthan – 335513
        </p>
        <a href="tel:07737774617"
           className="text-white/50 text-xs hover:text-brand-teal
                      transition-colors block">
          📞 077377 74617
        </a>
        <p className="text-white/50 text-xs">
          🕐 Mon–Sat: 7 AM – 8 PM<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Sunday: 9 AM – 2 PM
        </p>
      </div>

      {/* WhatsApp button */}
      <a href="https://wa.me/917737774617"
         className="inline-flex items-center gap-2 mt-4
                    px-4 py-2.5 rounded-xl text-xs font-semibold
                    bg-green-500/10 border border-green-500/20
                    text-green-400 hover:bg-green-500/20
                    transition-all">
        💬 Chat on WhatsApp
      </a>
    </div>
  </div>

  {/* Bottom bar — stack on mobile */}
  <div className="border-t border-white/6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16
                    py-5 flex flex-col sm:flex-row items-center
                    justify-between gap-3">
      <p className="text-white/25 text-xs text-center sm:text-left">
        © 2025 Reliable Diagnostics Centre, Hanumangarh.
        All Rights Reserved.
      </p>
      <div className="flex gap-4">
        <a href="#" className="text-white/25 text-xs hover:text-brand-teal">
          Privacy Policy
        </a>
        <a href="#" className="text-white/25 text-xs hover:text-brand-teal">
          Terms
        </a>
        <a href="#" className="text-white/25 text-xs hover:text-brand-teal">
          Refund Policy
        </a>
      </div>
    </div>
  </div>
</footer>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 16 — WHATSAPP FAB (Fixed Button)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// Always visible, bottom-right
// On mobile: slightly smaller, no tooltip

<a href="https://wa.me/917737774617"
   target="_blank"
   rel="noopener noreferrer"
   className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50
              w-12 h-12 sm:w-14 sm:h-14
              bg-[#25D366] rounded-full
              flex items-center justify-center
              shadow-2xl hover:scale-110 transition-transform
              group"
   aria-label="Chat on WhatsApp">

  {/* Tooltip — hidden on mobile */}
  <span className="absolute right-16 hidden sm:group-hover:block
                   bg-slate-900 text-white text-xs font-medium
                   px-3 py-1.5 rounded-lg whitespace-nowrap
                   border border-white/10">
    Chat with us
  </span>

  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
  </svg>
</a>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 17 — FRAMER MOTION ON MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reduce animation complexity on mobile to save performance:

```tsx
// hooks/useIsMobile.ts
import { useState, useEffect } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

// Usage in components
const isMobile = useIsMobile()

// Floating cards — disable on mobile
{!isMobile && <FloatingRatingCard />}
{!isMobile && <FloatingBadge />}

// Animations — simpler on mobile
<motion.div
  initial={{ opacity: 0, y: isMobile ? 10 : 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: isMobile ? 0.4 : 0.7 }}
  viewport={{ once: true }}
>
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 18 — GENERAL MOBILE RULES (apply everywhere)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Touch targets — all buttons/links min 44px tall:
   className="min-h-[44px] flex items-center"

2. Font sizes — never below 12px on mobile:
   text-xs = 12px (minimum), text-sm = 14px (body)

3. Line length — max 70 chars on mobile:
   className="max-w-prose" or "max-w-sm mx-auto"

4. Image height — set explicit heights on mobile:
   className="h-[220px] sm:h-[320px] lg:h-[480px] object-cover"

5. No horizontal overflow:
   Add to layout.tsx body: className="overflow-x-hidden"

6. Use 100svh for hero instead of 100vh (avoids mobile browser bar):
   className="min-h-[100svh]"

7. Disable hover effects on mobile (they stay stuck on touch):
   className="lg:hover:shadow-card-lg lg:hover:-translate-y-1"

8. Form inputs — prevent zoom on iOS (font-size must be 16px+):
   className="text-base" (not text-sm) on all inputs

9. Safe area for notched phones:
   Add to footer: pb-[env(safe-area-inset-bottom)]

10. Ticker/marquee — reduce speed on mobile:
    animation-duration: 20s on mobile, 28s on desktop

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RULE 19 — MOBILE STICKY CALL BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add a sticky bottom bar on mobile for quick actions:

```tsx
// components/MobileBottomBar.tsx
// Only visible on mobile (lg:hidden)

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden
                    bg-white border-t border-slate-200
                    pb-[env(safe-area-inset-bottom)]
                    shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex h-16">

        {/* Call */}
        <a href="tel:07737774617"
           className="flex-1 flex flex-col items-center justify-center
                      gap-0.5 text-brand-blue font-semibold
                      active:bg-slate-50 transition-colors">
          <span className="text-lg">📞</span>
          <span className="text-[0.65rem] font-bold uppercase tracking-wide">
            Call
          </span>
        </a>

        {/* Divider */}
        <div className="w-px bg-slate-100 my-3"/>

        {/* Book Test - highlighted */}
        <a href="#contact"
           className="flex-[2] flex items-center justify-center gap-2
                      bg-gradient-btn text-white font-bold text-sm
                      active:opacity-90 transition-opacity">
          Book a Test →
        </a>

        {/* Divider */}
        <div className="w-px bg-slate-100 my-3"/>

        {/* WhatsApp */}
        <a href="https://wa.me/917737774617"
           className="flex-1 flex flex-col items-center justify-center
                      gap-0.5 text-green-600 font-semibold
                      active:bg-slate-50 transition-colors">
          <span className="text-lg">💬</span>
          <span className="text-[0.65rem] font-bold uppercase tracking-wide">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}
```

Also add bottom padding to body so content doesn't hide behind bar:
```tsx
// app/layout.tsx
<body className="overflow-x-hidden pb-16 lg:pb-0">
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHECKLIST — TEST ON THESE DEVICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 [ ] iPhone SE  — 375px  (smallest common phone)
 [ ] iPhone 14  — 390px  (standard)
 [ ] Android    — 412px  (Pixel / Samsung)
 [ ] iPad Mini  — 768px  (tablet portrait)
 [ ] iPad Pro   — 1024px (tablet landscape)
 [ ] Laptop     — 1280px (desktop)

 [ ] Navbar hamburger opens/closes correctly
 [ ] Hero CTA buttons are full-width and tappable
 [ ] All cards scroll/wrap cleanly
 [ ] Packages swipe horizontally on mobile
 [ ] Form inputs don't zoom on iOS (16px font)
 [ ] Footer links are all tappable (44px+)
 [ ] WhatsApp FAB doesn't cover bottom bar
 [ ] Sticky bottom bar visible and working
 [ ] No horizontal scroll anywhere
 [ ] Images load and don't overflow

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  END OF MOBILE-FRIENDLY PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━