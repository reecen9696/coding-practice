// ========================
// 🔁  CONCEPT: If/Else
// 🏷️  NAME: isPositive
// ========================

// 📄 QUESTION:
// Create a function called "isPositive" that takes a number and returns:
// - "positive" if the number is greater than 0
// - "zero" if the number is exactly 0
// - "negative" if the number is less than 0

// ========================================================================
// 📝 YOUR ANSWER:

function isPositive(n: number): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // ❓  CONCEPT: Ternary
  // 🏷️  NAME: isEven
  // ========================
  
  // 📄 QUESTION:
  // Create a function named "isEven" that returns "even" if the number is divisible by 2,
  // otherwise return "odd".
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function isEven(n: number): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // 🔀  CONCEPT: Switch
  // 🏷️  NAME: getDayName
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "getDayName" that takes a number (0–6)
  // and returns the name of the day (e.g. 0 = Sunday, 1 = Monday, etc).
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function getDayName(day: number): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================================================================
  // 🔄 TESTS
  // ========================================================================
  
  describe("isPositive function", () => {
    test("returns 'positive' if number is greater than 0", () => {
      expect(isPositive(5)).toBe("positive");
    });
  
    test("returns 'negative' if number is less than 0", () => {
      expect(isPositive(-1)).toBe("negative");
    });
  
    test("returns 'zero' if number is 0", () => {
      expect(isPositive(0)).toBe("zero");
    });
  });
  
  describe("isEven function", () => {
    test("returns 'even' when number is divisible by 2", () => {
      expect(isEven(4)).toBe("even");
    });
  
    test("returns 'odd' when number is not divisible by 2", () => {
      expect(isEven(7)).toBe("odd");
    });
  });
  
  describe("getDayName function", () => {
    test("returns 'Sunday' for 0", () => {
      expect(getDayName(0)).toBe("Sunday");
    });
  
    test("returns 'Wednesday' for 3", () => {
      expect(getDayName(3)).toBe("Wednesday");
    });
  
    test("returns 'Invalid' for values outside 0–6", () => {
      expect(getDayName(7)).toBe("Invalid");
      expect(getDayName(-1)).toBe("Invalid");
    });
  });
  
  
  // ========================================================================
  // 🧠 ANSWERS (Hidden Below)
  // ========================================================================
  
  /*
  function isPositive(n: number): string {
    if (n > 0) return "positive";
    else if (n === 0) return "zero";
    else return "negative";
  }
  
  function isEven(n: number): string {
    return n % 2 === 0 ? "even" : "odd";
  }
  
  function getDayName(day: number): string {
    switch (day) {
      case 0: return "Sunday";
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      default: return "Invalid";
    }
  }
  */