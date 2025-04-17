// ========================
// 📚  CONCEPT: match
// 🏷️  NAME: divideTriplets
// ========================

// 📄 QUESTION:
// Formulate a function named "divideTriplets" that takes a string of RNA (e.g. "AUGUUUCCC")
// and outputs an array of triplets divided into groups of three characters.
// If the input does not divide evenly into 3, provide an empty array.

// ========================================================================
// 📝 YOUR ANSWER:

function divideTriplets(rnaSequence: string): string[] {
    // ✍️ Construct your answer here
    return [];
  }
  // ========================================================================
  
  
  // Incorporate into TESTS section beneath the other tests
  
  describe("divideTriplets function", () => {
    test("divides a string that divides evenly into triplets", () => {
      expect(divideTriplets("AUGUUUCCC")).toEqual(["AUG", "UUU", "CCC"]);
    });
  
    test("provides an empty array if the string does not divide by 3", () => {
      expect(divideTriplets("AUGUU")).toEqual([]);
    });
  
    test("provides an empty array for an empty string", () => {
      expect(divideTriplets("")).toEqual([]);
    });
  });
  
  
  // Incorporate into 🧠 ANSWERS section:
  
  /*
  function divideTriplets(rnaSequence: string): string[] {
    return rnaSequence.length % 3 !== 0 ? [] : rnaSequence.match(/.{1,3}/g) || [];
  }
  */
