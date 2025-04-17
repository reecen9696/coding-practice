// ===============================
// 📘  CONCEPT: Map & Dictionary
// 🏷️  NAME: retrieveDefinition
// ===============================

// 📄 QUESTION:
// Construct a function named "retrieveDefinition" that admits a 3-character string token (e.g. "AUG")
// and retrieves the equivalent value from a specified lookup directory.
// If the token does not exist within the directory, return "Unknown".

// ========================================================================
// 📝 YOUR ANSWER:

function retrieveDefinition(token: string): string {
    // ✍️ Write your answer here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // 🧪 TESTS
  // ========================
  
  describe("retrieveDefinition function", () => {
    test("yields correct value for recognized tokens", () => {
      expect(retrieveDefinition("AUG")).toBe("Methionine");
      expect(retrieveDefinition("UUU")).toBe("Phenylalanine");
      expect(retrieveDefinition("UGG")).toBe("Tryptophan");
    });
  
    test("yields 'STOP' for terminating tokens", () => {
      expect(retrieveDefinition("UAA")).toBe("STOP");
      expect(retrieveDefinition("UGA")).toBe("STOP");
    });
  
    test("yields 'Unknown' for unrecognized tokens", () => {
      expect(retrieveDefinition("XYZ")).toBe("Unknown");
      expect(retrieveDefinition("")).toBe("Unknown");
    });
  });
  
  
  // ========================
  // 🧠 ANSWERS (Hidden Below)
  // ========================
  
  /*
  function retrieveDefinition(token: string): string {
    const lookupDirectory: { [key: string]: string } = {
      AUG: "Methionine",
      UUU: "Phenylalanine",
      UUC: "Phenylalanine",
      UUA: "Leucine",
      UUG: "Leucine",
      UCU: "Serine",
      UCC: "Serine",
      UCA: "Serine",
      UCG: "Serine",
      UAU: "Tyrosine",
      UAC: "Tyrosine",
      UGU: "Cysteine",
      UGC: "Cysteine",
      UGG: "Tryptophan",
      UAA: "STOP",
      UAG: "STOP",
      UGA: "STOP"
    };
  
    return lookupDirectory[token] || "Unknown";
  }
  */
