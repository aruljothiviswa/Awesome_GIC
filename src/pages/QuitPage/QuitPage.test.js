import { render, screen, fireEvent } from "@testing-library/react";
import { QuitPage } from "./QuitPage";
import { formConstant } from "../../const";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("QuitPage", () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders QuitPage with correct message", () => {
    render(<QuitPage />);

    expect(screen.getByText(formConstant.quit.message)).toBeInTheDocument();
  });

  it('navigates to the home page when "Back to Home" button is clicked', () => {
    render(<QuitPage />);

    fireEvent.click(
      screen.getByRole("button", { name: formConstant.buttonName.backToHome })
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.homePath
    );
  });
});
