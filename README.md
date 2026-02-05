# Portfolio Website - Kosari Madhusudhan

A premium, production-ready MERN portfolio website built for a Full-Stack + ML Engineer. featuring a modern React frontend and a Node.js backend for contact form functionality.

## 🚀 Features

- **Modern Design**: Built with React, Tailwind CSS, and Framer Motion for smooth animations.
- **Responsive**: Fully responsive implementation for all devices.
- **Fast**: Powered by Vite.
- **Case Studies**: Detailed project pages with problem statements, tech stack, and metrics.
- **Contact Form**: Email integration using Nodemailer.
- **Achievements**: Sections for Research, Leadership, and Coding Profiles.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS**
- **Framer Motion**
- **React Router**
- **React Icons**

### Backend
- **Node.js**
- **Express.js**
- **Nodemailer**

## 📂 Directory Structure

```
portfolio/
├── frontend/       # React Frontend Application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── ...
├── backend/        # Node.js Backend Application
│   ├── routes/
│   ├── controllers/
│   └── ...
└── README.md
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Setup Frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend:**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Variables:**
   - Create a `.env` file in `backend/` with:
     ```env
     PORT=5000
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_RECEIVER=your-email@gmail.com
     ```

### Running Locally

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

## 🚀 Deployment

### Frontend (Vercel / GitHub Pages)
- **Vercel**: Connect your GitHub repo, selecting `frontend` as the root directory. Vercel automatically detects Vite.
- **GitHub Pages**: Configure `vite.config.js` base URL if not user/org site.

### Backend (Render)
- Connect GitHub repo.
- Root Directory: `backend`.
- Build Command: `npm install`.
- Start Command: `node server.js`.
- Add Environment Variables in Dashboard.

## 📄 License
MIT
