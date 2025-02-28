// ========================
// 📦 CONCEPT: Classes
// 🏷️ NAME: Person
// ========================

// 📄  QUESTION:
// Create a class named "Person" with properties "name" (public string) and "age" (private number).
// The constructor should initialize these properties. Add a method named "greet" that returns a greeting string.
// Make it return Hello, {name}

// 🧩  GENERIC FUNCTION:
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
export class Person {
  constructor(public name: string, private age: number) {}

  greet(): string {
    return `Hello, ${this.name}`;
  }
}
// ========================================================================

// 🏗️ TEST: Person class
const person = new Person("Reece", 28);
console.log(
  "person.greet():",
  person.greet() === "Hello, Reece" ? "✅ Pass" : "❌ Fail"
);

console.log("\n✅ Testing complete!");
