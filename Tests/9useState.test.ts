// ========================
// 📦 CONCEPT: State Management
// 🏷️ NAME: useState
`useState allows functional components to manage and update state values.`;
// ========================

// 📄 QUESTION:
// Create a React component named "ToggleButton" using `useState`.
// The button should toggle between "ON" and "OFF" when clicked.

// 🧩 GENERIC FUNCTION:
import { useState } from "react";

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: useState in ToggleButton
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ToggleButton } from "./ToggleButton"; // Import the component

test("ToggleButton should toggle state when clicked", () => {
  render(<ToggleButton />);

  const button = screen.getByRole("button");

  // Initial state should be OFF
  expect(button).toHaveTextContent("OFF");

  // Click to turn ON
  fireEvent.click(button);
  expect(button).toHaveTextContent("ON");

  // Click again to turn OFF
  fireEvent.click(button);
  expect(button).toHaveTextContent("OFF");
});

console.log("\n✅ Testing complete!");
