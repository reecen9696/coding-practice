// ========================
// 📦 CONCEPT: API Calls
// 🏷️ NAME: getUser
`Newer library to make get more efficient. APIs allow real-time data retrieval from databases or third-party services.`;
// ========================

// 📄 QUESTION:
// Write a function named "getUser" that makes a GET request to "https://jsonplaceholder.typicode.com/users/1"
// using Axios. It should return a promise that resolves with the user's name. If an error occurs, return "Error fetching user".

// 🧩 GENERIC FUNCTION:
import axios from "axios";

async function sampleAPICall(): Promise<string> {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data.title;
  } catch (error) {
    console.error("API Error:", error);
    return "Error fetching data";
  }
}

// ========================================================================
// 📝 YOUR ANSWER:
async function getUser(): Promise<string> {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return response.data.name; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching user:", error);
    return "Error fetching user";
  }
}

// ========================================================================

// 🏗️ TEST: getUser function
getUser().then((name) => {
  console.log(
    "getUser():",
    typeof name === "string" && name.length > 0 ? "✅ Pass" : "❌ Fail"
  );
});
