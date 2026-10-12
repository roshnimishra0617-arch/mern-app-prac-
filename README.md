# MERN Stack Authentication System 🔐

A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that implements user registration and login functionality. This project demonstrates how frontend and backend components work together to manage user authentication and store user information securely.

## 🚀 Features

- **User Registration:** Allows new users to create an account.
- **User Login:** Enables registered users to log in.
- **MongoDB Integration:** Stores user information in a MongoDB database.
- **REST API:** Uses Express.js and Node.js to handle authentication requests.
- **React Frontend:** Provides an interactive user interface.
- **Environment Variables:** Keeps sensitive configuration separate from source code.
- **Password Security:** Supports secure password storage when password hashing is implemented.
- **Authentication Validation:** Validates user credentials during login.

*Note: Features such as password hashing, JWT authentication, and protected routes should be listed as implemented only if they are present in your code.*

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| MongoDB | Database for storing user information |
| Express.js | Backend framework for handling HTTP requests |
| React.js | Frontend user interface |
| Node.js | Server-side JavaScript runtime |
| JavaScript | Application development |
| Git & GitHub | Version control and source code management |

## 📁 Project Structure

```text
mern-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── .gitignore
└── README.md
```

*The structure is illustrative. Update it to match your actual project folders.*

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB or a MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/roshnimishra0617-arch/mern-app-prac-.git
```

### 2. Navigate to the Project

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

Example configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
```

Replace the example values with your actual configuration. Your application may require different variable names depending on its implementation.

**Important:** Never upload `.env` to GitHub. Keep it excluded through `.gitignore`.

### 5. Start the Backend Server

If your `backend/package.json` includes a `dev` script, run:

```bash
npm run dev
```

Alternatively, if your entry point is `server.js`, run:

```bash
node server.js
```

### 6. Start the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in your terminal to access the application.

*If your React application is located in the project root rather than a `frontend` folder, run the frontend commands from the appropriate directory.*

## 🔐 Authentication Workflow

1. A new user submits the registration form.
2. The frontend sends the registration details to the backend API.
3. The backend validates the submitted information.
4. User information is stored in MongoDB.
5. The user submits their login credentials.
6. The backend verifies the credentials against the stored user record.
7. If authentication succeeds, the application responds according to its configured authentication mechanism.

## 🎯 Project Objectives

- Understand full-stack web development using the MERN stack.
- Implement user registration and login functionality.
- Connect a React frontend to a Node.js and Express backend.
- Integrate MongoDB for persistent data storage.
- Learn REST API development and environment configuration.
- Practice version control using Git and GitHub.

## 🔒 Security Considerations

- Store passwords using a suitable password-hashing algorithm such as bcrypt.
- Never store passwords as plain text.
- Keep database credentials and secret keys in environment variables.
- Use HTTPS in production.
- Validate and sanitize incoming data.
- Use secure authentication mechanisms and protect sensitive routes.

## 👩‍💻 Author

**Roshni Mishra**

GitHub: [roshnimishra0617-arch](https://github.com/roshnimishra0617-arch)

## 📄 License

This project is intended for educational and development purposes.