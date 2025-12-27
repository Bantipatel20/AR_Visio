# AR_Visio Copilot Instructions

## Project Overview
This is a **monorepo** for a cross-platform AR visualization platform with three independent components that communicate via REST APIs. Not an e-commerce app - focus is on AR learning and experimentation.

## Architecture & Data Flow
```
Web-Frontend (React + WebXR) ──┐
                                ├──→ Backend (Express REST APIs) ──→ MongoDB Atlas
App-Frontend (Flutter + ARCore) ┘
```

- **Backend** exposes unified REST APIs consumed by both frontends
- **Authentication**: JWT-based, tokens stored client-side
- **Data persistence**: MongoDB for users, 3D object metadata, and AR configurations
- **No shared code** between frontends - each is independently deployable

## Monorepo Structure
```
Backend/          # Node.js + Express API server
Web-Frontend/     # React + Three.js + WebXR
App-Frontend/     # Flutter + ARCore (Android)
```

Each folder is a **separate project** with its own dependencies. Never import across folders.

## Technology Stack & Key Dependencies

### Backend (Node.js)
- **Framework**: Express.js
- **Database**: Mongoose (MongoDB ODM)
- **Auth**: bcrypt + jsonwebtoken
- **CORS**: Enabled for cross-origin requests from web/mobile
- **Typo in package.json**: `"epxress"` dependency is a typo (should be `express`)
- **Start command**: `npm start` runs `nodemon index.js`

**Expected folder structure** (currently empty):
- `controllers/` - Business logic handlers
- `routes/` - API endpoint definitions
- `models/` - Mongoose schemas (User, Object, Config)
- `middleware/` - Auth validation, error handling
- `config/` - DB connection, environment variables

### Web-Frontend (React)
- **Core**: React.js + Tailwind CSS
- **3D/AR**: Three.js (3D rendering) + WebXR API (AR mode)
- **API calls**: Axios
- **AR fallback**: Desktop shows 3D viewer, mobile supports WebXR AR

**Expected structure**:
- `src/pages/` - Login, Register, Dashboard, AR Viewer
- `src/components/` - Reusable UI components
- `src/ar/` - Three.js scenes, WebXR logic
- `src/services/` - API service layer (axios instances)

### App-Frontend (Flutter)
- **Platform**: Android (ARCore required)
- **AR**: `ar_flutter_plugin`
- **API**: `http` package for REST calls
- **State management**: TBD (likely Provider or Riverpod)

**Expected structure**:
- `lib/screens/` - Login, Dashboard, AR Camera
- `lib/ar/` - ARCore integration
- `lib/models/` - Data models (User, Config)
- `lib/services/` - HTTP API client

## Development Workflows

### Backend Development
```bash
cd Backend
npm install
# Create .env with: MONGO_URI, JWT_SECRET, PORT
npm start  # Runs nodemon for hot-reload
```

**API Testing**: Use Postman or REST Client VSCode extension
**Database**: MongoDB Atlas connection string required

### Web Development
```bash
cd Web-Frontend
npm install
npm start  # Typically runs React dev server
```

**AR Testing**: Chrome/Edge on desktop (3D viewer) or Android with WebXR support

### Mobile Development
```bash
cd App-Frontend
flutter pub get
flutter run  # Requires Android device/emulator with ARCore
```

**Testing**: Physical Android device recommended for AR features

## API Patterns & Modules

### Expected API Endpoints (8-9 total)
```
POST   /api/auth/register       # User signup
POST   /api/auth/login          # Returns JWT token

GET    /api/objects             # List 3D objects
POST   /api/objects             # Upload object (admin)
DELETE /api/objects/:id         # Remove object (admin)

POST   /api/config/save         # Save AR configuration
GET    /api/config/user         # Get user's configs
DELETE /api/config/:id          # Delete saved config
```

### MongoDB Schemas (Mongoose)
- **User**: username, email, password (hashed), role
- **Object**: name, modelUrl (3D file), thumbnailUrl, category
- **Config**: userId, objectId, customizations (color, scale, rotation)

## Project-Specific Conventions

### Authentication Flow
1. User registers/logs in → Backend returns JWT
2. Frontend stores token (localStorage/SharedPreferences)
3. All protected routes require `Authorization: Bearer <token>` header
4. Backend middleware validates JWT before processing requests

### 3D Object Management
- Objects are **referenced by URL**, not uploaded directly to MongoDB
- Store 3D files externally (e.g., cloud storage) and save URLs in DB
- Supported formats: GLTF/GLB for web (Three.js), FBX for Flutter

### AR Customization
- Color: Hex string (e.g., `#FF5733`)
- Scale: Float multiplier (e.g., `1.5` = 150% size)
- Rotation: Euler angles or quaternions (document which format)
- All saved in `Config` schema

## Critical Points

### Environment Variables (.env)
Backend requires:
```
MONGO_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
PORT=5000
```

Never commit `.env` - add to `.gitignore`

### CORS Configuration
Backend must allow origins:
- `http://localhost:3000` (React dev)
- `http://localhost:5000` (possible React port)
- Production web domain
- Mobile uses IP address (e.g., `http://192.168.x.x:5000`)

### Deployment Checklist
- **Backend**: Render (update CORS for production URLs)
- **Web**: Vercel/Netlify (configure API base URL)
- **Mobile**: Build APK with production API endpoint
- **Database**: MongoDB Atlas (whitelist deployment IPs)

## Common Issues & Solutions

1. **JWT expiry**: Default 1h/24h? Document token refresh strategy
2. **ARCore availability**: Check device compatibility before AR launch
3. **WebXR support**: Provide clear fallback messaging for unsupported browsers
4. **File size**: Optimize 3D models (recommend < 5MB for mobile)

## When Adding Features

- **New API endpoint**: Add route → controller → update Postman collection
- **New UI page**: Add to `pages/`, create service method, add route
- **New AR object**: Upload model, create DB entry, test on both platforms
- **DB schema change**: Update Mongoose model, consider migration script

## Testing Strategy
- **Backend**: Manual API testing (no test suite currently)
- **Web**: Browser testing (Chrome DevTools for WebXR)
- **Mobile**: Real device testing (ARCore requires physical Android device)
- **Auth**: Test JWT expiry, invalid tokens, unauthorized access

---

**Key Files to Reference:**
- [README.md](../README.md) - Full project overview
- `Backend/package.json` - Dependencies (note the "epxress" typo)
- Expected: `Backend/models/User.js`, `Backend/routes/auth.js` - Auth patterns
