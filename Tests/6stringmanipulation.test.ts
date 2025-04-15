// ========================
// 🔤  CONCEPT: toLowerCase
// 🏷️  NAME: makeLowercase
// ========================

// 📄 QUESTION:
// Create a function called "makeLowercase" that takes a string and returns it all in lowercase.

// ========================================================================
// 📝 YOUR ANSWER:

function makeLowercase(str: string): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // 🔠  CONCEPT: split
  // 🏷️  NAME: splitByDash
  // ========================
  
  // 📄 QUESTION:
  // Create a function named "splitByDash" that takes a string like "a-b-c"
  // and returns an array: ["a", "b", "c"]
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function splitByDash(str: string): string[] {
    // ✍️ Write your answer here
    return [];
  }
  // ========================================================================
  
  
  // ========================
  // 🔁  CONCEPT: replace (spaces)
  // 🏷️  NAME: removeSpaces
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "removeSpaces" that removes all spaces from a string.
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function removeSpaces(str: string): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // ✂️  CONCEPT: trim
  // 🏷️  NAME: trimEdges
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "trimEdges" that removes leading and trailing whitespace from a string.
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function trimEdges(str: string): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // 🧼  CONCEPT: replace (unwanted chars)
  // 🏷️  NAME: cleanSymbols
  // ========================
  
  // 📄 QUESTION:
  // Create a function called "cleanSymbols" that removes all slashes (/), quotes (" or '), and semicolons (;)
  
  // ========================================================================
  // 📝 YOUR ANSWER:
  
  function cleanSymbols(str: string): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================================================================
  // 🔄 TESTS
  // ========================================================================
  
  describe("makeLowercase function", () => {
    test("converts uppercase to lowercase", () => {
      expect(makeLowercase("HELLO")).toBe("hello");
    });
  
    test("handles mixed case strings", () => {
      expect(makeLowercase("HeLLo WoRLD")).toBe("hello world");
    });
  });
  
  describe("splitByDash function", () => {
    test("splits a string by dash", () => {
      expect(splitByDash("a-b-c")).toEqual(["a", "b", "c"]);
    });
  
    test("returns a single-item array when no dashes", () => {
      expect(splitByDash("abc")).toEqual(["abc"]);
    });
  });
  
  describe("removeSpaces function", () => {
    test("removes all spaces", () => {
      expect(removeSpaces("a b c")).toBe("abc");
    });
  
    test("removes leading, trailing, and inner spaces", () => {
      expect(removeSpaces("  hello world  ")).toBe("helloworld");
    });
  });
  
  describe("trimEdges function", () => {
    test("removes only the outer whitespace", () => {
      expect(trimEdges("  hello world  ")).toBe("hello world");
    });
  
    test("returns unchanged string if no outer whitespace", () => {
      expect(trimEdges("hi")).toBe("hi");
    });
  });
  
  describe("cleanSymbols function", () => {
    test("removes slashes, quotes, and semicolons", () => {
      expect(cleanSymbols(`"he/ll'o;`)).toBe("hello");
    });
  
    test("cleans complex mix of unwanted characters", () => {
      expect(cleanSymbols(` /he'll;"o/ `)).toBe("hello");
    });
  });
  
  
  // ========================================================================
  // 🧠 ANSWERS (Hidden Below)
  // ========================================================================
  
  /*
  function makeLowercase(str: string): string {
    return str.toLowerCase();
  }
  
  function splitByDash(str: string): string[] {
    return str.split("-");
  }
  
  function removeSpaces(str: string): string {
    return str.replace(/\s/g, "");
  }
  
  function trimEdges(str: string): string {
    return str.trim();
  }
  
  function cleanSymbols(str: string): string {
    return str.replace(/[\/"'`;]/g, "");
  }
  */