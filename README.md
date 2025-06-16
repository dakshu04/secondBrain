# Second Brain Frontend (Client)

This is the frontend for the Second Brain project, built with **React**, **TypeScript**, and **Vite**.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Setup & Commands](#setup--commands)
- [Key Libraries](#key-libraries)
- [Core Logic](#core-logic)
- [Context & Hooks](#context--hooks)
- [Components](#components)
- [API Communication](#api-communication)
- [Environment Variables](#environment-variables)

---

## Project Structure

```
src/
  components/      # Reusable UI components
  context/         # React Context providers (e.g., Auth, Theme)
  hooks/           # Custom React hooks
  pages/           # Page-level components (routes)
  services/        # API service functions (e.g., axios wrappers)
  utils/           # Utility/helper functions
  App.tsx          # Main app component
  main.tsx         # Entry point
  Config.ts        # App configuration (API URLs, etc.)
```

---

## Setup & Commands

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Start development server**
   ```sh
   npm run dev
   ```

3. **Build for production**
   ```sh
   npm run build
   ```

4. **Preview production build**
   ```sh
   npm run preview
   ```

5. **Lint code**
   ```sh
   npm run lint
   ```

---

## Key Libraries

- **React**: UI library for building interactive interfaces.
- **Vite**: Fast dev server and build tool.
- **TypeScript**: Static typing for JavaScript.
- **React Router DOM**: Routing and navigation.
- **Axios**: HTTP client for API requests.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Context API**: State management across components.
- **ESLint & Prettier**: Code quality and formatting.

---

## Core Logic

- **Authentication**: Uses JWT tokens stored in localStorage. Auth context manages login state and user info.
- **Routing**: Protected routes using custom hooks and context to restrict access to authenticated users.
- **API Calls**: All API requests are made via Axios, with interceptors for adding auth tokens and handling errors.
- **State Management**: Global state (auth, theme, etc.) is managed using React Context and custom hooks.

---

## Context & Hooks

- **AuthContext**: Provides authentication state and methods (`login`, `logout`, `register`, `isAuthenticated`).
- **ThemeContext**: Manages light/dark mode and persists preference.
- **useAuth**: Custom hook to access auth context.
- **useFetch**: Custom hook for data fetching with loading/error states.
- **useLocalStorage**: Custom hook for persisting state in localStorage.

---

## Components

- **Navbar**: Top navigation bar, shows user info and logout.
- **Sidebar**: Navigation links for main sections.
- **Login/Register**: Auth forms with validation.
- **Dashboard**: Main user dashboard after login.
- **NoteEditor**: Rich text editor for notes.
- **NoteList**: Displays list of user notes.
- **ProtectedRoute**: Wrapper for routes that require authentication.

---

## API Communication

- All API endpoints are defined in `services/api.ts`.
- Uses Axios for HTTP requests.
- Handles token refresh and error responses globally.

---

## Environment Variables

- **VITE_BACKEND_URL**: Backend API base URL.
- Configure in `.env` file at project root.

---

# Second Brain Backend (Server)

This is the backend for the Second Brain project, built with **Express** and **TypeScript**.

---

## Table of Contents

- [Project Structure](#project-structure-1)
- [Setup & Commands](#setup--commands-1)
- [Key Libraries](#key-libraries-1)
- [Core Logic](#core-logic-1)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [Environment Variables](#environment-variables-1)

---

## Project Structure

```
src/
  controllers/     # Route handler logic
  middleware/      # Express middleware (auth, error handling)
  models/          # Mongoose models (User, Note, etc.)
  routes/          # API route definitions
  utils/           # Utility functions (token, hashing)
  app.ts           # Express app setup
  server.ts        # Server entry point
```

---

## Setup & Commands

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Build TypeScript**
   ```sh
   npm run build
   ```

3. **Start server**
   ```sh
   npm run start
   ```

4. **Development mode (auto-restart)**
   ```sh
   npm run dev
   ```

---

## Key Libraries

- **Express**: Web server framework.
- **TypeScript**: Type-safe JavaScript.
- **Mongoose**: MongoDB object modeling.
- **jsonwebtoken**: JWT authentication.
- **bcryptjs**: Password hashing.
- **dotenv**: Loads environment variables.
- **CORS**: Cross-origin resource sharing.
- **Morgan**: HTTP request logging.

---

## Core Logic

- **User Authentication**: Register, login, JWT-based auth, password hashing.
- **Notes CRUD**: Create, read, update, delete notes for authenticated users.
- **Middleware**: Auth middleware checks JWT, error handler formats errors.
- **Validation**: Request validation for user input.

---

## API Endpoints

- `POST /api/v1/user/register` — Register new user
- `POST /api/v1/user/login` — Login user
- `GET /api/v1/notes` — Get all notes (auth required)
- `POST /api/v1/notes` — Create note (auth required)
- `PUT /api/v1/notes/:id` — Update note (auth required)
- `DELETE /api/v1/notes/:id` — Delete note (auth required)

---

## Authentication

- Uses JWT tokens for stateless authentication.
- Tokens are sent in the `Authorization` header as `Bearer <token>`.
- Passwords are hashed with bcrypt before storing in MongoDB.

---

## Database

- **MongoDB** is used for data storage.
- **Mongoose** models define User and Note schemas.
- Connection string is set in `.env` as `MONGODB_URI`.

---

## Environment Variables

- **PORT**: Server port (default: 3000)
- **MONGODB_URI**: MongoDB connection string
- **JWT_SECRET**: Secret for signing JWT tokens

---

For any questions, see the code comments or contact the project maintainer.