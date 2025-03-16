import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { WithdrawPage } from "./WithdrawPage";
import { formConstant } from "../../const";
import { useBankBalance } from "../../context";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../context", () => ({
  useBankBalance: jest.fn(),
}));

describe("WithdrawPage", () => {
  let navigate;
  let mockDispatch;

  beforeEach(() => {
    navigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(navigate);
    mockDispatch = jest.fn();

    useBankBalance.mockReturnValue({
      state: {
        balance: 100,
      },
      dispatch: mockDispatch,
    });
  });

  it("renders WithdrawPage with correct label and input field", () => {
    render(<WithdrawPage />);

    expect(
      screen.getByText(formConstant.withdraw.inputLabel)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(formConstant.withdraw.placeholder)
    ).toBeInTheDocument();
  });

  it("shows error if input is invalid (negative or zero)", async () => {
    render(<WithdrawPage />);

    const input = screen.getByPlaceholderText(
      formConstant.withdraw.placeholder
    );
    const submitButton = screen.getByRole("button", {
      name: formConstant.buttonName.continue,
    });

    fireEvent.change(input, { target: { value: "-50" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(formConstant.common.validInput)
      ).toBeInTheDocument();
    });

    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(formConstant.common.validInput)
      ).toBeInTheDocument();
    });
  });

  it("shows error if withdrawal amount is greater than balance", async () => {
    render(<WithdrawPage />);

    const input = screen.getByPlaceholderText(
      formConstant.withdraw.placeholder
    );
    const submitButton = screen.getByRole("button", {
      name: formConstant.buttonName.continue,
    });

    fireEvent.change(input, { target: { value: "200" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(formConstant.withdraw.errorMessage)
      ).toBeInTheDocument();
    });
  });

  it("calls dispatch and navigates to home on valid form submission", async () => {
    render(<WithdrawPage />);

    const input = screen.getByPlaceholderText(
      formConstant.withdraw.placeholder
    );
    const submitButton = screen.getByRole("button", {
      name: formConstant.buttonName.continue,
    });

    fireEvent.change(input, { target: { value: "50" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "WITHDRAW",
        amount: 50,
      });
    });

    expect(navigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.homePath,
      {
        state: { withDrawAmount: "50" },
      }
    );
  });

  it("navigates back to home when cancel button is clicked", async () => {
    render(<WithdrawPage />);

    const cancelButton = screen.getByRole("button", {
      name: formConstant.buttonName.cancel,
    });

    fireEvent.click(cancelButton);

    expect(navigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.homePath
    );
  });
});
