# 👥 KeenKeeper — Keep Your Friendships Alive

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

![KeenKeeper Banner](https://img.shields.io/badge/KeenKeeper-v1.0.0-1e4d3a?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwindcss)
![Recharts](https://img.shields.io/badge/Recharts-2-8B5CF6?style=flat-square)

---

## 📖 Description

**KeenKeeper** is a friendship relationship management app that helps you stay connected with the people that matter most. Track your last contact dates, set contact goals, log interactions, and visualize your friendship activity — all in one beautiful interface.

---

## 🚀 Live Demo

- **Live Link**: _[Add after deployment]_
- **GitHub Repository**: https://github.com/mdsadrulhasandider/B13-A7-keen-keeper

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 18 (Vite)** | Fast UI framework with hot module replacement |
| **React Router DOM v6** | Client-side routing for seamless navigation |
| **Tailwind CSS v3** | Utility-first responsive styling |
| **Recharts** | Interactive Pie Chart for friendship analytics |
| **localStorage** | Persistent timeline data across sessions |

---

## ✨ Key Features

### 1. 👫 Smart Friend Management
View all your friends in a clean 4-column grid. Each card shows the friend's photo, name, days since last contact, relationship tags (e.g., "work", "family"), and a color-coded status badge — **Overdue**, **Almost Due**, or **On-Track**.

### 2. ⚡ Quick Check-In with Timeline Logging
From any friend's detail page, use the **Quick Check-In** card to log a **Call**, **Text**, or **Video** interaction in one click. Each action instantly adds a timestamped entry to the global Timeline page with a toast notification confirming the log.

### 3. 📊 Friendship Analytics (Pie Chart)
The **Stats page** displays an interactive donut pie chart (built with Recharts) that breaks down your interaction history by type — Call, Text, and Video — giving you a visual overview of how you're staying connected.

---

## 📁 Project Structure

```
keen-keeper/
├── public/
│   └── _redirects          # Netlify SPA routing fix
├── src/
│   ├── assets/             # Logo, social icons, action icons
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navbar with active link highlighting
│   │   ├── Footer.jsx      # Dark green footer with social links
│   │   └── Toast.jsx       # Slide-in toast notification
│   ├── context/
│   │   └── AppContext.jsx  # Global state: friends, timeline, toast
│   ├── data/
│   │   └── friends.json    # 10 realistic friend profiles
│   ├── pages/
│   │   ├── Home.jsx        # Banner, summary cards, friends grid
│   │   ├── FriendDetail.jsx # Two-column detail with check-in
│   │   ├── Timeline.jsx    # Interaction history with filter
│   │   ├── Stats.jsx       # Analytics pie chart
│   │   └── NotFound.jsx    # Custom 404 page
│   ├── App.jsx             # Root with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind + custom styles
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mdsadrulhasandider/B13-A7-keen-keeper.git

# 2. Navigate to the project folder
cd B13-A7-keen-keeper/keen-keeper

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Pages

| Route | Page |
|---|---|
| `/` | Home — Friend cards grid |
| `/friend/:id` | Friend Detail — Stats, goals, check-in |
| `/timeline` | Timeline — Interaction history with filter |
| `/stats` | Friendship Analytics — Pie chart |
| `*` | 404 Not Found |

---

## 🚀 Deployment

Deployed on **Netlify** / **Vercel**. The `public/_redirects` file ensures client-side routing works correctly on page reload.

```bash
npm run build
# Upload the /dist folder to Netlify or connect GitHub repo
```

---

## 👨‍💻 Author

**Md Sadrul Hasan Dider**  
Batch 13 · Assignment 7

---

*© 2026 KeenKeeper. All rights reserved.*
