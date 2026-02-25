# Flamora Agri — Agriculture Marketplace Platform

A premium, national-scale agriculture marketplace connecting farmers, buyers, and service providers across India. Built for Tamil Nadu first, with Tamil/English support, market price intelligence, and location-based discovery.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install root + workspace dependencies
npm run install:all

# Or manually:
npm install
cd apps/web && npm install
cd ../api && npm install
```

### Development

```bash
# Run both frontend and backend
npm run dev

# Or run separately:
npm run dev:frontend   # Next.js on http://localhost:3000
npm run dev:backend    # NestJS on http://localhost:3001
```

### Build

```bash
npm run build
```

---

## 📁 Project Structure

```
flamora-agri/
├── apps/
│   ├── web/                 # Next.js 14 frontend
│   │   ├── src/
│   │   │   ├── app/          # App Router pages
│   │   │   ├── components/
│   │   │   ├── lib/
│   │   │   └── types/
│   │   └── ...
│   └── api/                  # NestJS backend
│       ├── src/
│       │   ├── auth/
│       │   ├── listings/
│       │   ├── categories/
│       │   └── market-prices/
│       └── ...
├── docs/
│   ├── ARCHITECTURE.md       # Page structure, components, design system
│   ├── DATABASE_SCHEMA.md    # PostgreSQL schema
│   ├── API_CONTRACTS.md      # REST API spec
│   └── ADMIN_PANEL.md        # Admin layout & routes
└── README.md
```

---

## ✨ Features

### User-Facing
- **OTP & Email Login** — Mobile-first auth
- **Product Listings** — 10 categories (Farm Produce, Vegetables, Fruits, Flowers, Livestock, Dairy, Equipment, Fertilizers, Cattle Feed, Services)
- **Location-Based Discovery** — State → District → Taluk → Village
- **Market Price Intelligence** — Daily prices, trends, historical charts
- **Search & Filters** — Keyword, category, location, price range
- **Buyer–Seller Communication** — Call, WhatsApp, in-app enquiry
- **Tamil / English** — Language toggle

### Admin
- Listing moderation (approve/reject)
- User management
- Category & location CRUD
- Market price updates
- Banners & featured listings
- Analytics & reports

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React 18, Tailwind CSS, Framer Motion |
| Backend | NestJS, TypeScript |
| Database | PostgreSQL (schema in docs) |
| Auth | JWT, OTP (Twilio/MSG91) |
| Storage | S3-compatible (images) |

---

## 📄 Key Routes

| Route | Description |
|-------|-------------|
| `/` | Home / Dashboard |
| `/explore` | Browse listings |
| `/listing/[id]` | Listing detail |
| `/market-prices` | Market price intelligence |
| `/login` | OTP / Email login |
| `/admin` | Admin dashboard |

---

## 🔧 Environment Variables

### Frontend (`apps/web/.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

### Backend (`apps/api/.env`)

```
PORT=3001
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
# DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME (when using PostgreSQL)
```

---

## 📚 Documentation

- [Architecture & Design](docs/ARCHITECTURE.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [API Contracts](docs/API_CONTRACTS.md)
- [Admin Panel](docs/ADMIN_PANEL.md)

---

## 📜 License

Proprietary — Flamora Agri
