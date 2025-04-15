// ========================
// 🔄  CONCEPT: Array.map()
// 🏷️  NAME: doubleNumbers
// ========================

// 📄 QUESTION:
// Create a function called "doubleNumbers" that takes an array of numbers
// and returns a new array with each number doubled.

// ========================================================================
// 📝 YOUR ANSWER:

function doubleNumbers(numbers: number[]): number[] {
    // ✍️ Write your answer here
    return [];
  }
  // ========================================================================
  
  
  // ========================
  // 🔍  CONCEPT: Array.find()
  // 🏷️  NAME: findUserByName
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "findUserByName" that takes an array of user objects
  // and a name, and returns the user object with that name.
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function findUserByName(users: { name: string, age: number }[], targetName: string) {
    // ✍️ Write your answer here
    return null;
  }
  // ========================================================================
  
  
  // ========================
  // ✂️  CONCEPT: Array.filter()
  // 🏷️  NAME: filterAdults
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "filterAdults" that takes an array of user objects
  // and returns only those who are 18 or older.
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function filterAdults(users: { name: string, age: number }[]): { name: string, age: number }[] {
    // ✍️ Write your answer here
    return [];
  }
  // ========================================================================
  
  
  // ========================
  // 🔧  CONCEPT: Object manipulation
  // 🏷️  NAME: updateUserAge
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "updateUserAge" that takes a user object and a new age,
  // and returns a copy of the user object with the updated age.
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function updateUserAge(user: { name: string, age: number }, newAge: number) {
    // ✍️ Write your answer here
    return {};
  }
  // ========================================================================
  
  
  // ========================================================================
  // 🔄 TESTS
  // ========================================================================
  
  describe("doubleNumbers function", () => {
    test("doubles all numbers in array", () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    });
  
    test("returns an empty array if input is empty", () => {
      expect(doubleNumbers([])).toEqual([]);
    });
  });
  
  describe("findUserByName function", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 }
    ];
  
    test("finds the correct user by name", () => {
      expect(findUserByName(users, "Bob")).toEqual({ name: "Bob", age: 30 });
    });
  
    test("returns null if no match is found", () => {
      expect(findUserByName(users, "Charlie")).toBe(null);
    });
  });
  
  describe("filterAdults function", () => {
    const users = [
      { name: "Tom", age: 17 },
      { name: "Jane", age: 22 }
    ];
  
    test("returns only users 18 or older", () => {
      expect(filterAdults(users)).toEqual([{ name: "Jane", age: 22 }]);
    });
  });
  
  describe("updateUserAge function", () => {
    const user = { name: "Sam", age: 20 };
  
    test("returns a new object with updated age", () => {
      expect(updateUserAge(user, 25)).toEqual({ name: "Sam", age: 25 });
    });
  
    test("does not mutate original object", () => {
      const copy = { ...user };
      updateUserAge(user, 99);
      expect(user).toEqual(copy);
    });
  });
  
  
  // ========================================================================
  // 🧠 ANSWERS (Hidden Below)
  // ========================================================================
  
  /*
  function doubleNumbers(numbers: number[]): number[] {
    return numbers.map(n => n * 2);
  }
  
  function findUserByName(users: { name: string, age: number }[], targetName: string) {
    return users.find(u => u.name === targetName) || null;
  }
  
  function filterAdults(users: { name: string, age: number }[]): { name: string, age: number }[] {
    return users.filter(u => u.age >= 18);
  }
  
  function updateUserAge(user: { name: string, age: number }, newAge: number) {
    return { ...user, age: newAge };
  }
  */