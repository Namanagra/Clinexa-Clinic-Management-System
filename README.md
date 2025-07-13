# 🏥 Clinexa - Clinic Management System

Clinexa is a full-stack web application designed to streamline clinic operations for both doctors and receptionists. It allows efficient appointment scheduling, patient management, and medical record handling with user authentication and role-based access.

![Clinexa Logo](./Frontend//public/logo.png) <!-- Add path or remove if not applicable -->

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - Separate login for Admin (Doctor) and Receptionist
  - Role-based protected routes

- 🗓️ **Appointment Management**
  - Receptionist can create new appointments
  - Doctor can view, update status (Pending/Completed), and manage appointments

- 👤 **Patient Management**
  - Store and manage patient details with token generation

- 📈 **Dashboard Analytics (Planned)**
  - Overview of appointments, patients, and doctor availability

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios
- Toastify

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas 
- JSON Web Token (JWT)
- Bcrypt for hashing passwords

**Others:**
- Nodemon (Dev Dependency)
- Dotenv

## 📂 Folder Structure

```
Clinexa-Clinic-Management-System/
├── client/             # React frontend
│   ├── src/
│   └── public/
├── server/             # Express backend
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   └── routes/
├── .env
├── package.json
└── README.md
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Namanagra/Clinexa-Clinic-Management-System.git
cd Clinexa-Clinic-Management-System
```

### 2. Setup Backend

```bash
cd server
npm install
```

- Create a `.env` file in the `/server` directory:

```env
PORT=5000
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_secret_key
```

- Run the server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`  
Backend runs on `http://localhost:4000`

---

```

## 👥 User Roles

- **Admin (Doctor)**:
  - View & manage all appointments
  - Update appointment status

- **Receptionist**:
  - Add appointments
  - Generate tokens
  - Register patients

## 📌 Future Improvements

- Dashboard with analytics and graphs
- Appointment reminders via email/SMS
- Advanced search and filtering
- Medical report uploads

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check [issues](https://github.com/Namanagra/Clinexa-Clinic-Management-System/issues) page.

## 📜 License

This project is licensed under the MIT License.

---

### 💡 Developed by [Naman Agrawal](https://github.com/Namanagra)