import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_URL = "https://jsonplaceholder.typicode.com/users";

// in-memory cache
let userCache: any[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; //5 minutes

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// GET /users - fetch all users, cache for 5 minutes

// 📝 Requirements
// 1️⃣ Create an API endpoint GET /users that fetches a list of users from https://jsonplaceholder.typicode.com/users.
// 2️⃣ Cache the response in memory for 5 minutes to reduce external API calls.
// 3️⃣ Create a second API endpoint GET /users/:id that fetches a single user from the cache or the external API.
// 4️⃣ If the user is not found, return a 404 Not Found error.
// 5️⃣ Handle errors properly (log and return a 500 Internal Server Error if the API call fails).

// GET http://localhost:3000/users
// [
//   { "id": 1, "name": "Leanne Graham", "email": "leanne@example.com" },
//   { "id": 2, "name": "Ervin Howell", "email": "ervin@example.com" }
// ]
