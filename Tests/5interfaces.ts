// ========================
// 📦 CONCEPT: Interfaces
// 🏷️ NAME: userSummary
`A way to define the structure of an object in TypeScript. It prevents errors by enforcing consistent object structures.`;
// ========================

// 📄 QUESTION:
// Create an interface named "User" with properties "name" (string) and "age" (number).
// Then write a function named "userSummary" that takes a User object and returns a summary string.

// 🧩 GENERIC FUNCTION:
// interface EmailAddress {
//   email: string;
//   index: number;
// }
//
// function userSummary(user: User): string {
//   return `${EmailAddress.email} has index ${EmailAddress.index} years old.`;
// }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏷️ TEST: userSummary
const testUser: User = { name: "Reece", age: 28 };
console.log(
  "userSummary(testUser):",
  userSummary(testUser) === "Reece is 28 years old." ? "✅ Pass" : "❌ Fail"
);
