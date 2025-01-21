import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello word as a text", () => {
  // Arange
  render(<Greeting />);
  
  // Act
  const helloWorldElement = screen.getByText('Hello World!!',{exact :false});

  // Assert
  expect(helloWorldElement).toBeInTheDocument();
});
