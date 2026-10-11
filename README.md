<div align="center">

# Bazar Dor

### A modern Bengali market price tracking platform

Track essential product prices, compare market-based rates, monitor price movements, and explore daily বাজার দর through a clean, responsive experience.

**Live Application:** https://bazardor-market.vercel.app

</div>

---

## Overview

**Bazar Dor** is a production-ready Bengali market price tracking application built with **Next.js, TypeScript, Better Auth, and MongoDB Atlas**.

The platform presents daily prices of essential products in a clear Bengali interface while allowing users to explore categories, compare market-level pricing, track price increases and decreases, and access detailed product information through authenticated routes.

The project combines modern frontend architecture, secure authentication, dynamic API data, responsive design, and production deployment into a complete full-stack Next.js application.

## Core Experience

| Capability          | Description                                           |
| ------------------- | ----------------------------------------------------- |
| Daily Market Prices | View current prices of essential products             |
| Price Movement      | Identify increasing, decreasing, and unchanged prices |
| Category Browsing   | Explore products through organized categories         |
| Smart Sorting       | Sort prices from low to high or high to low           |
| Market Comparison   | Compare minimum, maximum, and average prices          |
| Protected Details   | Product details require authentication                |
| Multi-provider Auth | Email/password, Google, and GitHub authentication     |
| User Profile        | View and update authenticated user information        |
| Responsive UI       | Optimized for mobile, tablet, and desktop             |
| Production Ready    | Deployed and verified on Vercel                       |

---

## Key Features

### Market Price Dashboard

- Daily pricing for essential consumer products
- Bengali product names
- Bengali numeric formatting
- Product units including kilogram, litre, dozen, and piece
- Price increase and decrease indicators
- Scrolling live-style price ticker
- Dedicated rising and falling price sections

### Product Discovery

- Browse all available products
- Category-based product navigation
- Active category highlighting
- Responsive horizontal category navigation
- Sort products by:
  - Default
  - Price low to high
  - Price high to low

### Product Details

Each protected product page provides:

- Current price
- Price change percentage
- Product category and unit
- Minimum market price
- Maximum market price
- Average market price
- Market-wise price comparison
- Market and division information
- Related category navigation

### Authentication

Authentication is powered by **Better Auth** and persisted through **MongoDB Atlas**.

Supported authentication methods:

- Email and password registration
- Email and password sign in
- Google OAuth
- GitHub OAuth
- Secure session handling
- Authenticated Navbar state
- Sign out functionality
- Success and error notifications

### Protected Routes

Product details and profile pages are protected.

```text
Unauthenticated User
        ↓
Protected Product
        ↓
Sign In Required
        ↓
Authentication
        ↓
Original Product Page
```

Users are returned to the originally requested product after successful authentication.

### Profile Management

Authenticated users can:

- View account information
- View profile image or generated avatar
- View account email
- Update display name
- Persist changes in MongoDB
- See profile updates reflected in the Navbar

---

## Application Architecture

```text
                       ┌─────────────────┐
                       │     Bazar Dor   │
                       └────────┬────────┘
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
        Public Experience                  Authenticated Experience
              │                                   │
     ┌────────┴────────┐                 ┌────────┴─────────┐
     │                 │                 │                  │
 Home / Categories   Price Data     Product Details      Profile
     │                 │                 │                  │
     └──────────┬──────┘                 └────────┬─────────┘
                │                                 │
             External API                   Better Auth
                                                  │
                                         MongoDB Atlas
```

---

## Technology Stack

| Layer                 | Technology                  |
| --------------------- | --------------------------- |
| Framework             | Next.js 16                  |
| UI Library            | React 19                    |
| Language              | TypeScript                  |
| Styling               | Tailwind CSS 4              |
| Authentication        | Better Auth                 |
| Database              | MongoDB Atlas               |
| Auth Database Adapter | Better Auth MongoDB Adapter |
| Notifications         | React Hot Toast             |
| Icons                 | Lucide React, React Icons   |
| Price Ticker          | React Fast Marquee          |
| Deployment            | Vercel                      |

