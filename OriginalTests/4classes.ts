// ========================
// 📦 CONCEPT: Classes
// 🏷️ NAME: Person
// ========================

// 📄  QUESTION:
// Create a class named "Person" with properties "name" (public string) and "age" (private number).
// The constructor should initialize these properties. Add a method named "greet" that returns a greeting string.
// Make it return Hello, {name}

// 🧩  GENERIC FUNCTION:
// export class Person {
//   constructor(public name: string, private age: number) {
//     // Your code here
//   }

//   greet(): string {
//     // Your code here
//     return "answer";
//   }
// }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: Person class
const person = new Person("Reece", 28);
console.log(
  "person.greet():",
  person.greet() === "Hello, Reece" ? "✅ Pass" : "❌ Fail"
);

console.log("\n✅ Testing complete!");
