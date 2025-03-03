// ========================
// 📦 CONCEPT: Classes
// 🏷️ NAME: Person
`A blueprint for creating objects with properties and methods.  It enables code reuse, encapsulation, and better organization.`;
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

// ========================================================================

// 🏗️ TEST: Person class
const person = new Person("Reece", 28);
console.log(
  "person.greet():",
  person.greet() === "Hello, Reece" ? "✅ Pass" : "❌ Fail"
);

console.log("\n✅ Testing complete!");
