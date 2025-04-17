// =======================================
// 📘  CONCEPT: Mapping & Key-Value Pairing
// 🏷️  NAME: fetchMeaning
// =======================================

// 📄 INQUIRY:
// Construct a function by the name of "fetchMeaning" that takes in a 3-letter string code (e.g. "AUG")
// and retrieves the corresponding value from a predefined reference directory.
// If the code does not exist in the directory, return "Unknown".

// ========================================================================
// 📝 YOUR RESPONSE:

function fetchMeaning(code: string): string {
    // ✍️ Write your response here
    return "";
  }
  // ========================================================================
  
  
  // ========================
  // 🧪 TEST CASES
  // ========================
  
  describe("fetchMeaning function", () => {
    test("returns correct value for recognized codes", () => {
      expect(fetchMeaning("AUG")).toBe("Methionine");
      expect(fetchMeaning("UUU")).toBe("Phenylalanine");
      expect(fetchMeaning("UGG")).toBe("Tryptophan");
    });
  
    test("returns 'STOP' for terminating codes", () => {
      expect(fetchMeaning("UAA")).toBe("STOP");
      expect(fetchMeaning("UGA")).toBe("STOP");
    });
  
    test("returns 'Unknown' for unrecognized codes", () => {
      expect(fetchMeaning("XYZ")).toBe("Unknown");
      expect(fetchMeaning("")).toBe("Unknown");
    });
  });
  
  
  // ========================================================================
  // 🧠 SOLUTIONS (Hidden Below)
  // ========================================================================
  /*
  function fetchMeaning(code: string): string {
    const referenceDirectory: { [key: string]: string } = {
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
  
    return referenceDirectory[code] || "Unknown";
  }
  */
