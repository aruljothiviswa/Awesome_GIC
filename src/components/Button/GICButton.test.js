import { render, screen, fireEvent } from "@testing-library/react";
import { GICButton } from "./GICButton";

describe("GICButton", () => {
  it("renders the button with the correct text", () => {
    render(<GICButton name="Click Me" onClick={() => {}} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<GICButton name="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
