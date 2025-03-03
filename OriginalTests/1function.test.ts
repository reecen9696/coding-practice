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

// ========================================================================

// 🏗️ JEST TEST CASES

describe("greet function", () => {
  test("returns a greeting with the given name", () => {
    expect(greet("Reece")).toBe("Hello, Reece");
    expect(greet("John")).toBe("Hello, John");
  });

  test("returns the correct format", () => {
    expect(greet("Alice")).toMatch(/^Hello, \w+$/); // Regex to check format
  });
});
