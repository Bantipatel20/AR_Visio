# 🚀 AR-Studio

**Cross-Platform Augmented Reality Visualization Platform**

A full-stack AR visualization system enabling users to view, customize, and save 3D objects in real-world environments through web and mobile interfaces.

---

## 📌 Overview

AR-Studio is a lightweight, cross-platform AR solution that bridges the gap between web and mobile AR experiences. Users can visualize 3D objects in AR, customize them, and save configurations across devices.

**Key Objectives:**
- Provide accessible AR visualization without heavy native apps
- Enable cross-platform access (Web + Mobile)
- Offer personalized, persistent AR experiences
- Support learning and experimentation with AR technology

---

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based user registration and login
- 🌐 **Web AR** - WebXR-based AR with Three.js 3D viewer fallback
- 📱 **Mobile AR** - ARCore integration for real-world object placement
- 🎨 **Customization** - Adjust color, scale, and rotation of 3D objects
- 💾 **Save Configurations** - Persist and reload AR setups
- 🔄 **Cross-Platform Sync** - Access saved configurations on any device

---

## 🛠️ Technology Stack

### Web Frontend
- React.js
- Tailwind CSS
- Three.js
- WebXR API
- Axios

### Mobile App
- Flutter
- ARCore (Android)
- ar_flutter_plugin
- HTTP package

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT Authentication
- bcrypt

### Deployment
- **Web:** Vercel/Netlify
- **Backend:** Render
- **Mobile:** APK (Android)

---

## 🏗️ Architecture

```
Web App (React)        Mobile App (Flutter)
        ↓                       ↓
        └──── REST APIs (Express) ────┐
                                       ↓
                                   MongoDB
```

---

## 📁 Project Structure

```
AR_Visio/
│
├── Web-Frontend/          # React Web Application
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── ar/
│   │   └── services/
│   └── package.json
│
├── App-Frontend/          # Flutter Mobile App
│   ├── lib/
│   │   ├── screens/
│   │   ├── ar/
│   │   ├── models/
│   │   └── services/
│   └── pubspec.yaml
│
├── Backend/               # Node.js API Server
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## 🧩 Core Modules

| Module | Description | APIs |
|--------|-------------|------|
| **Authentication** | User registration, login, JWT sessions | 2 |
| **User Dashboard** | Personalized workspace and AR history | - |
| **Object Management** | Browse and select 3D objects | 1 |
| **AR Visualization** | WebXR (web) + ARCore (mobile) | - |
| **Customization** | Modify object properties in real-time | - |
| **Save Configuration** | Persist and manage AR setups | 3 |
| **Admin** (Optional) | Upload and manage 3D models | 2 |

**Total APIs:** 8-9

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- Flutter SDK (for mobile)
- Android Studio (for mobile testing)

### Backend Setup
```bash
cd Backend
npm install
# Configure .env file
npm start
```

### Web Frontend Setup
```bash
cd Web-Frontend
npm install
npm start
```

### Mobile App Setup
```bash
cd App-Frontend
flutter pub get
flutter run
```

---

## 🧪 Testing

- **API Testing:** Postman
- **Web Testing:** Browser (Chrome recommended for WebXR)
- **Mobile Testing:** Real Android device with ARCore support
- **Authentication:** JWT token validation and expiry

---

## 📦 Deliverables

- ✅ GitHub Repository (Monorepo)
- ✅ Live Web Application
- ✅ Android APK
- ✅ API Documentation
- ✅ Project Report (PDF)
- ✅ Presentation (PPT)
- ✅ Demo Video

---

## 🎯 Why This Project?

- **Full-Stack:** MERN + Flutter integration
- **Modern Tech:** AR, WebXR, ARCore
- **Cross-Platform:** Web + Mobile unified experience
- **Scalable:** Clean architecture with modular design
- **Portfolio-Ready:** Strong resume and interview value
- **Educational:** AR learning without commercial complexity

---

## 📄 License

This project is developed as a final-year academic project.

---

## 👥 Contributors

[Your Team Names]

---

## 📧 Contact

For queries and collaboration: [Your Email]

---

**Built with ❤️ for AR enthusiasts and learners**
