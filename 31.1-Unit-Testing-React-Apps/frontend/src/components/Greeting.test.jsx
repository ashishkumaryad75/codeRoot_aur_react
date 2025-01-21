import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello word as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const helloWorldElement = screen.getByText("Hello World!!", {
      exact: false,
    });

    // Assert
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const outputElement = screen.getByText("Good To see You..", {
      exact: false,
    });

    // Assert
    expect(outputElement).toBeInTheDocument();
  });

  test("render Changed!! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnClicked = screen.getByRole("button");
    useEvent.click(btnClicked);
    const outputElement = screen.getByText("Changed!!", {
      exact: false,
    });

    // Assert
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render `Good To see You..` if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnClicked = screen.getByRole("button");
    useEvent.click(btnClicked);
    const outputElement = screen.queryByText("Good To see You..", {
      exact: false,
    });

    // Assert
    expect(outputElement).toBeNull();
  });
});
