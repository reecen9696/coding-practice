// ========================
// 📦 CONCEPT: State Management
// 🏷️ NAME: useState
`useState allows functional components to manage and update state values.`;
// ========================

// 📄 QUESTION:
// Create a React component named "ToggleButton" using `useState`.
// The button should toggle between "ON" and "OFF" when clicked.

// 🧩 GENERIC FUNCTION:
// import { useState } from "react";

// export function ToggleButton() {
//   const [isOn, setIsOn] = useState(false);

//   return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
// }

// ========================================================================
// 📝 YOUR ANSWER:

import { useState } from "react";
export function toggleButton() {
  const [isOn, setIsOn] = useState(false);
  return info;
}

// ========================================================================

// 🏗️ TEST: useState in ToggleButton
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ToggleButton component", () => {
  test("should render with initial state OFF", () => {
    render(<ToggleButton />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("OFF");
  });

  test("should toggle between ON and OFF when clicked", () => {
    render(<ToggleButton />);
    const button = screen.getByRole("button");

    // Click to turn ON
    fireEvent.click(button);
    expect(button).toHaveTextContent("ON");

    // Click again to turn OFF
    fireEvent.click(button);
    expect(button).toHaveTextContent("OFF");
  });
});
