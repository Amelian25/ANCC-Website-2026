# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static, multi-page personal brand website for **Amelia Norvell** — leadership and life coaching / team consulting business. No build step, no framework, no dependencies — open any `.html` file directly in a browser to preview.

## Architecture

### File structure
- `index.html` — Home page (hero, services overview, pull quote, CTA)
- `about.html` — Biography, credentials, values, approach
- `services.html` — Four service offerings (1:1 leadership, life/career, team consulting, standalone sessions/workshops) + process steps + investment section
- `testimonials.html` — Client testimonials grid + featured quotes
- `contact.html` — Contact form + details + FAQ
- `style.css` — All styles (single shared file across all pages)
- `script.js` — All JS (single shared file across all pages)

### Design system (defined in `style.css` `:root`)
| Variable | Value | Use |
|---|---|---|
| `--bg` | `#F5F6F3` | Main background — near-white with grey-green tint |
| `--bg-warm` | `#E8EAE4` | Light grey-green — alternate sections (page heroes, intro strip, values, process, FAQ) |
| `--bg-dark` | `#1C1E1C` | Cool charcoal — quote blocks, footer |
| `--accent` | `#6A7862` | Grey-green — buttons, interactive elements |
| `--accent-hover` | `#546050` | Darker grey-green — hover states |
| `--accent-light` | `#E0E4DC` | Pale grey-green — CTA section backgrounds |
| `--pop` | `#A36860` | Terracotta-rose — decorative highlights only (eyebrows, quote marks, stat/step/value numbers, card links) |
| `--border` | `#D0D4CC` | Grey-green-tinted dividers and card borders |

Palette is grey-green monochrome with a terracotta-rose highlight (`--pop`) used sparingly. All previous palette iterations are saved in project memory for revert.

Fonts loaded via Google Fonts: **Cormorant Garamond** (headings) + **DM Sans** (body/UI).

### Shared nav & footer
Every page duplicates the same `<nav>`, `.mobile-nav` overlay, and `<footer>` markup. When updating navigation links or footer content, update all 5 HTML files. Nav uses `gap: 3rem` on `.nav-inner` to ensure spacing between logo and nav links.

#### Nav logo
`.nav-logo` uses Cormorant Garamond, `font-size: 1.75rem`, `font-weight: 500` — slightly larger and more elegant than a typical nav logo.

### Images
All images live in `images/`. `.about-portrait` has `pointer-events: none` to prevent the sticky element from blocking text selection in the hero above it. The About page Approach section uses a client quote block (styled like the Services investment quote block) in place of an image.

#### Portrait responsive behavior
- **Hero portrait** (`index.html`): visible at all widths. At ≤1024px, stacks below hero text in single-column layout. Uses `aspect-ratio: 3/4`, `object-fit: cover`, `object-position: center 15%` (anchored 15% from top to keep face in frame at medium widths).
- **Hero badge** (`index.html`): on desktop, absolutely positioned over the bottom-left of the portrait. At ≤1024px, switches to `position: static` and stacks below the portrait image (no drop shadow). Does not disappear on mobile.
- **About portrait** (`about.html`): sticky on desktop scroll. At ≤1024px, switches to `position: static`, `max-width: 420px`, centered. Uses `aspect-ratio: 3/4`, `object-fit: cover`, `object-position: top`.

#### Current images
| Slot | File | Notes |
|---|---|---|
| Hero portrait | `images/amelia-portrait-hero.jpeg` | Placeholder — older photo; replace with professional headshot |
| About portrait | `images/amelia-portrait-about.jpeg` | Placeholder — older photo; replace with professional headshot |
| 1:1 Leadership Coaching | `images/rohit-varma-zV6Mdi1XBuQ-unsplash_cropped.jpeg` | Lone tree emerging from mist; portrait orientation |
| Life & Career Coaching | `images/david-boca-asn1vZEz3oQ-unsplash_cropped.jpeg` | Underwater looking up through clear blue water; `object-position: center 30%`; portrait orientation |
| Team Consulting | `images/alex-diaz-rJycNT2hEwY-unsplash.jpg` | Aerial river delta through marshland; `object-position: bottom`; portrait orientation |
| Standalone Sessions | `images/behnam-norouzi-R3c31-HrQ60-unsplash_cropped.jpeg` | Close-up leaf veins and texture; portrait orientation |

