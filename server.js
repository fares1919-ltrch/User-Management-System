const express = require("express");
const cors = require("cors"); // Added CORS support
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Allow requests from other origins
app.use(express.json());

// In-memory storage
let users = [];

// Register a new user
app.post("/api/register", (req, res) => {
  console.log("Incoming registration:", req.body);
  const { name, prename, age, cin } = req.body;

  if (!name || !prename || !age || !cin) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const existingUser = users.find((u) => u.cin === cin);
  if (existingUser) {
    return res.status(409).json({ message: "CIN already exists." });
  }

  const user = { name, prename, age, cin };
  users.push(user);
  res.status(200).json({ message: "User registered successfully", user });
});

// Get a user by CIN
app.get("/api/get/:cin", (req, res) => {
  const { cin } = req.params;
  const user = users.find((u) => u.cin === cin);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: `User with CIN ${cin} not found.` });
  }
});

// Modify a user by CIN
app.put("/api/modify/:cin", (req, res) => {
  const { cin } = req.params;
  const { name, prename, age } = req.body;
  const userIndex = users.findIndex((u) => u.cin === cin);

  if (userIndex === -1) {
    return res.status(404).json({ message: `User with CIN ${cin} not found.` });
  }

  users[userIndex] = { ...users[userIndex], name, prename, age };
  res.status(200).json(users[userIndex]);
});

// Delete a user by CIN
app.delete("/api/delete/:cin", (req, res) => {
  const { cin } = req.params;
  const userIndex = users.findIndex((u) => u.cin === cin);

  if (userIndex === -1) {
    return res.status(404).json({ message: `User with CIN ${cin} not found.` });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted successfully." });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
