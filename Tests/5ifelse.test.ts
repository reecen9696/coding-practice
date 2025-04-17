// ========================
// 🔁  CONCEPT: If/Else
// 🏷️  NAME: checkSign
// ========================

// 📄 QUESTION:
// Define a function named "checkSign" that accepts a number and returns:
// - "positive" if the number is greater than 0
// - "zero" if the number is exactly 0
// - "negative" if the number is less than 0

// ========================================================================
// 📝 YOUR ANSWER:

function checkSign(value: number): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // ❓  CONCEPT: Ternary
  // 🏷️  NAME: isMultipleOfTwo
  // ========================
  
  // 📄 QUESTION:
  // Craft a function named "isMultipleOfTwo" that returns "even" if the number is divisible by 2,
  // otherwise return "odd".
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function isMultipleOfTwo(value: number): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // 🔀  CONCEPT: Switch
  // 🏷️  NAME: returnDayName
  // ========================
  
  // 📄 QUESTION:
  // Construct a function named "returnDayName" that accepts a number (0–6)
  // and returns the corresponding day of the week (e.g. 0 = Sunday, 1 = Monday, etc).
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function returnDayName(dayIndex: number): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================================================================
  // 🔄 TESTS
  // ========================================================================
  
  describe("checkSign function", () => {
    test("returns 'positive' if number is greater than 0", () => {
      expect(checkSign(5)).toBe("positive");
    });
  
    test("returns 'negative' if number is less than 0", () => {
      expect(checkSign(-1)).toBe("negative");
    });
  
    test("returns 'zero' if number is 0", () => {
      expect(checkSign(0)).toBe("zero");
    });
  });
  
  describe("isMultipleOfTwo function", () => {
    test("returns 'even' when number is divisible by 2", () => {
      expect(isMultipleOfTwo(4)).toBe("even");
    });
  
    test("returns 'odd' when number is not divisible by 2", () => {
      expect(isMultipleOfTwo(7)).toBe("odd");
    });
  });
  
  describe("returnDayName function", () => {
    test("returns 'Sunday' for 0", () => {
      expect(returnDayName(0)).toBe("Sunday");
    });
  
    test("returns 'Wednesday' for 3", () => {
      expect(returnDayName(3)).toBe("Wednesday");
    });
  
    test("returns 'Invalid' for values outside 0–6", () => {
      expect(returnDayName(7)).toBe("Invalid");
      expect(returnDayName(-1)).toBe("Invalid");
    });
  });
  
  
  // ========================================================================
  // 🧠 ANSWERS (Hidden Below)
  // ========================================================================
  
  /*
  function checkSign(value: number): string {
    if (value > 0) return "positive";
    else if (value === 0) return "zero";
    else return "negative";
  }
  
  function isMultipleOfTwo(value: number): string {
    return value % 2 === 0 ? "even" : "odd";
  }
  
  function returnDayName(dayIndex: number): string {
    switch (dayIndex) {
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
