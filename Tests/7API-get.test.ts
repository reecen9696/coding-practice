// ========================
// 📦 CONCEPT: API Calls
// 🏷️ NAME: getUser
`The default old-school API function. APIs allow real-time data retrieval from databases or third-party services.`;
// ========================

// 📄 QUESTION:
// Write a function named "getUser" that makes a GET request to "https://jsonplaceholder.typicode.com/users/1".
// It should return a promise that resolves with the user's name. If an error occurs, return "Error fetching user".

// 🧩 GENERIC FUNCTION:
// async function sampleFunction(): Promise<string> {
// try {
// const response = await fetch(
//   "https://sampleurl.com"
// );

// if (!response.ok) {
//   throw new Error("Failed to fetch data");
// }

// const data = await response.json();
// return data.name;
//   } catch (error) {
//     console.error("API Error:", error);
//     return "Error fetching user";
//   }
//}

// ========================================================================
// 📝 YOUR ANSWER:

async function getUser(): Promise<string> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await response.json();

    return data.name;
  } catch (error) {
    console.error("API Error:", error);
    return "Error fetching user";
  }
}

// ========================================================================

// 🏗️ TEST: getUser function
import { jest } from "@jest/globals";
describe("getUser function", () => {
  beforeEach(() => {
    jest.restoreAllMocks(); // Reset mocks before each test
  });

  test("fetches user name successfully", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ name: "Leanne Graham" }),
      } as Response)
    ) as jest.MockedFunction<typeof fetch>; // ✅ Explicitly cast mock

    await expect(getUser()).resolves.toBe("Leanne Graham");
  });

  test("handles fetch error", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error("Network Error"))
    ) as jest.MockedFunction<typeof fetch>; // ✅ Explicit cast

    await expect(getUser()).resolves.toBe("Error fetching user");
  });

  test("handles non-200 responses", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      } as Response)
    ) as jest.MockedFunction<typeof fetch>; // ✅ Explicit cast

    await expect(getUser()).resolves.toBe("Error fetching user");
  });
});
