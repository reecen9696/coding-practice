# 📘 Coding Practice

A TypeScript-based project designed to help you practice core coding concepts through daily exercises. This project includes coding challenges with corresponding tests, covering topics like functions, loops, arrays, interfaces, and classes.

---

## 🚀 Features

- 📝 **Practice coding concepts** with structured challenges.
- ✅ **Automated tests** to verify your solutions.
- 🔄 **Reset functionality** to restore exercises for fresh attempts.
- 🧩 **Covers key programming concepts**: Functions, Loops, Arrays, Interfaces, Classes, and State Management.

---

## 🛠️ Installation & Setup

### 📥 Install Dependencies

1. Clone the repository:
   ```bash
   git clone https://github.com/reecen9696/coding-practice
   cd coding-practice
   ```
2. Install required packages:
   ```bash
   npm install
   ```

---

## 🏃‍♂️ Usage

### ✅ Run Tests

To execute all tests and check your solutions:
```bash
npm test
```

### 🔄 Reset Practice Files

Restore exercises to their original state:
```bash
npm run reset
```

---

## 🧪 Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm test`      | Runs all test files to check solutions     |
| `npm run reset` | Resets exercises to their original state  |

---

## 🧩 Concepts Covered

✅ **Functions**  
🔄 **Loops**  
📦 **Arrays**  
🏷️ **Interfaces**  
🏗️ **Classes**  
⚡ **State Management (`useState`)**  
🌐 **API Calls (`fetch` & Axios)**  

Each challenge includes:
- A **question prompt**  
- A **starter function/class**  
- Space to **write your answer**  
- **Automated tests** to verify correctness  

---

## ✨ Example Challenge

```typescript
// 📄 QUESTION:
// Create a function named "greet" that takes a string parameter "name"
// and returns a greeting string (e.g., "Hello, Reece").

// 🧩 GENERIC FUNCTION:
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }

// 📝 YOUR ANSWER:
export function greet(name: string): string {
  return `Hello, ${name}`;
}
```

✅ Run `npm test` to check if your solution passes.
