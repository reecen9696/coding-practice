// ========================
// 📦 CONCEPT: API Calls
// 🏷️ NAME: getUser
`Newer library to make get more efficient. APIs allow real-time data retrieval from databases or third-party services.`;
// ========================

// 📄 QUESTION:
// Write a function named "getUser" that makes a GET request to "https://jsonplaceholder.typicode.com/users/1"
// using Axios. It should return a promise that resolves with the user's name. If an error occurs, return "Error fetching user".

// 🧩 GENERIC FUNCTION:
// import axios from "axios";

// async function sampleAPICall(): Promise<string> {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     return response.data.title;
//   } catch (error) {
//     console.error("API Error:", error);
//     return "Error fetching data";
//   }
// }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: getUser function
import { jest } from "@jest/globals";

jest.mock("axios");

describe("getUser function (Axios)", () => {
  beforeEach(() => {
    jest.restoreAllMocks(); // Reset mocks before each test
  });

  test("fetches user name successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: { name: "Leanne Graham" },
    });

    await expect(getUser()).resolves.toBe("Leanne Graham");
  });

  test("handles Axios request failure", async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await expect(getUser()).resolves.toBe("Error fetching user");
  });

  test("handles invalid responses", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: {} });

    await expect(getUser()).resolves.toBe("Error fetching user");
  });
});
