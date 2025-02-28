// ========================
// 🔄 CONCEPT: Function
// 🏷️ NAME: greet
// ========================

// 📄 QUESTION:
// Create a function named "greet" that takes a string parameter "name"
// and returns a greeting string (e.g., "Hello, Reece").

// 🧩 GENERIC FUNCTION:
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }

// ========================================================================

// 📝 YOUR ANSWER:
function greet(name: string): string {
  return `Hello, ${name}`;
}
// ========================================================================

console.log("✅ TEST RESULTS ✅");

// 🔄 TEST: greet
console.log(
  "greet('Reece'):",
  greet("Reece") === "Hello, Reece" ? "✅ Pass" : "❌ Fail"
);
console.log(
  "greet('John'):",
  greet("John") === "Hello, John" ? "✅ Pass" : "❌ Fail"
);