---

## Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   └── signup/
│   │
│   ├── api/
│   │   └── auth/
│   │
│   ├── category/
│   │   └── [slug]/
│   │
│   ├── product/
│   │   └── [slug]/
│   │
│   ├── profile/
│   │
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── category/
│   ├── home/
│   ├── layout/
│   ├── product/
│   ├── profile/
│   └── providers/
│
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   ├── auth-client.ts
│   └── mongodb.ts
│
└── types/
    └── bazar.ts
```

---

## Main Routes

| Route              | Access    | Purpose                         |
| ------------------ | --------- | ------------------------------- |
| `/`                | Public    | Home dashboard and all products |
| `/category/[slug]` | Public    | Category-based product listing  |
| `/product/[slug]`  | Protected | Detailed product information    |
| `/signin`          | Public    | User authentication             |
| `/signup`          | Public    | Account registration            |
| `/profile`         | Protected | Profile management              |
| Unknown route      | Public    | Custom 404 experience           |

---

## Authentication Flow

```text
Email / Google / GitHub
          ↓
      Better Auth
          ↓
     MongoDB Atlas
          ↓
    Session Created
          ↓
 Authenticated Access
```

---

## Data Layer

The application consumes the Bazar Dor API:

```text
https://api.api-store.workers.dev/api/bazardor
```

Primary resources:

```text
/products
/categories
```

Application-level filtering is used for:

- Category products
- Product lookup
- Price sorting
- Rising prices
- Falling prices

---

## Loading & Error Experience

The application includes dedicated UI states for better user experience:

- Home loading skeleton
- Category loading skeleton
- Custom 404 page
- Authentication errors
- Protected-route notification
- Sign in and sign out feedback
- Profile update feedback

---

## Responsive Design

The interface is designed for:

```text
Mobile
  ↓
Tablet
  ↓
Desktop
```

Responsive behavior includes:

- Compact authentication controls
- Horizontally scrollable category navigation
- Responsive product grids
- Mobile-friendly cards
- Responsive authentication pages
- Adaptive profile layout
- Scrollable market price tables
- Responsive footer
- Optimized user avatar handling

---

## Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> Never commit authentication credentials or environment files to source control.

---

## Local Development

Install dependencies:

```bash
npm install
```

Configure the required environment variables and start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Quality Checks

Before production deployment:

```bash
npm run lint
```

```bash
npm run build
```

The project is configured to pass both linting and production build validation.

---

## Production Deployment

The application is deployed with **Vercel** and connected to **MongoDB Atlas**.

Production authentication requires the following environment variables:

```text
MONGODB_URI
BETTER_AUTH_SECRET
BETTER_AUTH_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

Production URL:

```text
https://bazardor-market.vercel.app
```

OAuth callback routes:

```text
Google
/api/auth/callback/google

GitHub
/api/auth/callback/github
```

---

## Production Verification

The live application has been verified for:

- Email/password signup
- Email/password sign in
- Google authentication
- GitHub authentication
- MongoDB Atlas connectivity
- Authenticated sessions
- Protected product routes
- Redirect-back authentication flow
- Sign out
- Profile updates
- Persistent profile data
- Responsive Navbar
- Responsive Footer
- ESLint validation
- Production build
- Vercel deployment

---

## Engineering Highlights

This project demonstrates practical implementation of:

- Next.js App Router architecture
- Server and Client Components
- Dynamic routes
- Protected server routes
- OAuth authentication
- Database-backed sessions
- MongoDB integration
- Authentication-aware navigation
- Bengali localization
- Client-side sorting
- API-driven rendering
- Loading skeletons
- Error handling
- Responsive UI architecture
- Production OAuth configuration
- Production deployment workflow

---

<div align="center">

### Bazar Dor

**Essential market prices. Clear insights. One Bengali platform.**

</div>
