// ========================
// 🔄  CONCEPT: Loops
// 🏷️  NAME: countToFive
// ========================

// 📄 QUESTION:
// Create a function named "countToFive" that returns an array of numbers from 0 to 4.

// 🧩  GENERIC LOOP:
// let count = 0;
// while (count < 5) { }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🔄 TEST: countToFive

describe("countToFive function", () => {
  test("returns an array of numbers from 0 to 4", () => {
    expect(countToFive()).toEqual([0, 1, 2, 3, 4]);
  });

  test("returns exactly 5 elements", () => {
    expect(countToFive().length).toBe(5);
  });

  test("first element is 0", () => {
    expect(countToFive()[0]).toBe(0);
  });

  test("last element is 4", () => {
    expect(countToFive()[4]).toBe(4);
  });
});
