// ========================
// 📚  CONCEPT: match
// 🏷️  NAME: splitTriplets
// ========================

// 📄 QUESTION:
// Construct a function named "splitTriplets" that takes a string of RNA (e.g. "AUGUUUCCC")
// and produces an array of triplets broken down into groups of three characters.
// If the input does not split evenly into 3, return an empty array.

// ========================================================================
// 📝 YOUR ANSWER:

function splitTriplets(rnaChain: string): string[] {
    // ✍️ Write your answer here
    return [];
}
// ========================================================================


// Append to TESTS section below the other tests

describe("splitTriplets function", () => {
  test("splits a string that divides evenly into triplets", () => {
    expect(splitTriplets("AUGUUUCCC")).toEqual(["AUG", "UUU", "CCC"]);
  });

  test("returns an empty array if the string does not divide by 3", () => {
    expect(splitTriplets("AUGUU")).toEqual([]);
  });

  test("returns an empty array for an empty string", () => {
    expect(splitTriplets("")).toEqual([]);
  });
});


// ========================================================================
// 🧠 ANSWERS (Hidden Below)
// ========================================================================
//<chatgpt to complete>
