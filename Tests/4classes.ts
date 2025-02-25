// ========================
// 📦 CONCEPT: Classes
// 🏷️ NAME: Person
// ========================

// 📄  QUESTION:
// Create a class named "Person" with properties "name" (public string) and "age" (private number).
// The constructor should initialize these properties. Add a method named "greet" that returns a greeting string.

// 🧩  GENERIC FUNCTION:
// class Person {
//   constructor(public name: string, private age: number) {}
//   greet() {
//     return `Hi, I'm ${this.name}`;
//   }
// }

// ========================================================================
// 📝 YOUR ANSWER:
export class Person {
  constructor(public name: string, private age: number) {
    // Your code here
  }

  greet(): string {
    // Your code here
    return "answer";
  }
}
// ========================================================================

// 🏗️ TEST: Person class
const person = new Person("Reece", 28);
console.log(
  "person.greet():",
  person.greet() === "Hi, I'm Reece" ? "✅ Pass" : "❌ Fail"
);

console.log("\n✅ Testing complete!");
