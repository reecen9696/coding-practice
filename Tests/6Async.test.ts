// ========================
// 📦 CONCEPT: Async Functions
// 🏷️ NAME: fetchData
` A function that executes asynchronously, allowing the program to continue running while waiting for the function to complete.`;
// ========================

// 📄 QUESTION:
// Write an asynchronous function named "fetchData" that simulates fetching data from an API.
// It should return a promise that resolves with the string "Data received" after 2 seconds.

// 🧩 GENERIC FUNCTION:
async function sampleAsyncFunction(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Sample data"), 1000);
  });
}

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏷️ TEST: fetchData
fetchData().then((data) => {
  console.log("fetchData():", data === "Data received" ? "✅ Pass" : "❌ Fail");
});
