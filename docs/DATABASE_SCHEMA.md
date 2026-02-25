# Flamora Agri — Database Schema

## Entity Relationship Overview

```
users ──┬── listings
        ├── enquiries
        ├── favourites
        ├── notifications
        └── user_locations

listings ──┬── listing_media
           ├── enquiries
           └── favourites

categories (self-referential)
locations (state → district → taluk → village)

market_prices
markets
banners
subscriptions
```

---

## Tables

### 1. users
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| mobile | VARCHAR(15) | UNIQUE, NOT NULL |
| email | VARCHAR(255) | UNIQUE, nullable |
| password_hash | VARCHAR(255) | nullable (for email login) |
| name | VARCHAR(100) | NOT NULL |
| role | ENUM | 'farmer', 'buyer', 'service_provider' |
| language | VARCHAR(5) | DEFAULT 'en' ('ta', 'en') |
| avatar_url | VARCHAR(500) | nullable |
| is_active | BOOLEAN | DEFAULT true |
| is_verified | BOOLEAN | DEFAULT false |
| last_login_at | TIMESTAMP | nullable |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 2. user_locations
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| state_id | UUID | FK → locations |
| district_id | UUID | FK → locations |
| taluk_id | UUID | FK → locations |
| village_id | UUID | FK → locations |
| latitude | DECIMAL(10,8) | nullable |
| longitude | DECIMAL(11,8) | nullable |
| is_primary | BOOLEAN | DEFAULT false |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 3. locations (hierarchical)
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| parent_id | UUID | FK → locations (self) |
| name | VARCHAR(100) | NOT NULL |
| name_ta | VARCHAR(100) | Tamil name |
| type | ENUM | 'state', 'district', 'taluk', 'village' |
| code | VARCHAR(20) | nullable (e.g. TN, 01) |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 4. categories
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| parent_id | UUID | FK → categories (self) |
| name | VARCHAR(100) | NOT NULL |
| name_ta | VARCHAR(100) | Tamil name |
| slug | VARCHAR(100) | UNIQUE |
| icon | VARCHAR(50) | icon name |
| sort_order | INT | DEFAULT 0 |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 5. listings
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| category_id | UUID | FK → categories |
| title | VARCHAR(200) | NOT NULL |
| description | TEXT | nullable |
| quantity | DECIMAL(12,2) | NOT NULL |
| unit | VARCHAR(20) | kg, quintal, piece, etc. |
| price | DECIMAL(12,2) | nullable (negotiable) |
| is_price_negotiable | BOOLEAN | DEFAULT true |
| state_id | UUID | FK → locations |
| district_id | UUID | FK → locations |
| taluk_id | UUID | FK → locations |
| village_id | UUID | FK → locations |
| latitude | DECIMAL(10,8) | nullable |
| longitude | DECIMAL(11,8) | nullable |
| status | ENUM | 'draft', 'pending', 'active', 'paused', 'rejected' |
| is_featured | BOOLEAN | DEFAULT false |
| featured_until | TIMESTAMP | nullable |
| view_count | INT | DEFAULT 0 |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 6. listing_media
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| listing_id | UUID | FK → listings |
| url | VARCHAR(500) | NOT NULL |
| type | ENUM | 'image', 'video' |
| sort_order | INT | DEFAULT 0 |
| created_at | TIMESTAMP | |

### 7. enquiries
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| listing_id | UUID | FK → listings |
| user_id | UUID | FK → users |
| message | TEXT | NOT NULL |
| status | ENUM | 'pending', 'replied', 'closed' |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 8. favourites
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| listing_id | UUID | FK → listings |
| created_at | TIMESTAMP | |
| UNIQUE(user_id, listing_id) | | |

### 9. notifications
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| type | VARCHAR(50) | e.g. 'new_listing', 'enquiry_reply' |
| title | VARCHAR(200) | |
| body | TEXT | |
| data | JSONB | { listing_id, etc. } |
| is_read | BOOLEAN | DEFAULT false |
| created_at | TIMESTAMP | |

### 10. markets
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| name | VARCHAR(100) | NOT NULL |
| name_ta | VARCHAR(100) | |
| district_id | UUID | FK → locations |
| code | VARCHAR(20) | nullable |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 11. market_prices
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| market_id | UUID | FK → markets |
| crop_name | VARCHAR(100) | NOT NULL |
| crop_name_ta | VARCHAR(100) | |
| unit | VARCHAR(20) | kg, quintal |
| min_price | DECIMAL(12,2) | |
| max_price | DECIMAL(12,2) | |
| modal_price | DECIMAL(12,2) | |
| price_date | DATE | NOT NULL |
| created_at | TIMESTAMP | |
| UNIQUE(market_id, crop_name, price_date) | | |

### 12. banners
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| title | VARCHAR(200) | |
| image_url | VARCHAR(500) | NOT NULL |
| link_url | VARCHAR(500) | nullable |
| region | VARCHAR(50) | nullable (state/district) |
| sort_order | INT | DEFAULT 0 |
| is_active | BOOLEAN | DEFAULT true |
| start_date | DATE | nullable |
| end_date | DATE | nullable |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 13. otp_verifications
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| mobile | VARCHAR(15) | NOT NULL |
| otp | VARCHAR(6) | NOT NULL |
| expires_at | TIMESTAMP | NOT NULL |
| verified | BOOLEAN | DEFAULT false |
| created_at | TIMESTAMP | |

### 14. admin_users
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| email | VARCHAR(255) | UNIQUE |
| password_hash | VARCHAR(255) | |
| role | ENUM | 'super_admin', 'admin', 'moderator' |
| is_active | BOOLEAN | DEFAULT true |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 15. cms_pages
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK |
| slug | VARCHAR(50) | UNIQUE (about, privacy, terms) |
| title | VARCHAR(200) | |
| content | TEXT | |
| language | VARCHAR(5) | 'en', 'ta' |
| updated_at | TIMESTAMP | |

---

## Indexes

- `listings(user_id, status)`
- `listings(category_id, status)`
- `listings(created_at DESC)`
- `listings(state_id, district_id)` for location filter
- `market_prices(market_id, price_date)`
- `market_prices(crop_name, price_date)`
- `enquiries(listing_id, user_id)`
- `favourites(user_id)`
- `notifications(user_id, is_read)`
