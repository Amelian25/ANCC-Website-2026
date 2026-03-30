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

### Images
All images live in `images/`. `.about-portrait` has `pointer-events: none` to prevent the sticky element from blocking text selection in the hero above it. The About page Approach section uses a client quote block in place of an image — a photo can go there when available.

#### Portrait responsive behavior
- **Hero portrait** (`index.html`): visible at all widths. At ≤1024px, stacks below hero text in single-column layout. Uses `aspect-ratio: 3/4`, `object-fit: cover`, `object-position: top`.
- **About portrait** (`about.html`): sticky on desktop scroll. At ≤1024px, switches to `position: static`, `max-width: 420px`, centered. Uses `aspect-ratio: 3/4`, `object-fit: cover`, `object-position: top`.

#### Current images
| Slot | File | Status |
|---|---|---|
| Hero portrait | `images/amelia-portrait-hero.jpeg` | Placeholder — older photo; replace with professional headshot |
| About portrait | `images/amelia-portrait-about.jpeg` | Placeholder — older photo; replace with professional headshot |
| 1:1 Leadership Coaching | `images/vitalii-khodzinskyi-Q_JfTdPCz54-unsplash.jpg` | Clean workspace with laptop, notebook, plant (Unsplash) |
| Life & Career Coaching | `images/Compass_dunamis-church-Y.jpg` | Brass compass on dark rocks at sunset |
| Team Consulting | `images/getty-images-8mr6Ya16f1s-unsplash.jpg` | Empty conference room with flipchart, natural light (Unsplash) |
| Standalone Sessions | `images/copernico-m8OEwd9bReA-unsplash.jpg` | Sunlit workshop room with wood chairs, city views (Unsplash) — may replace |

### `script.js` responsibilities
- Mobile hamburger menu toggle (`.hamburger` / `.mobile-nav`)
- Active nav link highlighting based on `window.location.pathname`
- Nav scroll shadow on scroll
- Scroll-reveal fade-in via `IntersectionObserver` on any element with `[data-reveal]`
- Contact form submission via Formspree (`https://formspree.io/f/xreoqdjj`) — submits via `fetch`, shows success message `id="formSuccess"` on success, shows error alert with email fallback on failure

### Responsive breakpoints
- `≤ 1024px` — Switches most two-column grids to single column; stacks service blocks; hero portrait stacks below text (badge hidden)
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
- **Testimonials page** — all 6 real client testimonials (Francisco, Sophia, Crystal, Jason, Charlene, Karen); no photos, no star ratings; pull quotes in "In Their Words" section; quotes surfaced on homepage and about page
- **Homepage** — fully rewritten: hero "Real change starts on the inside.", intro strip, 3 service cards, Jason pull quote, CTA; hero stats removed; process teaser section removed
- **About page** — fully rewritten:
  - Hero: "Coach. Consultant. Trusted Thinking Partner."
  - My Story: 6 paragraphs (curiosity; Vassar + early hands-on work; decade inside orgs as EA/PM then facilitation/MBTI; full-time coaching since 2019; today's work; Hudson River/personal)
  - H2: "Gentle in approach. Rigorous in practice."
  - Credentials: subheader + 5 bullets (PCC, iEQ9 Enneagram, MBTI, Leadership & Life Coaching Certificate — Accomplishment Coaching, BA Psychology — Vassar College)
  - What I Stand For: Honest Reflection, The Space to Think, All of You
  - My Approach: 4 paragraphs
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
- **Standalone Sessions image** — current photo (workshop room with city view) is acceptable but may be replaced with something better

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
