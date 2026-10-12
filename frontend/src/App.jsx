import { useState } from "react";
function App() {
const [name, setName] = useState(""); const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); const [message, setMessage] = useState(""); const API = "http://localhost:5000";
async function register(e) { e.preventDefault();
try {
const response = await fetch(`${API}/register`, { method: "POST",
headers: {
"Content-Type": "application/json"
 
},
body: JSON.stringify({ name, email, password })
});
const data = await response.json(); setMessage(data.message);
} catch {
setMessage("Cannot connect to backend");
}
}
async function login() { try {
const response = await fetch(`${API}/login`, { method: "POST",
headers: {
"Content-Type": "application/json"
},	body: JSON.stringify({ email, password })
});
const data = await response.json(); setMessage(data.message);
if (data.token) {
console.log("Login successful. JWT received.");
}
} catch {
setMessage("Cannot connect to backend");
}
}
return (
<div style={{ maxWidth: "350px", margin: "50px auto" }}>
<h2>MERN Authentication</h2>
<form onSubmit={register}>
<input placeholder="Name"
 
value={name}
onChange={(e) => setName(e.target.value)} required
/>
<br /><br />
<input type="email"
placeholder="Email" value={email}
onChange={(e) => setEmail(e.target.value)} required
/>
<br /><br />	<input type="password" placeholder="Password (8+ characters)" value={password}
onChange={(e) => setPassword(e.target.value)} minLength={8}
required
/>
<br /><br />
<button type="submit">Register</button>
</form>
<br />
<button onClick={login}>Login</button>
<p>{message}</p>
</div>
);
}
export default App;
