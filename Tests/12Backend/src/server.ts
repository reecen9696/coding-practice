import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

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

// import express from "express";
// import axios from "axios";

// const app = express();
// const PORT = 3000;
// const API_URL = "https://jsonplaceholder.typicode.com/users";

// // In-memory cache
// let usersCache: any[] | null = null;
// let lastFetchTime = 0;
// const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// app.use(express.json());

// /**
//  * GET /users - Fetch all users, cache for 5 minutes
//  */
// app.get("/users", async (req, res) => {
//   try {
//     const now = Date.now();

//     // Serve from cache if valid
//     if (usersCache && now - lastFetchTime < CACHE_DURATION) {
//       console.log("🟢 Serving from cache");
//       return res.json(usersCache);
//     }

//     // Fetch fresh data
//     console.log("🔄 Fetching new data from API...");
//     const response = await axios.get(API_URL);
//     usersCache = response.data;
//     lastFetchTime = now;

//     res.json(usersCache);
//   } catch (error) {
//     console.error("❌ Error fetching users:", error);
//     res.status(500).json({ message: "Failed to fetch users. Try again later." });
//   }
// });

// /**
//  * GET /users/:id - Fetch a single user by ID (from cache or API)
//  */
// app.get("/users/:id", async (req, res) => {
//   try {
//     const userId = parseInt(req.params.id);

//     // Validate ID
//     if (isNaN(userId)) {
//       return res.status(400).json({ error: "Invalid user ID" });
//     }

//     // If users are cached, check for the user
//     if (usersCache) {
//       const cachedUser = usersCache.find(user => user.id === userId);
//       if (cachedUser) {
//         console.log("🟢 Serving user from cache");
//         return res.json(cachedUser);
//       }
//     }

//     // Fetch from API if not cached
//     console.log("🔄 Fetching user from API...");
//     const response = await axios.get(`${API_URL}/${userId}`);
//     res.json(response.data);
//   } catch (error: any) {
//     console.error("❌ Error fetching user:", error.message);

//     // Handle 404 from API
//     if (error.response && error.response.status === 404) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(500).json({ message: "Failed to fetch user. Try again later." });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
