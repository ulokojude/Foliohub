# 🚀 Dynamic Portfolio Builder

An open-source, multi-tenant SaaS platform that allows users to seamlessly create, customize, and host their own dynamic, professional portfolio websites with zero coding required.

---

## 🌟 Features

- **User Authentication:** Secure sign-up, login, and session management.
- **Dynamic Portfolio Routing:** Portfolios are served instantly at `yourdomain.com/[username]` or `[username].yourdomain.com`.
- **Interactive Dashboard:** An intuitive, form-driven creator engine to update profile details, work experience, projects, education, and social links in real time.
- **Customizable Themes:** Switch between pre-designed templates and customize accent colors, layouts, and typography.
- **SEO & Performance Optimized:** Fast page loads with optimized open-graph metadata for rich social sharing.
- **Secure by Design:** Input sanitization to protect against XSS, and secure database indexing for rapid queries.

---

## 🏗️ Architecture Overview

The application is structured into three main layers:

┌────────────────────────────────────────────────────────┐
│                   Frontend (Client)                    │
│  ┌──────────────────────────┐  ┌────────────────────┐  │
│  │    Creator Dashboard     │  │ Public Portfolio   │  │
│  │ (React / Form Management)│  │ (Dynamic Templates)│  │
│  └────────────┬─────────────┘  └─────────▲──────────┘  │
└───────────────│──────────────────────────│─────────────┘

│ API Requests             │ Fetch Data
▼                          │
┌──────────────────────────────────────────┴─────────────┐
│                   Backend API Gateway                  │
│       Express.js / Next.js API Routes (Middleware)     │
└───────────────────────┬────────────────────────────────┘

│ Read / Write
▼
┌────────────────────────────────────────────────────────┐
│                        Database                        │
│                PostgreSQL / MongoDB                    │
└────────────────────────────────────────────────────────┘


---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Lucide Icons, Axios
- **Backend:** Node.js, Express.js (or Next.js API Routes)
- **Database:** PostgreSQL (with Prisma ORM) or MongoDB (with Mongoose)
- **Deployment:** Vercel / Netlify (Frontend), Render / Railway / Heroku (Backend)

---

## 🗄️ Database Schema

The core relational structure maps portfolios directly to their creators:

- **User Table:** `id`, `email`, `password_hash`, `username` (acts as the unique URL slug)
- **Profile Table:** `id`, `user_id`, `full_name`, `title`, `bio`, `avatar_url`, `theme_color`
- **Projects Table:** `id`, `user_id`, `title`, `description`, `link`, `image_url`
- **Experience Table:** `id`, `user_id`, `company`, `role`, `start_date`, `end_date`, `description`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or yarn
- A running PostgreSQL or MongoDB instance

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ulokojude/Foliohub.git](https://github.com/ulokojude/Foliohub.git)
   cd Foliohub