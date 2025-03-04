// ========================
// 📦 CONCEPT: Mapping Arrays
// 🏷️ NAME: doubleNumbers
// ========================

// 📄 QUESTION:
// Create a function named "doubleNumbers" that takes an array of numbers
// and returns a new array with all elements doubled.

// 🧩 GENERIC ARRAY:
// Divide
// const divide = numbers.map(num => num / 9);

// Square
// const square = numbers.map(num => num ** 2);

// Extract values
// const values = users.map(user => user.name);

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

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
