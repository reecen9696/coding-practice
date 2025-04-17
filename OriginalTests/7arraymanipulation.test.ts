// ========================
// 🔄  CONCEPT: Array.map()
// 🏷️  NAME: doubleAllElements
// ========================

// 📄 INQUIRY:
// Create a function known as "doubleAllElements" that accepts an array of numbers
// and yields a new array with every number multiplied by two.

// ========================================================================
// 📝 YOUR SOLUTION:

function doubleAllElements(numerals: number[]): number[] {
    // ✍️ Write your answer here
    return [];
}
// ========================================================================
  
  
// ========================
// 🔍  CONCEPT: Array.find()
// 🏷️  NAME: locateUserViaName
// ========================

// 📄 INQUIRY:
// Design a function named "locateUserViaName" that accepts an array of user objects
// and a name, then returns the user object that matches the given name.

// ========================================================================
// 📝 YOUR SOLUTION:

function locateUserViaName(users: { name: string, age: number }[], targetName: string) {
    // ✍️ Write your answer here
    return null;
}
// ========================================================================
  
  
// ========================
// ✂️  CONCEPT: Array.filter()
// 🏷️  NAME: filterMatureUsers
// ========================

// 📄 INQUIRY:
// Design a function named "filterMatureUsers" that takes an array of user objects
// and returns those who are 18 years old or above.

// ========================================================================
// 📝 YOUR SOLUTION:

function filterMatureUsers(users: { name: string, age: number }[]): { name: string, age: number }[] {
    // ✍️ Write your answer here
    return [];
}
// ========================================================================
  
  
// ========================
// 🔧  CONCEPT: Object manipulation
// 🏷️  NAME: modifyUserAge
// ========================

// 📄 INQUIRY:
// Design a function known as "modifyUserAge" that takes a user object and a new age,
// then returns a duplicate of the user object with the changed age.

// ========================================================================
// 📝 YOUR SOLUTION:

function modifyUserAge(user: { name: string, age: number }, updatedAge: number) {
    // ✍️ Write your answer here
    return {};
}
// ========================================================================
  
  
// ========================================================================
// 🔄 TESTS
// ========================================================================

describe("doubleAllElements function", () => {
    test("doubles all numbers in the array", () => {
        expect(doubleAllElements([1, 2, 3])).toEqual([2, 4, 6]);
    });

    test("returns an empty array if input is empty", () => {
        expect(doubleAllElements([])).toEqual([]);
    });
});

describe("locateUserViaName function", () => {
    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 }
    ];

    test("finds and returns the correct user by name", () => {
        expect(locateUserViaName(users, "Bob")).toEqual({ name: "Bob", age: 30 });
    });

    test("returns null if no match is found", () => {
        expect(locateUserViaName(users, "Charlie")).toBe(null);
    });
});

describe("filterMatureUsers function", () => {
    const users = [
        { name: "Harry", age: 17 },
        { name: "Maggie", age: 22 }
    ];

    test("returns only users 18 or older", () => {
        expect(filterMatureUsers(users)).toEqual([{ name: "Maggie", age: 22 }]);
    });
});

describe("modifyUserAge function", () => {
    const user = { name: "Sam", age: 20 };

    test("returns a new object with updated age", () => {
        expect(modifyUserAge(user, 25)).toEqual({ name: "Sam", age: 25 });
    });

    test("does not mutate the original object", () => {
        const clone = { ...user };
        modifyUserAge(user, 99);
        expect(user).toEqual(clone);
    });
});
  
// ========================================================================
// 🧠 ANSWERS (Hidden Below)
// ========================================================================
  
/*
function doubleAllElements(numerals: number[]): number[] {
    return numerals.map(n => n * 2);
}
  
function locateUserViaName(users: { name: string, age: number }[], targetName: string) {
    return users.find(u => u.name === targetName) || null;
}
  
function filterMatureUsers(users: { name: string, age: number }[]): { name: string, age: number }[] {
    return users.filter(u => u.age >= 18);
}
  
function modifyUserAge(user: { name: string, age: number }, updatedAge: number) {
    return { ...user, age: updatedAge };
}
*/

