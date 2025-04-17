// ========================
// 📦 CONCEPT: Transforming Arrays
// 🏷️ NAME: amplifyValues
// ========================

// 📄 TASK:
// Formulate a function named "amplifyValues" that accepts an array of numbers
// and fabricates a new array with all constituents multiplied by two.

// ========================================================================
// 📝 YOUR SOLUTION:

// ========================================================================
// 📦 CONCEPT: Converting from JSON
// 🏷️ NAME: retrieveNames
// ========================

// 📄 TASK:
// Considering the subsequent JSON array of clients, formulate a function named "retrieveNames"
// that delivers an array of client names.
// Hint - you may need an interface & a map  object.map(item => item.designation)

// Example JSON:
// const clients = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 }
// ];

// Desired Output: ["Alice", "Bob", "Charlie"]

// ========================================================================
// 📝 YOUR SOLUTION:

interface Clients{
  id: number,
  name: string,
  age: number
}

function retreiveNames(clients:Clients[]):string[]{
  return clients.map(client=>client.name);
}
// ========================================================================

// 📦 TEST: retrieveNames
describe("retrieveNames function", () => {
  const exemplarClients = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  test("extracts names from a catalog of client objects", () => {
    expect(retrieveNames(exemplarClients)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  test("delivers an empty array if no clients are provided", () => {
    expect(retrieveNames([])).toEqual([]);
  });

  test("handles clients with vacant name fields", () => {
    const clientsWithVacantName = [
      { id: 1, name: "", age: 25 },
      { id: 2, name: "Eve", age: 30 },
    ];
    expect(retrieveNames(clientsWithVacantName)).toEqual(["", "Eve"]);
  });
});

// 📦 TEST: amplifyValues
describe("amplifyValues function", () => {
  test("multiplies each numeric value within an array by two", () => {
    expect(amplifyValues([1, 2, 3])).toEqual([2, 4, 6]);
    expect(amplifyValues([5, 10, 15])).toEqual([10, 20, 30]);
  });

  test("renders an empty array if input is absent", () => {
    expect(amplifyValues([])).toEqual([]);
  });

  test("manipulates negative numbers correctly", () => {
    expect(amplifyValues([-1, -2, -3])).toEqual([-2, -4, -6]);
  });
});

// ========================================================================
// 🧠 SOLUTIONS (Hidden Below)
// ========================================================================

/*
function amplifyValues(numbers: number[]): number[] {
  return numbers.map(n => n * 2);
}

interface Client {
  id: number;
  name: string;
  age: number;
}

function retrieveNames(clients: Client[]): string[] {
  return clients.map(client => client.name);
}
*/