#### Full-bleed background images
Four sections use full-bleed nature photography with a dark overlay and frosted glass cards floating in front. Pattern: `position: relative` on section, `::before` pseudo-element for overlay, `backdrop-filter: blur(8px)` on cards, white header text.

| Section | File | Overlay | Notes |
|---|---|---|---|
| Homepage — How I Can Help (`.services-overview`) | `images/ales-krivec-h3zyoNXe2hQ-unsplash.jpg` | `rgba(18,24,18,0.45)` Medium | Misty forest; "View All Services" button uses `btn-outline-light` |
| About — What I Stand For (`.values-section`) | `images/rahul-pandit-4MyI1iTF4yE-unsplash.jpg` | `rgba(18,24,20,0.45)` Medium | Water reflections close-up |
| Services — How It Works (`.process-section`) | `images/unsplash-community-yeFUJTcGRTo-unsplash.jpg` | `rgba(18,24,18,0.25)` Light+ | Aerial forest meeting lake edge |
| Testimonials — Grid (`.testimonials-bg-section`) | `images/slashio-photography-tzOlOaq6554-unsplash.jpg` | `rgba(18,24,18,0.45)` Medium | Lichen on rock |

### `script.js` responsibilities
- Mobile hamburger menu toggle (`.hamburger` / `.mobile-nav`)
- Active nav link highlighting based on `window.location.pathname`
- Nav scroll shadow on scroll
- Scroll-reveal fade-in via `IntersectionObserver` on any element with `[data-reveal]`
- Contact form submission via Formspree (`https://formspree.io/f/xreoqdjj`) — submits via `fetch`, shows success message `id="formSuccess"` on success, shows error alert with email fallback on failure

### Spacing conventions
- **Grid gaps** — all card/value/process grids use `gap: 1.25rem` so background images show through between cards
- **Section padding** — `section-pad` = `110px 0`; `section-pad-sm` = `70px 0`
- **Hero top padding** — `var(--nav-height)` with no extra offset (content sits right at nav height)
- **Hero background** — `var(--bg-warm)` to match inner page heroes
- **Intro strip** (`index.html`) — `var(--bg)` (lighter default) to alternate with the warm hero above. "Insight is only the beginning." h2 uses the same `clamp(2rem, 3.5vw, 3.2rem)` as standard `h2`

#### Services page spacing
- Services list section: `padding-top: 50px; padding-bottom: 70px` (inline override on the section)
- `.service-block`: `padding: 40px 0` (symmetric top and bottom)
- `.service-block:first-of-type`: `padding-top: 0` (flush with section top padding)
- `.service-block:last-of-type`: `padding-bottom: 0` (flush with section bottom padding)
- Service images are portrait orientation (`aspect-ratio: 3/4` on desktop, `4/3` on mobile)
- On mobile (≤1024px): blocks have `padding: 40px 0`, first block `padding-top: 0`, last block `padding-bottom: 0`; images stack above text (`order: -1` on `.svc-visual`)
- Service buttons say "Inquire About This Service" (not "Program")

### Responsive breakpoints
- `≤ 1024px` — Switches most two-column grids to single column; stacks service blocks; hero portrait stacks below text; service images appear above text (not below)
- `≤ 768px` — Hides desktop nav, shows hamburger; single-column cards; stacks footer
- `≤ 480px` — Tighter container padding; process grids collapse to 1 column

## Content status

