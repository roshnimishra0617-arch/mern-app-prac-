const express = require("express"); const mongoose = require("mongoose"); const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs"); const jwt = require("jsonwebtoken");
 
dotenv.config();
const app = express(); app.use(cors()); app.use(express.json());
const User = mongoose.model( "User",
new mongoose.Schema({ name: String,
email: { type: String, unique: true }, password: String
})
);
// Register
app.post("/register", async (req, res) => { try {
const { name, email, password } = req.body;
if (!name || !email || !password || password.length < 8) { return res.status(400).json({
message: "Enter all details and password of 8+ characters"
});
}
const existingUser = await User.findOne({ email });


if (existingUser) {
return res.status(409).json({ message: "Email already registered"
});
}	const hashedPassword = await bcrypt.hash(password, 10); await User.create({
name, email,
password: hashedPassword
 
});
res.status(201).json({
message: "Registration successful"
});
} catch (error) { console.error(error); res.status(500).json({
message: "Registration failed"
});
}
});
// Login
app.post("/login", async (req, res) => { try {
const { email, password } = req.body; const user = await User.findOne({ email });

if (!user || !(await bcrypt.compare(password, user.password))) { return res.status(401).json({
message: "Invalid email or password"
});
}
const token = jwt.sign(
{ id: user._id }, process.env.JWT_SECRET,
{ expiresIn: "1h" }
);
res.json({
message: "Login successful", token
});
} catch (error) {
 
console.error(error);
res.status(500).json({ message: "Login failed" });
}
});
// Test route
app.get("/", (req, res) => {
res.send("MERN Authentication API is running");
});
mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB connected");


app.listen(process.env.PORT, () => {
console.log("Server running on port " + process.env.PORT);
});
})
.catch((error) => {
console.error("MongoDB connection failed:", error.message);
});
