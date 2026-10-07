# Kings Editorial Magazine — Project Rules & Design Specification

> **Project Name**: Kings  
> **Type**: Premium Editorial & Lifestyle Blog Publication  
> **Tech Stack**: Pure Semantic HTML5, Vanilla CSS3 (Custom Properties & Modern Layouts), Vanilla Modern JavaScript (ES6+)  
> **Architecture**: Clean Modular Structure adhering to repository conventions (`index.html`, `about.html`, `blogs.html`, `contact.html`, `styles/`, `scripts/`, `media/`)

---

## 1. Project Vision & Brand Identity

**Kings** is an authoritative, high-end digital publication crafted for discerning thinkers, innovators, and cultural connoisseurs. It merges the gravitas of legacy print editorial (like *The Atlantic*, *Kinfolk*, or *Monocle*) with modern digital responsiveness and interactive polish.

### Core Tenets:
- **Anti-Generic & Anti-Slop**: Reject standard template looks, default Bootstrap clones, and lifeless cards. Every element must feel bespoke, deliberate, and editorial.
- **Editorial Typography**: Regal serif headings paired with clean, hyper-readable modern grotesque sans-serif for body copy.
- **Micro-Interactions**: Subtle, fluid tactile feedback on hovers, reading progress indicator, smooth page transitions, interactive filters, and an article reader modal.
- **Self-Contained & Fast**: Zero framework bloat, zero heavy external runtime dependencies, ultra-fast load times, fully responsive across mobile, tablet, and widescreen.

---

## 2. Curated Color Palette & Visual Theme

We implement a sophisticated dual-palette design system with **Dark Obsidian & Royal Champagne Gold** as the primary showcase theme, complete with a seamless toggle to an **Editorial Alabaster & Imperial Ink** light theme.

### Primary Theme: Obsidian & Royal Champagne (Dark Mode - Default)
| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | Deep Obsidian | `#0A0B0E` | Main page background |
| **Elevated Surface** | Midnight Charcoal | `#12141A` | Cards, navigation bar, modals |
| **Subtle Surface** | Soft Jet | `#191C24` | Input fields, tags, hover states |
| **Primary Accent** | Royal Champagne Gold | `#D4AF37` | Badges, active borders, key highlights |
| **Accent Glow** | Warm Amber Gold | `#F59E0B` | Gradients, hover accents, subtle glows |
| **Primary Typography** | Alabaster Silk | `#F3F4F6` | Headlines and high-contrast text |
| **Secondary Typography** | Muted Slate | `#9CA3AF` | Excerpts, meta descriptions, subtitles |
| **Subtle / Dim** | Dark Zinc | `#525866` | Dates, reading times, footnotes |
| **Borders & Dividers** | Subtle Gold Hairline | `rgba(212, 175, 55, 0.16)` | Elegant thin card borders and dividers |
| **Glass Effect** | Obsidian Frosted | `rgba(10, 11, 14, 0.75)` | Backdrop blur navigation bar & popups |

### Alternate Theme: Editorial Alabaster & Imperial Ink (Light Mode)
| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | Warm Alabaster Parchment | `#FBF9F5` | Main editorial background |
| **Elevated Surface** | Pure Linen White | `#FFFFFF` | Cards and navigation bar |
| **Primary Accent** | Burnished Bronze Gold | `#B38F24` | Accents, brand marks, links |
| **Primary Typography** | Imperial Ink | `#111827` | Headings, main text |
| **Secondary Typography** | Warm Charcoal | `#4B5563` | Body and meta copy |
| **Borders** | Warm Parchment Border | `#E5E0D8` | Hairline dividers and cards |

---

## 3. Typography Hierarchy

Imported via Google Fonts (`Cormorant Garamond` + `Plus Jakarta Sans` + `JetBrains Mono`):

