# Flamora Agri — Agriculture Marketplace Platform

## Executive Summary

Flamora Agri is a premium, national-scale agriculture marketplace platform designed for India, starting from Tamil Nadu. It connects farmers, buyers/traders, and service providers through a modern, mobile-first experience with market price intelligence, location-based discovery, and multilingual support (Tamil/English).

---

## 1. Page-by-Page UI Structure

### Public Pages
| Route | Page | Key Components |
|-------|------|----------------|
| `/` | Home/Dashboard | Hero, CategoryGrid, FeaturedListings, MarketPricesWidget, LocationSelector |
| `/explore` | Browse Listings | SearchBar, FilterSidebar, ListingGrid, MapView (optional) |
| `/explore/[category]` | Category Listings | CategoryBreadcrumb, SubcategoryTabs, ListingGrid |
| `/listing/[id]` | Listing Detail | ImageGallery, SellerCard, EnquiryForm, ShareActions |
| `/market-prices` | Market Price Intelligence | MarketSelector, CropFilter, PriceChart, PriceTable |
| `/about` | About Us | CMS content |
| `/privacy` | Privacy Policy | CMS content |
| `/terms` | Terms & Conditions | CMS content |
| `/contact` | Contact | Contact form |

### Auth Pages
| Route | Page | Key Components |
|-------|------|----------------|
| `/login` | Login | OTPForm, EmailLoginOption, RoleSelector |
| `/verify-otp` | OTP Verification | OTPInput, ResendTimer |
| `/register` | Registration | ProfileForm, LocationPicker, RoleSelection |
| `/forgot-password` | Password Reset | EmailInput, ResetFlow |

### User Dashboard (Protected)
| Route | Page | Key Components |
|-------|------|----------------|
| `/dashboard` | Dashboard Overview | StatsCards, RecentActivity, QuickActions |
| `/dashboard/listings` | My Listings | ListingTable, AddListingButton, BulkActions |
| `/dashboard/listings/new` | Add Listing | MultiStepForm, ImageUploader, CategoryPicker |
| `/dashboard/listings/[id]/edit` | Edit Listing | Same as Add with pre-filled data |
| `/dashboard/favourites` | Saved Listings | FavouriteGrid |
| `/dashboard/enquiries` | My Enquiries | EnquiryList, ResponseForm |
| `/dashboard/profile` | Profile Settings | ProfileForm, LocationEdit, LanguageToggle |
| `/dashboard/notifications` | Notifications | NotificationList, MarkAsRead |

### Admin Panel
| Route | Page | Key Components |
|-------|------|----------------|
| `/admin` | Admin Dashboard | AnalyticsOverview, PendingListings, UserStats |
| `/admin/listings` | Listing Moderation | ModerationQueue, ApproveRejectActions |
| `/admin/users` | User Management | UserTable, BlockUser, RoleChange |
| `/admin/categories` | Category Management | CategoryTree, AddEditCategory |
| `/admin/locations` | Location Management | StateDistrictTalukVillage CRUD |
| `/admin/market-prices` | Price Update | BulkPriceUpload, ManualEntry |
| `/admin/ads` | Ad Management | BannerManager, FeaturedListingManager |
| `/admin/cms` | CMS Pages | RichTextEditor for About/Privacy/Terms |
| `/admin/analytics` | Reports | Charts, Heatmap, Export |

---

## 2. Component Hierarchy

```
App
├── Layout (Root)
│   ├── Header
│   │   ├── Logo
│   │   ├── SearchBar (global)
│   │   ├── LanguageToggle (Tamil/English)
│   │   ├── LocationSelector
│   │   └── AuthButtons / UserMenu
│   ├── Main (outlet)
│   └── Footer
│       ├── QuickLinks
│       ├── ContactInfo
│       └── SocialLinks
│
├── HomePage
│   ├── HeroSection
│   ├── CategoryGrid (icon-based)
│   ├── FeaturedListings
│   ├── MarketPricesWidget
│   ├── LocationBasedTrending
│   └── CTA Section
│
├── ListingCard (reusable)
│   ├── ImageGallery (thumb)
│   ├── CategoryBadge
│   ├── Title, Price, Location
│   ├── SellerAvatar
│   └── ActionButtons (Save, Share)
│
├── ListingDetailPage
│   ├── ImageGallery (full)
│   ├── ListingInfo
│   ├── SellerCard
│   ├── EnquiryForm
│   └── ShareActions
│
├── MarketPricesPage
│   ├── FilterBar
│   ├── PriceChart (recharts)
│   ├── PriceTable
│   └── TrendIndicators
│
└── DashboardLayout (protected)
    ├── Sidebar
    └── ContentArea
```

---

## 3. Design System

### Color Palette (Earthy, Premium)
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#2D5A27` | Buttons, links, brand |
| Primary Light | `#4A7C43` | Hover states |
| Secondary | `#B8860B` | Accents, featured badges |
| Tertiary | `#8B4513` | Earth tones |
| Background | `#FAF8F5` | Page background |
| Surface | `#FFFFFF` | Cards |
| Text Primary | `#1A1A1A` |
| Text Secondary | `#6B7280` |
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |

### Typography
- Headings: **DM Serif Display** (premium, editorial)
- Body: **Plus Jakarta Sans** (clean, readable)
- Tamil: **Noto Sans Tamil** (fallback)

### Spacing & Shadows
- Card shadow: `0 4px 6px -1px rgba(45, 90, 39, 0.08)`
- Hover elevation: `0 10px 15px -3px rgba(45, 90, 39, 0.12)`
- Border radius: 12px (cards), 8px (buttons)

---

## 4. Technical Stack Summary

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, CSS Variables |
| Animation | Framer Motion |
| State | React Query (TanStack Query), Zustand |
| Forms | React Hook Form + Zod |
| Backend | NestJS, TypeORM |
| Database | PostgreSQL |
| Auth | JWT + OTP (Twilio/MSG91) |
| Storage | S3-compatible (MinIO/AWS S3) |
| CDN | CloudFront / Cloudflare |
| Hosting | Vercel (frontend), Railway/Render (backend) |

---

## 5. SEO Strategy

- **Dynamic meta tags** per listing: `og:title`, `og:description`, `og:image`
- **Structured data**: Product schema for listings
- **Sitemap**: Auto-generated for `/explore`, `/listing/[id]`, `/market-prices`
- **Canonical URLs**: Prevent duplicate content
- **Tamil/English**: `hreflang` for language variants
- **Performance**: Image optimization (next/image), lazy loading

---

## 6. Performance Optimizations

- **Image optimization**: WebP, responsive sizes, lazy load
- **Code splitting**: Route-based, dynamic imports for heavy components
- **Caching**: React Query stale-while-revalidate, CDN for static assets
- **Bundle**: Tree-shaking, analyze bundle size
- **PWA**: Optional service worker for offline listing view
- **Infinite scroll**: Virtualized lists for large listing grids
