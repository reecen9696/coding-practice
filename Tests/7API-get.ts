// ========================
// 📦 CONCEPT: API Calls
// 🏷️ NAME: getUser
`The default old school API function. APIs allow real-time data retrieval from databases or third-party services.`;

// ========================

// 📄 QUESTION:
// Write a function named "getUser" that makes a GET request to "https://jsonplaceholder.typicode.com/users/1".
// It should return a promise that resolves with the user's name. If an error occurs, return "Error fetching user".

// 🧩 GENERIC FUNCTION:
async function sampleAPICall(): Promise<string> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data.title;
  } catch (error) {
    console.error("API Error:", error);
    return "Error fetching data";
  }
}

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: getUser function
getUser().then((name) => {
  console.log(
    "getUser():",
    typeof name === "string" && name.length > 0 ? "✅ Pass" : "❌ Fail"
  );
});
