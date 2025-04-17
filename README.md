
# 📘 TypeScript AI Daily Coding Practice

A lightweight TypeScript project for daily practice of core coding concepts. Includes structured challenges with tests covering topics like functions, arrays, loops, interfaces, and more.

---

## 🚀 Features

- 🧠 **Fresh daily questions** with real-world examples  
- ✅ **Built-in tests** for instant feedback  
- ♻️ **Reset system** to restore original exercises  
- 🛠️ **Topics include** functions, arrays, loops, objects, classes, and APIs  

---

## ⚙️ Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/reecen9696/coding-practice
   cd coding-practice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🏃‍♂️ Usage

### ✅ Run all tests
```bash
npm test
```

### ♻️ Reset challenges
Resets the `Tests/` folder to its original state:
```bash
npm run reset
```

### 🔄 Regenerate new questions (via OpenAI)
Overwrite files in `OriginalTests/` with fresh variations:
```bash
npm run generate
```

---

## 🧪 Scripts

| Command            | What it does                                      |
| ------------------ | ------------------------------------------------- |
| `npm test`         | Run all Jest tests                                |
| `npm run reset`    | Reset `Tests/` to match `OriginalTests/`          |
| `npm run generate` | Rewrite all original questions via OpenAI API     |

---

## 💡 Concepts Covered

- 🔁 **Loops**
- 🔣 **Conditionals (if/else, switch, ternary)**
- 🧮 **Functions**
- 📦 **Arrays**
- 🗂️ **Objects & Interfaces**
- 🧱 **Classes**
- 🌐 **Basic API calls**

Each challenge includes:
- Prompt  
- Starter function  
- Editable solution space  
- Unit tests

---

## ✨ Sample Challenge

```ts
// 📄 QUESTION:
// Create a function "greet" that takes a string name
// and returns a greeting like "Hello, Reece".

export function greet(name: string): string {
  return `Hello, ${name}`;
}
```

Run `npm test` to verify.
