import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BankBalanceProvider } from "../../context/bankBalance/bankBalanceProvider";
import { DepositPage } from "./DepositPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("DepositPage", () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders DepositPage correctly", () => {
    render(
      <BankBalanceProvider>
        <DepositPage />
      </BankBalanceProvider>
    );

    expect(screen.getByPlaceholderText(/Enter a number/i)).toBeInTheDocument();
    expect(screen.getByText(/Continue/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
  });

  it("shows error message when input is invalid", () => {
    render(
      <BankBalanceProvider>
        <DepositPage />
      </BankBalanceProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), {
      target: { value: "0" },
    });
    fireEvent.click(screen.getByText(/Continue/i));

    waitFor(() => {
      expect(
        screen.getByText(/Please enter a valid amount/i)
      ).toBeInTheDocument();
    });
  });

  it("submits valid deposit", async () => {
    render(
      <BankBalanceProvider>
        <DepositPage />
      </BankBalanceProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), {
      target: { value: "100" },
    });
    fireEvent.click(screen.getByText(/Continue/i));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/", {
        state: { amount: "100" },
      });
    });
  });

  it("cancels and navigates back to home", () => {
    render(
      <BankBalanceProvider>
        <DepositPage />
      </BankBalanceProvider>
    );

    fireEvent.click(screen.getByText(/Cancel/i));

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("handles valid input change", () => {
    render(
        <BankBalanceProvider>
          <DepositPage />
        </BankBalanceProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), {
      target: { value: "50.99" },
    });
    expect(screen.getByPlaceholderText(/Enter a number/i).value).toBe("50.99");

    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), {
      target: { value: "50.999" },
    });
    expect(screen.getByPlaceholderText(/Enter a number/i).value).toBe("50.99");
  });
});
