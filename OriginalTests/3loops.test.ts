// ========================
// 🔄  CONCEPT: Loops
// 🏷️  NAME: moveToFive
// ========================

// 📄 QUESTION:
// Develop a function named "moveToFive" that returns an array of numbers from 0 through 4.

// ========================================================================
// 📝 YOUR ANSWER:

function moveToFive(): number[] {
  let j = 0;
  const moveFive: number[] = [];

  while (j < 5) {
    moveFive.push(j);
    j++;
  }

  return moveFive;
}
// ========================================================================

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🔄 TEST: moveToFive

describe("moveToFive function", () => {
  test("returns an array of numbers from 0 to 4", () => {
    expect(moveToFive()).toEqual([0, 1, 2, 3, 4]);
  });

  test("returns exactly 5 elements", () => {
    expect(moveToFive().length).toBe(5);
  });

  test("first element is 0", () => {
    expect(moveToFive()[0]).toBe(0);
  });

  test("last element is 4", () => {
    expect(moveToFive()[4]).toBe(4);
  });
});
// ========================
// 🔄  CONCEPT: Loops
// 🏷️  NAME: moveToFive
// ========================

// 📄 QUESTION:
// Develop a function named "moveToFive" that returns an array of numbers from 0 through 4.

// ========================================================================
// 📝 YOUR ANSWER:

function moveToFive(): number[] {
  let j = 0;
  const moveFive: number[] = [];

  while (j < 5) {
    moveFive.push(j);
    j++;
  }

  return moveFive;
}
// ========================================================================

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🔄 TEST: moveToFive

describe("moveToFive function", () => {
  test("returns an array of numbers from 0 to 4", () => {
    expect(moveToFive()).toEqual([0, 1, 2, 3, 4]);
  });

  test("returns exactly 5 elements", () => {
    expect(moveToFive().length).toBe(5);
  });

  test("first element is 0", () => {
    expect(moveToFive()[0]).toBe(0);
  });

  test("last element is 4", () => {
    expect(moveToFive()[4]).toBe(4);
  });
});

// ========================================================================
// 🧠 ANSWER (Hidden Below)
// ========================================================================
/*
function moveToFive(): number[] {
  let j = 0;
  const moveFive: number[] = [];

  while (j < 5) {
    moveFive.push(j);
    j++;
  }

  return moveFive;
}
*/