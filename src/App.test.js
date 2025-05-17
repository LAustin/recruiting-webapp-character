import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Coding Exercise/i);
  expect(linkElement).toBeInTheDocument();
});
