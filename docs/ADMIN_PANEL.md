# Flamora Agri — Admin Panel Layout

## Route Structure

```
/admin                    → Dashboard
/admin/login              → Admin login
/admin/listings           → Listing moderation queue
/admin/users              → User management
/admin/categories         → Category CRUD
/admin/locations          → Location hierarchy (State → District → Taluk → Village)
/admin/market-prices      → Bulk price upload, manual entry
/admin/ads                → Banners, featured listings
/admin/cms                → About, Privacy, Terms
/admin/analytics          → Reports, heatmaps
```

## Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo] Admin Panel                    [User] [Logout]            │
├──────────┬──────────────────────────────────────────────────────┤
│          │ Dashboard                                              │
│ Sidebar  │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│          │ │ DAU     │ │ Listings│ │ Pending │ │ Revenue │       │
│ ├ Listings│ │ 1,234  │ │ 5,678  │ │ 23      │ │ ₹45K   │       │
│ ├ Users   │ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
│ ├ Categories│                                                      │
│ ├ Locations │ ┌─────────────────────────────────────────────────┐ │
│ ├ Prices   │ │ Pending Listings (approve/reject)                 │ │
│ ├ Ads      │ │ [Listing 1] [Approve] [Reject]                    │ │
│ ├ CMS      │ │ [Listing 2] [Approve] [Reject]                    │ │
│ ├ Analytics│ └─────────────────────────────────────────────────┘ │
│          │                                                      │
│          │ ┌─────────────────────────────────────────────────┐ │
│          │ │ Regional Demand Heatmap (map)                    │ │
│          │ └─────────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────────┘
```

## Component Structure

```
AdminLayout
├── AdminSidebar
│   ├── NavItem (listings, users, etc.)
│   └── Logout
├── AdminHeader
│   ├── Breadcrumb
│   └── UserMenu
└── ContentArea (children)
```

## Key Admin Components

| Component | Purpose |
|-----------|---------|
| ModerationQueue | List pending listings with approve/reject |
| UserTable | Search, filter, block users |
| CategoryTree | Nested CRUD for categories |
| LocationTree | State → District → Taluk → Village |
| PriceUploadForm | CSV/Excel bulk upload |
| BannerManager | Add/edit banner ads |
| AnalyticsCharts | DAU, listings by category, region heatmap |

## Admin API Endpoints

See `docs/API_CONTRACTS.md` — Admin section.

## Admin Auth

- Separate admin login (email/password)
- JWT with `role: admin` or `super_admin`
- Role-based access: moderator can approve listings; super_admin can manage users