### Completed
- **Brand name** — "Amelia Norvell" throughout all 5 HTML files; no instances of "Alex Morgan" or "Alex" remain
- **Email** — `amelia@amelianorvell.com` across all 5 pages
- **Location** — New York, NY (confirmed accurate)
- **Phone** — intentionally omitted; Amelia does not want her number published
- **LinkedIn** — linked to `https://www.linkedin.com/in/amelia-norvell-pcc` in footer (all pages) and contact detail
- **Instagram** — removed from all pages; no account to share currently
- **Em dash review** — complete across all 5 pages
- **CTA review** — complete; all 4 page CTAs are distinct:
  - Home: "Not sure where to start? That's exactly where we begin."
  - About: "Every conversation starts somewhere."
  - Services: "Ready when you are."
  - Testimonials: "Ready for your own shift?"
- **Testimonials page** — all 6 real client testimonials (Francisco, Sophia, Crystal, Jason, Charlene, Karen); no photos, no star ratings; pull quotes in "In Their Words" section; quotes surfaced on homepage and about page. Middle pull quote section (dark background, Crystal quote) removed.
- **Homepage** — fully rewritten: hero "Real change starts on the inside.", intro strip, 3 service cards, Jason pull quote, CTA; hero stats removed; process teaser section removed
- **About page** — fully rewritten:
  - Hero: "Coach. Consultant. Trusted Thinking Partner."
  - My Story: 6 paragraphs (curiosity; Vassar + early hands-on work; decade inside orgs as EA/PM then facilitation/MBTI; full-time coaching since 2019; today's work; Hudson River/personal)
  - H2: "Gentle in approach. Rigorous in practice."
  - Credentials: subheader + 5 bullets (PCC, iEQ9 Enneagram, MBTI, Leadership & Life Coaching Certificate — Accomplishment Coaching, BA Psychology — Vassar College). On desktop, credentials sit in the left column below the portrait. On mobile, order is: portrait → bio → credentials.
  - What I Stand For: Honest Reflection, The Space to Think, All of You
  - My Approach: 4 paragraphs; client quote block styled like Services investment quote (bg-warm, border, eyebrow, accent-colored cite)
- **Services page** — fully rewritten:
  - Hero: "The work looks different for everyone. My commitment to you is the same."
  - Service 01: 1:1 Leadership Coaching — reflective + practical; min 6-month, 12-month recommended
  - Service 02: Life & Career Coaching — 3–4 sessions/month, flexible structure
  - Service 03: Team Consulting & Facilitation — no includes list
  - Service 04: Standalone Sessions & Workshops — MBTI, Enneagram, Communication (colons as separators)
  - How It Works: "How 1:1 Coaching Works" — 4 steps rewritten
  - Investment: real copy; Francisco's quote replacing fake "Taylor W." testimonial
- **Contact page** — fully rewritten:
  - Hero: "Let's talk."
  - Phone removed; availability Tues–Fri; Instagram removed
  - FAQ: engagement length updated to match services page (6–12 months individual; team = ongoing partnerships with quarterly/bi-annual offsites)
  - Form dropdown includes all 4 services + "Just a Discovery Call" + "Something Else"

### Pending
- **Personality assessments bullet** — consider adding an optional bullet about MBTI/Enneagram assessments to the includes list on both Service 01 (1:1 Leadership Coaching) and Service 02 (Life & Career Coaching)
- **Portrait photos** — current portraits are older photos; replace with professional headshots when available

## Hosting
- **Live at** `amelianorvell.com`
- **Host:** GitHub Pages — repository `github.com/Amelian25/ANCC-Website-2026`, main branch
- **Domain:** registered with Squarespace, DNS pointing to GitHub Pages
- **To deploy changes:** edit files locally, then upload changed files to the GitHub repo via Add file → Upload files → Commit to main branch. Changes go live within a minute or two.
- **Contact form:** handled by Formspree (`https://formspree.io/f/xreoqdjj`), submissions delivered to `amelia@amelianorvell.com`
- **Email:** Google Workspace billed through Squarespace — do not cancel Squarespace entirely, only the hosting plan was cancelled

## Notes
- Amelia prefers no em dashes in copy; use commas, colons, or periods depending on context
- Do not publish phone number
