// ========================
// 🔄 CONCEPT: Function
// 🏷️ NAME: greet
// ========================

// 📄 QUESTION:
// Create a function named "greet" that takes a string parameter "name"
// and returns a greeting string (e.g., "Hello, Reece").

// ========================================================================
// 📝 YOUR ANSWER:
function greet(name: string): string {
  return `Hello, ${name}`;
}
// ========================================================================

// ========================
// 🔄 CONCEPT: Function
// 🏷️ NAME: greetWithTime
// ========================

// 📄 QUESTION:
// Create a function named "greetWithTime" that takes two parameters:
// a string "name" and a string "timeOfDay" (like "morning", "afternoon", "evening").
// It should return a personalized greeting (e.g., "Good morning, Reece").
// If no time is provided, default to "day".
/// nameOfProp: type = "default"

// ========================================================================
// 📝 YOUR ANSWER:

function greetWithTime(name: string, timeOfDay: string = "morning"): string {
  return `Good ${timeOfDay}, ${name}`;
}

// ========================================================================

// 🏗️ JEST TEST CASES 1

describe("greetWithTime function", () => {
  test("returns a personalized greeting with the given name and time", () => {
    expect(greetWithTime("Reece", "morning")).toBe("Good morning, Reece");
    expect(greetWithTime("John", "evening")).toBe("Good evening, John");
  });

  test("defaults to 'day' if no time is provided", () => {
    expect(greetWithTime("Alice")).toBe("Good day, Alice");
  });

  test("returns the correct format", () => {
    expect(greetWithTime("Emma", "afternoon")).toMatch(/^Good \w+, \w+$/); // Regex to check format
  });
});

// 🏗️ JEST TEST CASES 2

describe("greet function", () => {
  test("returns a greeting with the given name", () => {
    expect(greet("Reece")).toBe("Hello, Reece");
    expect(greet("John")).toBe("Hello, John");
  });

  test("returns the correct format", () => {
    expect(greet("Alice")).toMatch(/^Hello, \w+$/); // Regex to check format
  });
});
