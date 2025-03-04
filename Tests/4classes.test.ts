// ========================
// 📦 CONCEPT: Classes
// 🏷️ NAME: Person
`A blueprint for creating objects with properties and methods. It enables code reuse, encapsulation, and better organization.`;
// ========================

// 📄 QUESTION:
// Create a class named "Person" with properties "name" (public string) and "age" (private number).
// The constructor should initialize these properties. Add a method named "greet" that returns a greeting string.
// Make it return "Hello, {name}"

// 🧩 GENERIC FUNCTION:
// export class Car {
//   constructor(public model: string, private vin: number) {
//     // Your code here
//   }

//   model(): string {
//     // Your code here
//     return "model";
//   }
// }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: Person class

describe("Person class", () => {
  test("creates a person with a name and private age", () => {
    const person = new Person("Reece", 28);
    expect(person).toBeInstanceOf(Person);
  });

  test("greet method returns correct greeting", () => {
    const person = new Person("Reece", 28);
    expect(person.greet()).toBe("Hello, Reece");
  });

  test("age property should not be publicly accessible", () => {
    const person = new Person("Reece", 28);
    expect((person as any).age).toBeUndefined(); // Should not be directly accessible
  });
});
