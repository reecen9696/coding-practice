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

describe("userSummary function", () => {
  test("returns correct user summary", () => {
    const testUser: User = { name: "Reece", age: 28 };
    expect(userSummary(testUser)).toBe("Reece is 28 years old.");
  });

  test("works with different names and ages", () => {
    const testUser: User = { name: "Alice", age: 35 };
    expect(userSummary(testUser)).toBe("Alice is 35 years old.");
  });

  test("handles edge cases like age 0", () => {
    const testUser: User = { name: "Baby", age: 0 };
    expect(userSummary(testUser)).toBe("Baby is 0 years old.");
  });
});
