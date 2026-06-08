# Portfolio Website — Anas El Fatihi

Official personal website and SaaS developer portfolio.

Built with Astro, Tailwind CSS, TypeScript and GitHub Pages.

---

# Project Overview

This project is the official portfolio website of Anas El Fatihi.

The website serves as a professional showcase for:

* SaaS development services
* Full-stack engineering expertise
* AI integrations and automation
* Product development consulting
* Technical leadership

The website must communicate credibility, technical excellence, and business value.

Primary objective:

Generate qualified inbound leads from founders, startups, SMEs, and businesses looking to build or improve SaaS products.

---

# Target Audience

## Primary

* Startup founders
* SaaS founders
* Entrepreneurs
* Product owners

## Secondary

* SMEs
* Agencies
* Technology companies

## Geographic Focus

* Morocco
* France
* Europe
* International remote clients

---

# Core Positioning

Position Anas El Fatihi as:

* SaaS Developer
* Full Stack Engineer
* Technical Consultant
* Product Builder
* AI Automation Specialist

The website should emphasize:

* Business outcomes
* Product thinking
* Technical expertise
* Reliability
* Speed of execution

Avoid generic marketing language.

---

# Tech Stack

## Core Framework

* Astro

## Frontend

* TypeScript
* React (when necessary)
* Tailwind CSS

## Content

* MDX
* Markdown collections

## Tooling

* ESLint
* Prettier

## Deployment

* GitHub Pages
* GitHub Actions

---

# Design System

## Design Philosophy

The website should feel:

* Premium
* Modern
* Fast
* Clean
* Technical
* Professional

Inspired by:

* Linear
* Vercel
* Stripe
* Raycast

---

## Colors

### Primary

#0F172A

### Secondary

#1E293B

### Accent

#3B82F6

### Background

#FFFFFF

### Text

#111827

---

## Typography

Primary font:

* Inter

Fallback:

* system-ui
* sans-serif

Rules:

* Large headings
* Strong hierarchy
* Generous spacing
* Excellent readability

---

# Website Structure

## Home

### Hero

Title:

Je crée des SaaS performants qui transforment vos idées en produits rentables.

Subtitle:

Développement SaaS, MVP, automatisation IA et applications web modernes.

Primary CTA:

Discuter de votre projet

Secondary CTA:

Voir mes réalisations

---

### Trust Section

Show:

* Years of experience
* Projects delivered
* Technologies mastered

---

### Services Overview

Display key service cards.

---

### Featured Projects

Showcase best projects.

---

### Technologies

Present technical stack.

---

### Contact CTA

Visible before footer.

---

## Services Page

### SaaS Development

End-to-end SaaS development.

### MVP Development

Rapid product validation.

### AI Automation

Workflow automation and AI integration.

### API Development

REST and backend systems.

### Technical Consulting

Architecture and product guidance.

---

## Projects Page

Each project must include:

* Project name
* Overview
* Problem
* Solution
* Tech stack
* Screenshots
* Results
* Links

Project cards must focus on business impact.

---

## About Page

Sections:

### Background

Professional journey.

### Expertise

Core competencies.

### Product Mindset

Approach to building products.

### Vision

Long-term mission and values.

---

## Contact Page

Fields:

* Name
* Email
* Company
* Project Description

CTA:

Réponse sous 24 heures.

---

# Content Strategy

Content must be:

* Professional
* Clear
* Concise
* Technical
* Results-oriented

Avoid:

* Buzzwords
* Empty claims
* Generic marketing language

Always emphasize:

* Outcomes
* Scalability
* Reliability
* Product value

---

# SEO Strategy

## Main Keywords

* Développeur SaaS Maroc
* SaaS Developer Morocco
* Développeur Full Stack Maroc
* Création SaaS
* Développement MVP
* Application Web Sur Mesure
* AI Automation Developer
* Freelance Full Stack Developer

---

## Meta Title

Anas El Fatihi | Développeur SaaS & Full Stack Engineer

---

## Meta Description

Développeur Full Stack spécialisé dans la création de SaaS, MVP, automatisation IA et applications web modernes.

---

## Open Graph

All pages must include:

* Open Graph tags
* Twitter cards
* Canonical URLs

---

# Performance Requirements

Target Lighthouse scores:

Performance:

95+

Accessibility:

95+

Best Practices:

95+

SEO:

95+

---

# Accessibility

Requirements:

* Semantic HTML
* Keyboard navigation
* ARIA support where necessary
* Proper color contrast
* Screen reader compatibility

---

# Responsive Design

Support:

* Mobile
* Tablet
* Desktop
* Large screens

Mobile-first approach.

---

# Animations

Use subtle animations only.

Allowed:

* Fade-in
* Hover states
* Scroll reveal

Avoid:

* Heavy animations
* Parallax effects
* Distracting transitions

Performance comes first.

---

# Blog (Future Feature)

Potential categories:

* SaaS Development
* Product Engineering
* AI Automation
* Startup Technology
* Technical Architecture

The blog should improve SEO and authority.

---

# Testimonials (Future Feature)

Support testimonials section.

Structure:

* Client name
* Company
* Testimonial
* Optional logo

---

# Case Studies (Future Feature)

Each case study should contain:

* Client challenge
* Solution
* Architecture
* Results
* Lessons learned

---

# Repository Strategy

Primary repository:

anaselfatihi.github.io

Default branch:

main

Repository visibility:

Public

---

# Deployment Target

Production URL:

https://anaselfatihi.github.io

GitHub Pages User Site.

---

# GitHub Pages Configuration

Astro site configuration:

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://anaselfatihi.github.io"
});
```

---

# CI/CD

Deployment method:

GitHub Actions

Requirements:

* Automatic deployment
* Trigger on push to main
* Build Astro project
* Deploy to GitHub Pages

No manual deployment.

---

# Project Structure

```text
anaselfatihi.github.io/
├── public/
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   │   ├── projects/
│   │   └── blog/
│   ├── styles/
│   └── assets/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── README.md
└── CLAUDE.md
```

---

# Future Enhancements

* Multi-language support (FR / EN)
* Blog
* Newsletter
* Lead magnet
* Booking integration
* Case studies
* Testimonials
* Analytics dashboard

---

# Development Rules

Always prioritize:

1. Simplicity
2. Maintainability
3. Performance
4. Accessibility
5. SEO

Every feature must justify its existence.

The website is a lead-generation asset first and a portfolio second.

When in doubt:

Choose the solution that improves clarity, speed, and conversion.
