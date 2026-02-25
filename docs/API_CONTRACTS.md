# Flamora Agri — API Contracts

Base URL: `https://api.flamoraagri.com/v1` (or `/api/v1` for same-origin)

---

## Authentication

### POST /auth/send-otp
**Request:**
```json
{
  "mobile": "+919876543210",
  "role": "farmer"  // optional, for new users
}
```
**Response:** `201`
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "expiresIn": 300
}
```

### POST /auth/verify-otp
**Request:**
```json
{
  "mobile": "+919876543210",
  "otp": "123456"
}
```
**Response:** `200`
```json
{
  "accessToken": "eyJ...",
  "refreshToken": "eyJ...",
  "expiresIn": 3600,
  "user": {
    "id": "uuid",
    "name": "Kumar",
    "mobile": "+919876543210",
    "role": "farmer",
    "language": "ta",
    "isNewUser": false
  }
}
```

### POST /auth/login (email)
**Request:**
```json
{
  "email": "user@example.com",
  "password": "***"
}
```
**Response:** Same as verify-otp

### POST /auth/refresh
**Headers:** `Authorization: Bearer <refreshToken>`
**Response:** `200` — New access + refresh tokens

### POST /auth/logout
**Headers:** `Authorization: Bearer <accessToken>`
**Response:** `204`

---

## Users

### GET /users/me
**Auth:** Required
**Response:** `200`
```json
{
  "id": "uuid",
  "name": "Kumar",
  "mobile": "+919876543210",
  "email": "kumar@example.com",
  "role": "farmer",
  "language": "ta",
  "avatarUrl": "https://...",
  "locations": [
    {
      "state": { "id": "...", "name": "Tamil Nadu" },
      "district": { "id": "...", "name": "Coimbatore" },
      "taluk": { "id": "...", "name": "..." },
      "village": { "id": "...", "name": "..." }
    }
  ]
}
```

### PATCH /users/me
**Auth:** Required
**Request:**
```json
{
  "name": "Kumar",
  "language": "ta",
  "locations": [...]
}
```
**Response:** `200` — Updated user

### POST /users/deactivate
**Auth:** Required
**Response:** `204`

---

## Listings

### GET /listings
**Query params:**
- `category` (slug)
- `state`, `district`, `taluk`, `village` (IDs)
- `lat`, `lng`, `radius` (km)
- `minPrice`, `maxPrice`
- `q` (search)
- `sort`: `latest` | `price_asc` | `price_desc` | `distance` | `popular`
- `page`, `limit` (default 20)

**Response:** `200`
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Organic Tomato",
      "category": { "id": "...", "name": "Vegetables", "slug": "vegetables" },
      "quantity": 500,
      "unit": "kg",
      "price": 25,
      "isPriceNegotiable": true,
      "location": { "district": "Coimbatore", "village": "..." },
      "media": [{ "url": "...", "type": "image" }],
      "status": "active",
      "isFeatured": false,
      "viewCount": 42,
      "seller": { "name": "Kumar", "avatarUrl": "..." },
      "createdAt": "2025-02-25T..."
    }
  ],
  "meta": {
    "total": 150,
    "page": 1,
    "limit": 20,
    "totalPages": 8
  }
}
```

### GET /listings/:id
**Response:** `200` — Full listing with seller, media, location

### POST /listings
**Auth:** Required (farmer/service_provider)
**Request:** FormData or JSON
```json
{
  "title": "Organic Tomato",
  "categoryId": "uuid",
  "description": "...",
  "quantity": 500,
  "unit": "kg",
  "price": 25,
  "isPriceNegotiable": true,
  "stateId": "uuid",
  "districtId": "uuid",
  "talukId": "uuid",
  "villageId": "uuid",
  "media": ["url1", "url2"]
}
```
**Response:** `201` — Created listing

### PATCH /listings/:id
**Auth:** Required (owner)
**Request:** Partial listing
**Response:** `200`

### DELETE /listings/:id
**Auth:** Required (owner)
**Response:** `204`

### POST /listings/:id/pause
**Auth:** Required (owner)
**Response:** `200`

### POST /listings/:id/boost
**Auth:** Required (owner)
**Request:** `{ "durationDays": 7 }`
**Response:** `200` — Payment flow / subscription check

---

## Categories & Locations

### GET /categories
**Query:** `?parent=uuid` (optional, for subcategories)
**Response:** `200`
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Vegetables",
      "nameTa": "காய்கறிகள்",
      "slug": "vegetables",
      "icon": "leaf",
      "children": [...]
    }
  ]
}
```

### GET /locations
**Query:** `?type=state|district|taluk|village&parent=uuid`
**Response:** `200`
```json
{
  "data": [
    { "id": "uuid", "name": "Tamil Nadu", "nameTa": "தமிழ்நாடு", "type": "state" }
  ]
}
```

---

## Market Prices

### GET /market-prices
**Query:**
- `marketId`
- `crop` (name)
- `fromDate`, `toDate`
- `limit`

**Response:** `200`
```json
{
  "data": [
    {
      "market": { "name": "Coimbatore APMC" },
      "cropName": "Tomato",
      "cropNameTa": "தக்காளி",
      "unit": "kg",
      "minPrice": 20,
      "maxPrice": 35,
      "modalPrice": 28,
      "priceDate": "2025-02-25",
      "trend": "up"  // up | down | stable
    }
  ]
}
```

### GET /market-prices/history
**Query:** `marketId`, `crop`, `fromDate`, `toDate`, `granularity=day|week`
**Response:** `200` — Time series for charts

### GET /markets
**Response:** `200` — List of markets

---

## Enquiries & Favourites

### POST /listings/:id/enquire
**Auth:** Required
**Request:** `{ "message": "..." }`
**Response:** `201`

### GET /enquiries
**Auth:** Required
**Query:** `?listingId=uuid&status=pending`
**Response:** `200` — List of enquiries

### POST /enquiries/:id/reply
**Auth:** Required (listing owner)
**Request:** `{ "message": "..." }`
**Response:** `200`

### POST /listings/:id/favourite
**Auth:** Required
**Response:** `201`

### DELETE /listings/:id/favourite
**Auth:** Required
**Response:** `204`

### GET /favourites
**Auth:** Required
**Response:** `200` — List of favourited listings

---

## Notifications

### GET /notifications
**Auth:** Required
**Query:** `?unreadOnly=true&page&limit`
**Response:** `200`

### PATCH /notifications/:id/read
**Auth:** Required
**Response:** `200`

### PATCH /notifications/read-all
**Auth:** Required
**Response:** `200`

---

## Admin APIs (prefix /admin)

### POST /admin/login
### GET /admin/dashboard
### GET /admin/listings (moderation queue)
### PATCH /admin/listings/:id/approve
### PATCH /admin/listings/:id/reject
### GET /admin/users
### PATCH /admin/users/:id/block
### CRUD /admin/categories
### CRUD /admin/locations
### CRUD /admin/markets
### POST /admin/market-prices (bulk upload)
### CRUD /admin/banners
### GET /admin/analytics
### PATCH /admin/cms/:slug

---

## Error Response Format

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    { "field": "mobile", "message": "Invalid mobile number" }
  ]
}
```
