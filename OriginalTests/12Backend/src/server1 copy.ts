import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// 1️⃣ Create a GET endpoint at /hello
// 2️⃣ When accessed, it should return: { "message": "Hello, World!" }
// 3️⃣ Run the server on port 3000
