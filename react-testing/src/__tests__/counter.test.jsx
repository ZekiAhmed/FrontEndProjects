import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/counter";

test("test counter logic", () => {
  const { getByText } = render(<Counter />);
  const getCounterText = getByText("Count is: 0");
  const getButtonElementByText = getByText("Click");

  fireEvent.click(getButtonElementByText);

  expect(getCounterText.textContent).toBe("Count is: 1");

  fireEvent.click(getButtonElementByText);

  expect(getCounterText.textContent).toBe("Count is: 2");
});


// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Counter from "../components/counter";

// describe("Counter Component", () => {
//   test("renders initial count", () => {
//     render(<Counter />);
//     expect(screen.getByText(/Count is: 0/i)).toBeInTheDocument();
//   });

//   test("increments count when button is clicked once", () => {
//     render(<Counter />);
//     const button = screen.getByRole("button", { name: /click/i });
//     fireEvent.click(button);
//     expect(screen.getByText(/Count is: 1/i)).toBeInTheDocument();
//   });

//   test("increments count multiple times", () => {
//     render(<Counter />);
//     const button = screen.getByRole("button", { name: /click/i });
    
//     fireEvent.click(button);
//     fireEvent.click(button);
//     fireEvent.click(button);

//     expect(screen.getByText(/Count is: 3/i)).toBeInTheDocument();
//   });
// });
