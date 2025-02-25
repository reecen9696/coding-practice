// ========================
// 📦 CONCEPT: Mapping Arrays
// 🏷️ NAME: doubleNumbers
// ========================

// 📄 QUESTION:
// Create a function named "doubleNumbers" that takes an array of numbers
// and returns a new array with all elements doubled.

// 🧩 GENERIC ARRAY:
// Divide
// numbers.map(num => num / 9);

// Square
// numbers.map(num => num ** 2)

// Extract values
// users.map(user => user.name)

// ========================================================================
// 📝 YOUR ANSWER:
export function doubleNumbers(numbers: number[]): number[] {
  // Your code here
  return [1];
}
// ========================================================================

// 📦 TEST: doubleNumbers
console.log(
  "doubleNumbers([1, 2, 3]):",
  JSON.stringify(doubleNumbers([1, 2, 3])) === JSON.stringify([2, 4, 6])
    ? "✅ Pass"
    : "❌ Fail"
);
