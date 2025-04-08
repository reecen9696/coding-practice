// ========================
// 📦 CONCEPT: Mapping Arrays
// 🏷️ NAME: doubleNumbers
// ========================

// 📄 QUESTION:
// Create a function named "doubleNumbers" that takes an array of numbers
// and returns a new array with all elements doubled.

// ========================================================================
// 📝 YOUR ANSWER:

function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((num) => num ** 2);
}
// ========================
// 📦 CONCEPT: Mapping from JSON
// 🏷️ NAME: extractNames
// ========================

// 📄 QUESTION:
// Given the following JSON array of users, create a function named "extractNames"
// that returns an array of user names.
// hint - you need an interface & a map  object.map(item => item.value)

// Example JSON:
// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 }
// ];

// Expected Output: ["Alice", "Bob", "Charlie"]

// ========================================================================
// 📝 YOUR ANSWER:

interface users {
  id: number;
  name: string;
  age: number;
}

function extractNames(user: users[]): string[] {
  return user.map((name) => name.name);
}

// ========================================================================

// 📦 TEST: extractNames
describe("extractNames function", () => {
  const sampleUsers = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  test("extracts names from a list of user objects", () => {
    expect(extractNames(sampleUsers)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  test("returns an empty array if no users are provided", () => {
    expect(extractNames([])).toEqual([]);
  });

  test("handles users with empty name fields", () => {
    const usersWithEmptyName = [
      { id: 1, name: "", age: 25 },
      { id: 2, name: "Eve", age: 30 },
    ];
    expect(extractNames(usersWithEmptyName)).toEqual(["", "Eve"]);
  });
});

// 📦 TEST: doubleNumbers
describe("doubleNumbers function", () => {
  test("doubles each number in an array", () => {
    expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubleNumbers([5, 10, 15])).toEqual([10, 20, 30]);
  });

  test("returns an empty array if input is empty", () => {
    expect(doubleNumbers([])).toEqual([]);
  });

  test("handles negative numbers correctly", () => {
    expect(doubleNumbers([-1, -2, -3])).toEqual([-2, -4, -6]);
  });
});
