# StayNest – Hostel Room Booking Web Application

An intuitive, responsive student accommodation booking portal built with React and Vite for **WEB 301 – Advanced Frontend Engineering**.

---

## Project Description

StayNest is a modern hostel accommodation management dashboard designed for university students to easily find and secure their campus lodging. 

Key features include:
- **Interactive Dashboard:** Live hostel overview with real-time room and bed statistics.
- **Room Exploration:** Search rooms by room number or block, and filter by room type (AC vs. Non-AC).
- **Comprehensive Room Details:** Detailed view of facilities, capacity, floor, and monthly rent with dynamic routing (`/rooms/:id`).
- **Single-Room Booking Restriction:** Enforces strict business logic where a student can only reserve one room at a time.
- **Dynamic Capacity Management:** Updates occupied bed counts and available bed badges instantly without page reloads.
- **My Booking Management:** Dedicated view to check active room reservation and cancel booking whenever required.

---

## Technologies Used

- **React 19** – Functional components and JSX architecture
- **Vite** – Ultra-fast development server and optimized build tool
- **React Router (v7)** – Declarative client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`) imported strictly from `"react-router"`
- **Pure Modern CSS (App.css)** – Custom CSS tokens, responsive flexbox and grid layouts, subtle shadows, and clean typography (No Tailwind, No Bootstrap, No external UI libraries)
- **Local In-Memory State (`useState`)** – Pure React state management without Redux, Context API, or `useEffect`

---

## Project Structure

```text
homework/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.css
    ├── App.jsx
    ├── main.jsx
    ├── data/
    │   └── rooms.js
    ├── components/
    │   ├── Navbar.jsx
    │   └── RoomCard.jsx
    └── pages/
        ├── Home.jsx
        ├── Rooms.jsx
        ├── RoomDetails.jsx
        └── MyBooking.jsx
```

---

## Core Booking Business Logic (Problem Statement P1)

1. **One Room at a Time:** A student can only have one active booking. Booking a room locks other rooms with an *"Already booked another room"* status message.
2. **Cancellation:** When a student cancels their booking, `isBooked` is set to `false`, `occupied` beds decrease by 1, and the active reservation is cleared.
3. **Capacity Guard:** Rooms at full capacity (`occupied === capacity`) display a *"Room Full"* badge, and the Book button is hidden.
4. **Live Synchronization:** The Navbar booking badge, statistics on the Home page, bed counters, and buttons update immediately across all routes without browser refresh.

---

## Installation & Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Step 1: Install Dependencies
Open your terminal in the project root directory and execute:
```bash
npm install
```

### Step 2: Run Development Server
Start the local Vite dev server:
```bash
npm run dev
```

Once running, navigate to the local URL displayed in the terminal (typically `http://localhost:5173/`).

### Step 3: Build for Production
To generate an optimized production bundle:
```bash
npm run build
```

---

## Tested Scenarios & Verification

1. **Navigation:** All client-side links (`/`, `/rooms`, `/rooms/:id`, `/my-booking`) navigate seamlessly with the active tab highlighted.
2. **Search & Filter:** Searching "A-101", "Block B", or filtering by "AC" / "Non-AC" filters cards accurately with clean empty-state fallbacks.
3. **Booking Flow:** Booking a room immediately updates the occupied beds, reflects "Your Booking" on the card, and updates the Navbar counter to `1`.
4. **Constraint Verification:** Attempting to book a second room is blocked by UI status notifications.
5. **Full Room Restrictions:** Fully occupied rooms cannot be booked and clearly show *"Room Full"*.
6. **Cancellation Flow:** Cancelling resets the room's occupancy and updates all pages instantly.
# Assigment_7_Web
