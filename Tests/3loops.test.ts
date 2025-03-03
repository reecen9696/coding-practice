// ========================
// 🔄  CONCEPT: Loops
// 🏷️  NAME: countToFive
// ========================

// 📄 QUESTION:
// Create a function named "countToFive" that returns an array of numbers from 0 to 4.

// 🧩  GENERIC LOOP:
// let count = 0;
//while (count < 5){ }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🔄 TEST: countToFive
console.log(
  "countToFive():",
  JSON.stringify(countToFive()) === JSON.stringify([0, 1, 2, 3, 4])
    ? "✅ Pass"
    : "❌ Fail"
);
