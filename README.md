<div align="center">

![Dashyboard](/public/assets/Dashy.png)

# 🚀 Dashyboard

**Admin & analytics dashboard — fast to customize and deploy**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartjs&logoColor=white)

## 🌐 LIVE PREVIEW

[![🚀 View Live Demo](https://img.shields.io/badge/🚀_View_Live_Demo-FF6B6B?style=for-the-badge&logo=vercel&logoColor=white)](https://dashyboard.vercel.app/)

**👉 [https://dashyboard.vercel.app/](https://dashyboard.vercel.app/) 👈**
</div>
---

## 📋 Table of Contents
- [Introduction](#-introduction)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#️-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)

---

## 🤖 Introduction

Dashyboard is a lightweight admin/analytics dashboard template that demonstrates a practical component-driven architecture using Next.js App Router, Radix UI primitives and Tailwind CSS. The repo includes a responsive sidebar, top navigation, charts, tables, and editable user pages to help you scaffold internal tools and admin panels quickly.


## ⚙️ Tech Stack

### Frontend
- **React 19.2.0** — UI library (see `package.json`)
- **Next.js 16.0.1** (App Router) — routing & server components
- **TypeScript ^5** — type safety
- **Tailwind CSS v4** — utility-first styling
- **Radix UI** — accessible primitives

### Data & UI
- **Recharts ^2.15.4** — charts
- **@tanstack/react-table ^8.21.3** — tables & pagination
- **react-hook-form ^7.66.0** + **zod ^4.1.12** — forms & validation

### Dev & Tooling
- **ESLint ^9** — linting
- **PostCSS / Tailwind** — CSS pipeline
- **Vercel** — recommended deployment

---

## 🔋 Features


### 🎯 Core Functionality
- Reusable dashboard layout with sidebar & top nav
- Chart components (area, line, pie) and small widgets
- Data table with sorting, filtering and pagination
- User pages with editable forms

### 🎨 User Experience
- Responsive, mobile-first UI using Tailwind CSS
- Theme toggling (light / dark / system) with no-flash mode
- Loading states, skeletons and small animations


---

## 🤸 Quick Start

### Prerequisites


### Install & Run

```bash
git clone https://github.com/therealhazem/Dashyboard.git
cd Dashyboard
npm install
# or
pnpm install
# or
yarn install

npm run dev
```

If you have a `.env.example`, create a local copy:

```bash
cp .env.example .env.local
```

If the repo doesn't include a `.env.example`, create a `.env.local` file manually and add any environment variables your setup requires (see the Environment Variables section above).

Open `http://localhost:3000` in your browser.

---

## 🕸️ Project Structure

```
dashboard/
├── app/                     # Next.js App Router (layouts & pages)
│   ├── layout.tsx           # Root layout (Theme + Sidebar providers)
│   ├── page.tsx             # Home / Dashboard page
│   └── users/               # Example user routes
├── components/              # Reusable components (Navbar, Sidebar, Charts)
├── components/ui/           # Small UI primitives (input, button, table)
├── lib/                     # Utilities & helpers
├── hooks/                   # Custom hooks
├── public/                  # Static assets
├── styles/                  # Global styles (Tailwind config + globals.css)
└── package.json             # Scripts & dependencies
```

---

## 🔗 Environment Variables

This repo doesn't require any external API keys to run the UI locally. If you add integrations, create a `.env.local` and reference them via Next.js env conventions. Example variables you may add later:

```env
# Example placeholders
NEXT_PUBLIC_API_URL=
SANITY_PROJECT_ID=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

---

## 🚀 Deployment

- Recommended: Deploy to Vercel (automatic support for Next.js)
- Or build and serve on any Node host:

```bash
npm run build
npm run start
```

---

## 📱 Screenshots

Add screenshots to `/public/assets` and the images will render below. Replace these files with your own screenshots when ready.

<div align="center">

### Homepage
![Homepage](/public/assets/Homee.png)

### Users / Profiles
![Users](/public/assets/Profilee.png)

### Payments
![Charts](/public/assets/Paymentss.png)

</div>

---

## 🤝 Contributing

- Fork the repo and make a branch per feature / fix
- Keep commits small and focused
- Follow existing component patterns
- Open a PR and describe the change

---

<div align="center">

**Made with ❤️ by Hazem Elgindy**

Check my portfolio: https://hazemelgindy.me

</div>
