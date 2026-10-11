<div align="center">

# BAZAR DOR

### Daily Market Price Tracker & Comparison Platform

A responsive Bengali market price tracking app built with Next.js, TypeScript, Better Auth, and MongoDB Atlas.

[**Live Demo**](https://bazardor-market.vercel.app)

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-Authentication-111827?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## About Bazar Dor

**Bazar Dor** is a Bengali daily market price tracking and comparison platform built around a simple experience:

**browse → compare → inspect → track**

Users can explore essential products, monitor price increases and decreases, browse category-based listings, compare prices across markets, and view detailed pricing information for individual products.

The application also includes secure authentication, protected product details, user profile management, responsive layouts, loading states, and production-ready deployment.

---

## What You Can Do

| Feature               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| **Browse Products**   | Explore essential daily products from the market API |
| **Track Prices**      | View current product prices in Bengali formatting    |
| **Monitor Changes**   | Identify rising, falling, and unchanged prices       |
| **Browse Categories** | Explore products through dedicated category pages    |
| **Sort Products**     | Sort prices from low to high or high to low          |
| **Compare Markets**   | Review minimum, maximum, and average market prices   |
| **View Details**      | Open detailed product and market information         |
| **Create an Account** | Register using email and password                    |
| **Social Login**      | Continue with Google or GitHub                       |
| **Manage Profile**    | View and update authenticated user information       |

---

## Core Experience

### Market Dashboard

The homepage provides a complete overview of current market activity.

Users can see:

- Daily market price ticker
- Current Bengali date
- Top rising prices
- Top falling prices
- All available products
- Price change percentage
- Product category and unit
- Bengali formatted numbers

The dashboard is designed to surface the most important market information without requiring users to open individual products.

### Category Browsing

Products are organized into dedicated market categories.

Each category page includes:

- Category name
- Category icon
- Total product count
- Category-specific products
- Default sorting
- Price low to high sorting
- Price high to low sorting

The active category is highlighted in the navigation for easier browsing.

### Product Details

Each product has a protected details page containing:

- Product name
- Category
- Product unit
- Current price
- Price movement percentage
- Minimum market price
- Maximum market price
- Average market price
- Market-wise price table
- Market division
- Related category navigation

Users must be authenticated before accessing product details.

### Authentication

Bazar Dor uses **Better Auth** with **MongoDB Atlas** for authentication and persistent user data.

Users can authenticate through:

- Email and password
- Google
- GitHub

Authentication also powers:

- Secure user sessions
- Protected product routes
- Protected profile routes
- Authentication-aware Navbar
- Sign out functionality
- Redirect-back behavior after login

### User Profile

Authenticated users have access to a dedicated profile page.

Users can:

- View their profile name
- View their account email
- View Google or GitHub profile images
- See a generated avatar for email accounts
- Update their display name
- Persist profile changes in MongoDB

Updated profile information is reflected directly in the Navbar.

---

## Thoughtful UX

Bazar Dor includes smaller interaction details that make the application feel complete:

- Sticky navigation
- Active category states
- Horizontal mobile category navigation
- Scrolling market price ticker
- Bengali number formatting
- Responsive authentication controls
- Protected-route feedback
- Redirect back after authentication
- Sign in success feedback
- Sign out success feedback
- Profile update notifications
- Loading skeletons
- Custom 404 page
- Product sorting
- Responsive market tables
- Remote profile image optimization
- Consistent footer
- Mobile, tablet, and desktop layouts

---

## Tech Stack

| Technology             | Role                                            |
| ---------------------- | ----------------------------------------------- |
| **Next.js 16**         | App Router, rendering, routing, protected pages |
| **React 19**           | Component architecture and interactivity        |
| **TypeScript**         | Type-safe application development               |
| **Tailwind CSS 4**     | Responsive styling                              |
| **Better Auth**        | Authentication and session management           |
| **MongoDB Atlas**      | User and authentication database                |
| **MongoDB Adapter**    | Better Auth database integration                |
| **React Hot Toast**    | User feedback and notifications                 |
| **React Fast Marquee** | Scrolling market price ticker                   |
| **Lucide React**       | Interface icons                                 |
| **React Icons**        | Social authentication icons                     |
| **Next Image**         | Optimized local and remote images               |
| **Vercel**             | Production deployment                           |

---

## Routes

| Route              | Access    | Description                       |
| ------------------ | --------- | --------------------------------- |
| `/`                | Public    | Market dashboard and all products |
| `/category/[slug]` | Public    | Category-based product listing    |
| `/product/[slug]`  | Protected | Individual product details        |
| `/signin`          | Public    | User sign in                      |
| `/signup`          | Public    | User registration                 |
| `/profile`         | Protected | User profile management           |

Invalid routes and unavailable resources are handled through a dedicated Not Found experience.

---

## Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts
│   │
│   ├── category/
│   │   └── [slug]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   │
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── globals.css
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

## Data Source

Market data is loaded from the Bazar Dor API.

**Base API**

```text
https://api.api-store.workers.dev/api/bazardor
```

**Products**

```text
https://api.api-store.workers.dev/api/bazardor/products
```

**Categories**

```text
https://api.api-store.workers.dev/api/bazardor/categories
```

Application-level filtering is used for category products and individual product lookup.

---

## Authentication & Database

Authentication is managed through Better Auth and MongoDB Atlas.

```text
User
 ↓
Email / Google / GitHub
 ↓
Better Auth
 ↓
MongoDB Atlas
 ↓
Session
 ↓
Authenticated Experience
```

MongoDB stores authentication-related collections including:

```text
user
account
session
```

Protected pages validate the current user session before allowing access.

---

## Protected Route Flow

```text
Product Card
     ↓
Product Details
     ↓
Session Check
     ↓
 ┌───────────────┐
 │ Authenticated? │
 └───────┬───────┘
         │
    Yes  │  No
     ↓   │   ↓
 Details │ Sign In
         │   ↓
         │ Authenticate
         │   ↓
         └→ Original Product
```

This allows users to continue exactly where they left off after signing in.

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

Environment files are excluded from version control.

---

## Run Locally

Install dependencies:

```bash
npm install
```

Create the required `.env` file and configure the environment variables.

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Scripts

| Command         | Purpose                      |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run lint`  | Run ESLint                   |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |

---

## Production Setup

The production application is deployed on Vercel and connected to MongoDB Atlas.

Production environment variables:

```text
MONGODB_URI
BETTER_AUTH_SECRET
BETTER_AUTH_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

OAuth callback routes:

```text
Google
/api/auth/callback/google

GitHub
/api/auth/callback/github
```

---

## Responsive Layout

| Device      | Experience                                                     |
| ----------- | -------------------------------------------------------------- |
| **Mobile**  | Compact navigation, single-column cards, scrollable categories |
| **Tablet**  | Balanced multi-column product layouts                          |
| **Desktop** | Expanded dashboard, product grid, and market comparison view   |

Every major part of the application including navigation, hero content, product cards, category pages, product details, authentication pages, profile page, market table, and footer is responsive.

---

## Production Verification

The deployed application has been verified for:

- Email and password signup
- Email and password sign in
- Google authentication
- GitHub authentication
- MongoDB Atlas connectivity
- Protected product routes
- Redirect-back authentication flow
- Sign out
- User profile updates
- Persistent profile data
- Responsive Navbar
- Responsive Footer
- ESLint validation
- Production build
- Vercel deployment

---

<div align="center">

### Know the market. Compare the price. Buy with clarity.

[**Open Bazar Dor →**](https://bazardor-market.vercel.app)

</div>
