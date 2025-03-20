// ========================
// 📦 CONCEPT: Side Effects & Lifecycle
// 🏷️ NAME: useEffect
`useEffect allows functional components to handle side effects such as data fetching, subscriptions, or manual DOM manipulations.`;
// ========================

// 📄 QUESTION:
// Create a React component named "Timer" using `useState` and `useEffect`.
// The component should display a timer that starts at 0 and increments every second.
// The timer should automatically start when the component is mounted.

// 🧩 GENERIC FUNCTION:
// import { useState, useEffect } from "react";

// export function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <p>Time: {seconds}s</p>;
// }

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: Timer component with useEffect
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("Timer component", () => {
  test("should start at 0 seconds", () => {
    render(<Timer />);
    expect(screen.getByText("Time: 0s")).toBeInTheDocument();
  });

  test("should increment every second", () => {
    render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000); // Simulate 1 second
    });
    expect(screen.getByText("Time: 1s")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000); // Simulate 2 more seconds
    });
    expect(screen.getByText("Time: 3s")).toBeInTheDocument();
  });

  test("should clean up interval on unmount", () => {
    const { unmount } = render(<Timer />);
    unmount();

    act(() => {
      jest.advanceTimersByTime(5000); // Move time forward
    });

    expect(screen.queryByText(/Time: \d+s/)).not.toBeInTheDocument();
  });
});
