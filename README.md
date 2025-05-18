# CRM (Desktop Only)

This is a simple **CRM dashboard** built using **Next.js 14**, **Tailwind CSS**, and **TypeScript**.  
The project is built for **desktop view only** and does not support responsive design. This CRM allows users to add and manage companies and their promotions by using a MockAPI-based backend.
![App Snapshot](/public/readme_picture.webp)

## 🔗 Live Demo

[https://crm-psi-nine.vercel.app](https://crm-psi-nine.vercel.app)

## ⚙️ Tech Stack

- Next.js 14 — React framework with server-side rendering and App Router support
- Tailwind CSS — Utility-first CSS framework
- TypeScript — Type-safe JavaScript
- MockAPI – Fake backend
- React Query – Async data fetching
- Formik – Form state management
- Vercel — Hosting platform for application

## 📁 Project Structure

src/
├── app/
│ ├── (admin)/
│ │ ├── companies/
│ │ │ ├── [id]/
│ │ │ │ ├── not-found.tsx
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ │ ├── dashboard/
│ │ │ ├── error.tsx
│ │ │ └── page.tsx
│ │ └── layout.tsx
│ ├── components/
│ ├── lib/

## 🧩 Features

- Admin dashboard layout
- Modular and clean folder structure
- Uses Next.js App Router
- Desktop-only version
- Create, delete and manage companies and their promotions
- Filter by category, country, and status

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/EevgenK/crm.git
   cd crm
   ```

2. Install dependencies::
   ```bash
   yarn install
   ```
3. Run the development server::
   ```bash
   yarn dev
   ```
4. Open http://localhost:3000 in your browser to see the app.

## 👤 Author

Evgen Kulbachenko

👉 [More works and contact info](https://portfolio-react-gamma-orcin.vercel.app/)
