# MERN App Practice

A web application developed using the MERN stack to practice full-stack web development. This project focuses on building user interfaces and connecting them with a backend and database.

## 🚀 Technologies Used

- **MongoDB** – NoSQL database for storing application data.
- **Express.js** – Backend web framework for Node.js.
- **React.js** – Frontend library for building user interfaces.
- **Node.js** – JavaScript runtime for server-side development.

## ✨ Features

- React-based frontend.
- User Authentication
- MongoDB databse connectivity 
- REST API integration using Express.js and Node.js.
- MongoDB database connectivity.
- Environment variable configuration.
- Modular project structure.


## 📁 Project Structure

```text
mern-app/
├── backend/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── .gitignore
└── README.md
```
 

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/roshnimishra0617-arch/mern-app-prac-.git
```

### 2. Navigate to the Project Directory

```bash
cd mern-app-prac-
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Add the environment variables required by your application. For example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret
```

Replace these example values with your actual configuration. Never commit your `.env` file or expose real credentials.

### 5. Start the Backend Server

```bash
npm run dev
```


### 6. Start the Frontend

Open a new terminal and navigate to your frontend directory:

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Store sensitive configuration in environment variables, including:

- MongoDB connection string.
- JWT secret.
- API keys, if required.

Keep `.env` excluded through `.gitignore`.

## 🎯 Project Objective

The objective of this project is to gain practical experience in full-stack web development, database integration, API development, and frontend-backend communication using the MERN stack.

## 👩‍💻 Author

**Roshni Mishra**

GitHub: [roshnimishra0617-arch](https://github.com/roshnimishra0617-arch)

## 📄 License

This project is intended for learning and development purposes.