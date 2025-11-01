# 🎓 Student Assignment Dashboard

A **role-based assignment management system** built with **React + Tailwind CSS**, allowing admins to create and manage assignments while students can view and submit them through provided links.

🚀 **Live Demo:** [https://student-assignment-dashboard-opal.vercel.app/](https://student-assignment-dashboard-opal.vercel.app/)

---

## 🌟 Features

### 👨‍💼 Admin Side
- Create new assignments with title, description, due date, and Google Drive form link.
- View all created assignments in a clean, responsive card layout.
- Automatically saves assignment data locally (can be extended with a backend).

### 🎓 Student Side
- View all active assignments.
- Each assignment card displays title, description, and due date.
- Submissions are tracked per student.
- Dynamic student switching via dropdown.

### 🧠 General
- Role-based rendering using a simple role selector (Admin / Student 1–4).
- LocalStorage persistence for user role and assignment data.
- Fully responsive UI built with **Tailwind CSS**.

---

## 🏗️ Architecture Overview

The project is designed around **modular components and role-based views**:

App.jsx
│
├── components/
│ ├── AssignmentForm.jsx # Admin form for creating assignments
│ ├── AssignmentCardAdmin.jsx # Assignment display for admin
│ ├── AssignmentCardStudent.jsx # Assignment display for student
│ ├── SelectNewRole.jsx # Dropdown for switching roles
│
├── pages/
│ ├── AdminDashboard.jsx # Admin-specific dashboard
│ ├── StudentDashboard.jsx # Student-specific dashboard
│
├── data/
│ └── sampleAssignments.js # Local mock data for development
│
├── styles/
│ └── index.css # Tailwind + custom styles
│
└── main.jsx # Entry point with ReactDOM

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/student-assignment-dashboard.git
cd student-assignment-dashboard
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start Development Server
bash
Copy code
npm run dev
4️⃣ Build for Production
bash
Copy code
npm run build
5️⃣ Deploy
You can easily deploy this app on Vercel, Netlify, or any static host.

🧩 Component Structure & Design Decisions
1. Role Management
Role (admin, student-1, etc.) is stored in localStorage.

SelectNewRole component updates role globally using a callback to App.jsx.

2. Admin Flow
Admin creates assignments via AssignmentForm.

Assignments are stored in state and displayed in AdminDashboard.

Each assignment uses AdminAssignmentCard for consistent UI.

3. Student Flow
Students view assignments through StudentDashboard.

Submissions are tracked by student name (student-1, etc.).

Cards dynamically show if an assignment is “Submitted” or “Pending”.

4. Styling
Tailwind CSS ensures fast and responsive design.

Clean visual hierarchy with rounded cards, shadows, and hover effects.

🧱 Folder Structure
arduino
Copy code
student-assignment-dashboard/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
🗃️ Technologies Used
Category	Tools / Libraries
Frontend	React.js, Vite
Styling	Tailwind CSS
State Management	React Hooks (useState, useEffect)
Storage	localStorage
Deployment	Vercel

🔗 Links
Live Demo: https://student-assignment-dashboard-opal.vercel.app/

GitHub Repo: (add your repo link here once created)

🧠 Future Improvements
Add backend (Node + MongoDB) to persist assignments.

Implement user authentication (JWT or Firebase).

File upload for student submissions.

Add dashboard analytics for admin.

🧑‍💻 Author
Aditya Raj
🎓 Computer Science & Engineering, IERT Prayagraj
📧 adityarajxdev@gmail.com
🌐 GitHub | LinkedIn

