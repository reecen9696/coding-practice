# 📘 coding-practice

A TypeScript-based project designed to help you practice core coding concepts through daily exercises. This project includes a set of coding challenges and their corresponding tests, covering topics such as functions, loops, arrays, interfaces, and classes.

---

## 🚀 Features

- 📝 **Practice files**: Write solutions to programming questions.
- ✅ **Automated tests**: Run tests to check the correctness of your solutions.
- 🔄 **Reset functionality**: Restore practice files to their original state for fresh attempts.
- 🧩 **Covers core concepts**: Functions, Loops, Arrays, Interfaces, and Classes.

---

## 📂 Project Structure

```plaintext
functions/
├─ OriginalTests/   # Original challenge files
│  ├─ 0function.ts
│  ├─ 1loops.ts
│  ├─ 2mapping.ts
│  ├─ 3interfaces.ts
│  └─ 4classes.ts
├─ Tests/           # Your practice files and solutions
│  ├─ 0function.ts
│  ├─ 1loops.ts
│  ├─ 2mapping.ts
│  ├─ 3interfaces.ts
│  └─ 4classes.ts
├─ tests.ts         # Main test runner
package.json        # Project scripts and dependencies
tsconfig.json       # TypeScript configuration
```

---

## 🛠️ Getting Started

### 📥 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd coding-practice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🏃‍♂️ Usage

### ✅ Run Tests

Run all tests in the `/Tests` folder:

```bash
npm test
```

This will execute all solution files and display pass/fail results.

### 🔄 Reset Practice Files

Restore the `/Tests` folder to its original state from `/OriginalTests`:

```bash
npm run reset
```

This is helpful when you want to retry the exercises from scratch.

---

## 🧪 Available Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm test`      | Runs all test files in `/functions/Tests/`       |
| `npm run reset` | Resets `/functions/Tests/` to original exercises |

---

## 🧩 Concepts Covered

✅ Functions  
🔄 Loops  
📦 Arrays  
🏷️ Interfaces  
🏗️ Classes

Each concept includes:

- A clear **question** prompt
- A **generic function** template
- Space to write **your answer**
- Automated tests to verify solutions

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

---

## 🧑‍💻 Contributing

Feel free to fork this repo, add new challenges, or improve existing ones. Pull requests are welcome!

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Acknowledgments

Thanks to resources like [TypeScript Docs](https://www.typescriptlang.org/docs/) for reference materials.
