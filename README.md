<div align="center">

<!-- Animated header banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=C3E41D&height=200&section=header&text=Sneha%20Banik&fontSize=60&fontColor=000000&fontAlignY=38&desc=Portfolio%20Website&descAlignY=58&descSize=22&descColor=000000&animation=fadeIn" width="100%" />

<!-- Typing animation -->
<a href="https://snehabanik-dev.vercel.app" target="_blank">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&pause=1000&color=C3E41D&center=true&vCenter=true&width=600&lines=Aspiring+UI%2FUX+Designer;Aspiring+Web+Developer;B.Tech+ECE+Student+%40+MAKAUT;Student+Chapter+Core+Team+Member" alt="Typing SVG" />
</a>

<br/>

<!-- Social badges -->
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sneha-banik-ab2922346/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SnehaBanik)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:snehabanikk@gmail.com)
[![Portfolio](https://img.shields.io/badge/Live_Portfolio-C3E41D?style=for-the-badge&logo=vercel&logoColor=black)](https://snehabanik-dev.vercel.app)

</div>

---

## 🖼️ Demo

<div align="center">
  <br/>
  <img src="https://github.com/user-attachments/assets/b098472e-c14f-4a66-81b6-d7beab37e411" alt="Portfolio Hero & Sections" width="90%" />
  <br/><br/>
  <img src="https://github.com/user-attachments/assets/ab848da6-d8db-4f4e-b5d1-aa9afa042b5d" alt="Portfolio Footer" width="90%" />
  <br/><br/>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Build & Deploy](#-build--deploy)
- [Projects Showcased](#-projects-showcased)

---

## 🌟 Overview

A **modern, fully animated personal portfolio** built with React 19, TypeScript, Vite, and Tailwind CSS. Every section features smooth scroll-triggered animations powered by Framer Motion, a fixed navbar with active section tracking via `IntersectionObserver`, a typewriter hero effect, and a working contact form via Web3Forms.

Deployed live on **Vercel** at [snehabanik-dev.vercel.app](https://snehabanik-dev.vercel.app).

---

## ✨ Features

<div align="center">

| Feature | Details |
|---|---|
| 🎨 **Animated Hero** | Blur-in letter animation + looping typewriter effect |
| 🧭 **Smart Navbar** | Fixed header with `IntersectionObserver`-based active section highlight |
| 📜 **Scroll Animations** | Framer Motion blur-fade-up on every section, triggered on scroll |
| 🃏 **Bento Grid Achievements** | CSS grid-based bento layout with persistent hover states |
| 💼 **Project Cards** | Animated project cards with live demo + GitHub links |
| 🛠️ **Skills Grid** | Staggered animated skill cards grouped by category |
| 📬 **Working Contact Form** | Web3Forms API integration with loading + success/error states |
| 🌐 **Responsive** | Fully mobile-first responsive across all breakpoints |
| 🌙 **Dark Theme** | Pure dark UI with `#C3E41D` lime accent throughout |
| 🔵 **Round Favicon** | Self-contained SVG favicon with circular clip |
| ⚡ **Vite + React 19** | Blazing fast HMR dev server and optimised production build |

</div>

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0080?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

| Category | Libraries |
|---|---|
| **Framework** | React 19, TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 3, tw-animate-css, tailwindcss-animate |
| **Animations** | Framer Motion 12 |
| **UI Primitives** | Radix UI (Collapsible, Separator, Slot), shadcn/ui |
| **Icons** | Lucide React |
| **Contact Form** | Web3Forms API |
| **Fonts** | Fira Code (hero), Geist Variable (body) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
sneha-portfolio/
├── public/
│   ├── favicon.svg          # Self-contained round SVG favicon
│   └── icons.svg
├── src/
│   ├── assets/              # Hero image, project screenshots
│   ├── certification-prizes/ # Certificate images
│   ├── components/
│   │   └── ui/
│   │       ├── portfolio-hero.tsx      # Navbar + Hero section
│   │       ├── about-section.tsx       # About section
│   │       ├── education-section.tsx   # Education section
│   │       ├── skills-section.tsx      # Skills grid with categories
│   │       ├── projects-section.tsx    # Featured projects
│   │       ├── experience-section.tsx  # Work experience timeline
│   │       ├── achievements-section.tsx # Bento grid achievements
│   │       ├── gallery-section.tsx     # Photo gallery
│   │       ├── contact-section.tsx     # Contact form + links
│   │       ├── footer-section.tsx      # Footer
│   │       ├── project-card.tsx        # Reusable project card
│   │       ├── skill-card.tsx          # Reusable skill card
│   │       ├── bento-grid.tsx          # Bento grid layout component
│   │       ├── work-experience.tsx     # Experience timeline component
│   │       └── timeline-animation.tsx  # Scroll-triggered animation wrapper
│   ├── gallery/             # Gallery images (image1–6.png)
│   ├── icon/                # Custom icons (ChatGPT, etc.)
│   ├── lib/
│   │   └── utils.ts         # cn() utility (clsx + tailwind-merge)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # Global styles + scroll-behavior: smooth
├── .env                     # Environment variables (Web3Forms key)
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.app.json
└── package.json
```

---

## 📄 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen hero with blur-in name, looping typewriter, and hero image |
| 2 | **About** | Personal introduction with animated highlight tags |
| 3 | **Education** | Academic background at MAKAUT |
| 4 | **Skills** | C, C++, JavaScript, HTML, CSS, Figma, Canva, GitHub, AI tools + Soft skills |
| 5 | **Projects** | Cohort Landing Page, Amazon Clone, Portfolio Website |
| 6 | **Experience** | Core Graphics Team Member — Student Chapter, AOT |
| 7 | **Achievements** | SIH 2x Participant, Top 3 UI/UX Design Competition, Technical Events |
| 8 | **Gallery** | Photo gallery |
| 9 | **Contact** | Web3Forms contact form + Email, LinkedIn, GitHub links |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SnehaBanik/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in the root with the following:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Get your free access key at [web3forms.com](https://web3forms.com). Without it, the contact form will not submit — everything else on the site works fine without it.

---

## 📦 Build & Deploy

```bash
# Type-check + production build
npm run build

# Preview the production build locally
npm run preview

# Lint the codebase
npm run lint
```

The `dist/` folder contains the production-ready static files. Deploy to **Vercel** by connecting your GitHub repo — Vercel auto-detects Vite and sets the build command and output directory for you.

> **Note:** Add `VITE_WEB3FORMS_ACCESS_KEY` as an environment variable in your Vercel project settings for the contact form to work in production.

---

## 🗂️ Projects Showcased

| Project | Description | Live | Source |
|---|---|---|---|
| **Cohort Landing Page** | Modern responsive landing page built with HTML & CSS | [Live](https://snehabanik.github.io/cohort-landing-page/) | [GitHub](https://github.com/SnehaBanik/cohort-landing-page) |
| **Amazon Clone** | Detailed Amazon UI clone showcasing complex layout & responsive design | [Live](https://snehabanik.github.io/Amazon-Clone/) | [GitHub](https://github.com/SnehaBanik/Amazon-Clone) |
| **Portfolio Website** | This portfolio — React + Tailwind CSS | [Live](https://snehabanik-dev.vercel.app) | [GitHub](https://github.com/SnehaBanik/Portfolio) |

---

<div align="center">

<!-- Footer wave -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=C3E41D&height=120&section=footer&animation=fadeIn" width="100%" />


</div>
