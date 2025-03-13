// ========================
// 🔄  CONCEPT: Loops
// 🏷️  NAME: countToFive
// ========================

// 📄 QUESTION:
// Create a function named "countToFive" that returns an array of numbers from 0 to 4.

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// ========================
// 🔄  CONCEPT: Nested loop Loops
// 🏷️  NAME: generateMultiplicationTable
// ========================

// 📄 QUESTION:
// Create a function named "generateMultiplicationTable" that takes a number "n"
// and returns a 2D array representing the multiplication table up to "n".
// Each sub-array should contain the multiples of the current row number.
// For example, if n = 3, the output should be:
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]

// function generateMultiplicationTable(n: number): number[][] {
//   const table: number[][] = [];
//   let i = 1;

//   while (i <= n) {
//     const row: number[] = [];
//     let j = 1;

//     while (j <= n) {
//       row.push(i * j);
//       j++;
//     }

//     table.push(row);
//     i++;
//   }

//   return table;
// }

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
// ========================================================================
// ========================================================================

// 🔄 TEST: generateMultiplicationTable

describe("generateMultiplicationTable function", () => {
  test("generates a multiplication table for n = 3", () => {
    expect(generateMultiplicationTable(3)).toEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });

  test("generates a multiplication table for n = 1", () => {
    expect(generateMultiplicationTable(1)).toEqual([[1]]);
  });

  test("generates a multiplication table for n = 0 (empty table)", () => {
    expect(generateMultiplicationTable(0)).toEqual([]);
  });

  test("each row should contain exactly 'n' elements", () => {
    const result = generateMultiplicationTable(4);
    result.forEach((row) => {
      expect(row.length).toBe(4);
    });
  });

  test("checks if the first element in the first row is 1", () => {
    expect(generateMultiplicationTable(5)[0][0]).toBe(1);
  });

  test("checks if the last element in the last row is n * n", () => {
    const n = 5;
    expect(generateMultiplicationTable(n)[n - 1][n - 1]).toBe(n * n);
  });
});
