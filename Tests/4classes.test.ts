// ========================
// 📦 CONCEPT: Classes
// 🏷️ NAME: Individual
`A template for constructing objects with specific properties and functionalities.`;
`It promotes code recycling, data hiding, and improved code structuring.`;
// ========================

// 📄 INSTRUCTION:
// Develop a class called "Individual" with properties "fullname" (public string) and "years" (private number).
// These properties should be initialized in the constructor. Include a method named "sayHi" that yields a greeting string.
// It should return "Hello, {fullname}"

// ========================================================================
// 📝 YOUR SOLUTION:

// ========================================================================

// 🏗️ TEST: Individual class

describe("Individual class", () => {
  test("constructs an individual with a fullname and private years", () => {
    const individual = new Individual("Mason", 28);
    expect(individual).toBeInstanceOf(Individual);
  });

  test("sayHi method yields the correct greeting", () => {
    const individual = new Individual("Mason", 28);
    expect(individual.sayHi()).toBe("Hello, Mason");
  });

  test("years property should not be publicly accessible", () => {
    const individual = new Individual("Mason", 28);
    expect((individual as any).years).toBeUndefined(); // Should not be directly accessible
  });
});

// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// 🧩 STANDARD FUNCTION:
// export class Automobile {
//   constructor(public type: string, private id: number) {
//     // Your code here
//   }

//   type(): string {
//     // Your code here
//     return "type";
//   }
// }