```css
/* Typography Tokens */
--font-display: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
--font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

- **Brand Logo & Section Headers**: `var(--font-display)` — Elegant serif styling with generous letter-spacing.
- **Article Titles (H1, H2, H3)**: `var(--font-display)` — High-contrast editorial sizes (32px - 56px on desktop) with tighter line heights (`1.15`).
- **Body & Long-form Reading**: `var(--font-sans)` — 16px - 18px with relaxed line-height (`1.75`) for zero eye fatigue.
- **Metadata, Badges & Tags**: `var(--font-sans)` or `var(--font-mono)` — 11px - 12px uppercase, tracked (`letter-spacing: 0.12em`), crisp weight (`600`).

---

## 4. Folder Structure & Architectural Rules

All project files must strictly follow this structure:

```
vipecoder/
│
├── index.html              # Home Page (Masthead, Hero Feature, Magazine Grid, Dispatch)
├── about.html              # About Page (Manifesto, Editorial Masthead, Values & Timeline)
├── blogs.html              # Blogs Catalog (Search, Category Filters, Sort, Grid/List view)
├── contact.html            # Contact & Pitch Page (Inquiries form, Editorial Guidelines)
├── RULES.md                # Project Rules & Design Specifications (this file)
│
├── styles/
│   ├── main.css            # CSS Reset, Variables, Theme Tokens, Global Layout & Typography
│   ├── components.css      # Header, Navigation, Footer, Cards, Badges, Buttons, Modal, Toast
│   └── pages.css           # Specific layouts for Home, About, Blogs, and Contact
│
├── scripts/
│   ├── data.js             # Curated article datasets (10+ rich articles, tags, authors, content)
│   ├── main.js             # Global logic (sticky header, theme switcher, mobile drawer, toasts)
│   ├── blog.js             # Live search, category filtering, reading modal/viewer, bookmarks
│   └── contact.js          # Interactive form validation, submission simulation, toasts
│
└── media/                  # Optimized SVG icons, author portraits, and editorial hero images
```

### File & Code Rules:
1. **No Inline CSS**: All styling must live in `styles/`.
2. **Modular Scripts**: Keep data isolated in `data.js`, global interaction in `main.js`, and page logic in `blog.js` / `contact.js`.
3. **Semantic HTML5**: Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<figure>`, `<footer>`.
4. **Resilient Assets**: SVGs for icons and responsive modern imagery with graceful fallbacks.

---

## 5. Detailed Page Specifications

### Page 1: Home (`index.html`)
- **Top Masthead**: Live date display (`e.g., Monday, October 5`), "Issue No. 42", current volume badge, theme toggle button.
- **Navigation Bar**: Sticky glassmorphic navbar with brand logo (`KINGS`), page links (Home, About, Blogs, Contact), search shortcut, and bookmark counter.
- **Hero Feature ("The Lead Story")**: Asymmetric magazine hero layout featuring a centerpiece long-read article with author byline, category pill, estimated reading time, and interactive preview trigger.
- **Trending & Editor's Picks**: 3-column curated grid of high-impact articles with hover zoom effects, reading time chips, and gold border highlights.
- **Category Spotlight**: Quick visual taxonomy (Technology & AI, Philosophy & Culture, Modern Architecture, Strategic Leadership).
- **The Kings Dispatch (Newsletter Section)**: High-converting, bespoke luxury subscription card with interactive validation and instant feedback modal.
- **Editorial Footer**: Multi-column footer with brand statement, navigation index, social links, issue archive links, and copyright.

### Page 2: Blogs Catalog (`blogs.html`)
- **Page Hero**: "The Journal" title, total published articles count, search filter bar.
- **Live Search & Filter Bar**:
  - Instant text search (matches title, excerpt, content, and author).
  - Category filter pills (All, Technology, Philosophy, Design, Culture, Leadership) with live counts.
  - Sort selector (Newest, Reading Time, Most Popular).
  - Layout toggle: Editorial Grid vs. Minimalist List view.
- **Interactive Article Reader**:
  - Clicking any article opens a dedicated, distraction-free reading experience (editorial modal/drawer).
  - Includes real-time reading progress bar at the top.
  - Table of contents, rich quotes, drop-cap introduction, author card, and interactive bookmark button.
  - LocalStorage persistence for bookmarked articles.

### Page 3: About The Publication (`about.html`)
- **The Kings Manifesto**: An eloquent statement of purpose—championing depth in an era of digital superficiality.
- **Publication Metrics**: Animated milestone counters (Active Readers, Published Essays, Global Cities Reached, Contributors).
- **The Masthead (Editorial Team)**: Profiles for Editor-in-Chief, Creative Director, Senior Essayists with bios and social links.
- **Editorial Standards & Ethics**: 4-part visual card layout detailing accuracy, intellectual independence, and craftsmanship.

### Page 4: Contact & Submissions (`contact.html`)
- **Split Layout**:
  - *Left Column*: Editorial office contacts, pitch guidelines, frequency of review, press inquiries.
  - *Right Column*: High-end interactive contact form.
- **Form Fields**: Full Name, Email Address, Inquiry Type (Editorial Pitch, Press & Syndication, General Feedback), Subject, Message body.
- **Interactive Polish**: Floating labels, character counter for the pitch, client-side validation, submit animation, and a toast confirmation message.

---

## 6. Anti-Slop & Quality Checklist

- [x] **No Generic Components**: Cards have bespoke borders, subtle gold glows on hover, and clear typography hierarchy.
- [x] **Responsive Across Breakpoints**: Fully optimized for Mobile (< 640px), Tablet (641px - 1024px), Desktop (1025px - 1440px), and Wide (> 1440px).
- [x] **Accessible & Accessible Colors**: Contrast meets WCAG AA standards in both Dark and Light modes.
- [x] **Dynamic & Alive**: Buttons have smooth micro-transforms (`transform: translateY(-2px)`), card images zoom smoothly, active filters update dynamically without page reloads.
- [x] **Persistent State**: Theme preference (Dark/Light) and saved bookmarks persist via `localStorage`.
