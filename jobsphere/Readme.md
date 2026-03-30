# JobSphere 🚀

JobSphere is a modern, high-performance job board platform that connects talented professionals with innovative companies. Built with a robust full-stack architecture, it offers a seamless experience for both job seekers (Talents) and employers (Recruiters).

---

## 🏛️ Project Architecture

JobSphere follows a strictly decoupled **Client-Server Architecture**.

### 🖥️ Client-Side (Frontend)
The frontend is a **Single Page Application (SPA)** built with **React 19**, **TypeScript**, and **Vite**.

#### **Core Features:**
- **State Management:** Uses **Redux Toolkit** for centralized state (Authentication, User session).
- **Styling:** Leveraged **Tailwind CSS 4** for a modern, responsive, and performance-first UI.
- **Animations:** Implemented smooth transitions and micro-interactions using **Framer Motion**.
- **Routing:** Handled by **React Router DOM** with protected routes based on user roles.
- **API Communication:** Utilizes **Axios** with global interceptors for automatic JWT handling.

#### **Directory Structure:**
- `/src/api`: Service layer for HTTP logic.
- `/src/components`: Atomic and composite UI components.
- `/src/pages`: Main application views (Home, JobDetails, Login, etc.).
- `/src/store`: Redux slices and store configuration.
- `/src/interface`: Centralized TypeScript type definitions.

### ⚙️ Server-Side (Backend)
The backend is a **RESTful API** built with **Node.js**, **Express**, and **MongoDB**.

#### **Core Features:**
- **Database:** **MongoDB** with **Mongoose ODM** for structured data modeling and validation.
- **Authentication:** **JWT (JSON Web Tokens)** for stateless session management.
- **Security:** Password hashing with **Bcrypt** and role-based access control (RBAC).
- **Pattern:** Follows a **Controller-Service-Repository** pattern for maximum separation of concerns and testability.

#### **Directory Structure:**
- `/models`: Database schemas (User, Job).
- `/routes`: API endpoint definitions.
- `/controllers`: Request handling and response coordination.
- `/services`: Business logic layer.
- `/repositories`: Data access layer (DB operations).
- `/middleware`: Authentication and Role-based authorization.

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19**
- **TypeScript**
- **Vite** (Build Tool)
- **Redux Toolkit** (State Management)
- **Tailwind CSS 4** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Axios** (HTTP Client)

### **Backend**
- **Node.js**
- **Express.js** (Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **Bcrypt** (Hashing)
- **Dotenv** (Environment Management)

---

## 🔑 Key Features & User Roles

### **Common Features**
- Secure **JWT Authentication** (Signup/Login).
- Responsive job listing and search.
- Detailed job descriptions and company information.

### **Talent (Job Seeker)**
- View available job opportunities.
- Detailed job insights (Requirements, responsibilities, etc.).

### **Recruiter (Employer)**
- Post new job opportunities.
- Role-protected access to job creation features.

---

## 📡 API Reference

### **Authentication**
- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Authenticate user and receive token.

### **Jobs**
- `GET /api/jobs`: Fetch all jobs (Protected).
- `GET /api/jobs/:id`: Fetch specific job details (Protected).
- `POST /api/jobs`: Create a new job listing (Recruiter only).

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18+)
- MongoDB (Local or Atlas)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/bemnet-21/CSEC_DEV_BOOTCAMP.git
   cd jobsphere
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create a .env file with:
   # MONGO_URI, JWT_SECRET, PORT
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   # Create a .env file with:
   # VITE_BASE_URL=http://localhost:5000/api
   npm run dev
   ```

---

## 🛡️ Security
- **RBAC (Role-Based Access Control):** Strictly enforces that only users with the `recruiter` role can post jobs.
- **JWT Interceptors:** Automatically attaches tokens to every request on the client-side.
- **Password Safety:** No plain passwords ever reach the database.

---

Created for the **CSEC DEV BOOTCAMP**.
