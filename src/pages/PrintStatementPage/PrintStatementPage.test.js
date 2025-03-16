import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PrintStatementPage } from "./PrintStatementPage";
import { useNavigate } from "react-router-dom";
import { useBankBalance } from "../../context";
import { formConstant, APPLICATION_ACTION } from "../../const";

jest.mock("../../context", () => ({
  useBankBalance: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("PrintStatementPage", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders transaction data correctly", () => {
    useBankBalance.mockReturnValue({
      state: {
        transactions: [
          {
            type: APPLICATION_ACTION.DEPOSIT,
            amount: 100,
            date: "2025-03-16T10:00:00Z",
          },
          {
            type: APPLICATION_ACTION.WITHDRAW,
            amount: 50,
            date: "2025-03-17T10:00:00Z",
          },
        ],
      },
    });

    render(<PrintStatementPage />);

    expect(
      screen.getByText(formConstant.printStatement.date)
    ).toBeInTheDocument();
    expect(
      screen.getByText(formConstant.printStatement.amount)
    ).toBeInTheDocument();
    expect(
      screen.getByText(formConstant.printStatement.balance)
    ).toBeInTheDocument();

    expect(
      screen.getByText("Sun, Mar 16, 2025, 6:00:00 PM")
    ).toBeInTheDocument();

    const amountCells = screen.getAllByText(/100\.00/);
    expect(amountCells.length).toBeGreaterThanOrEqual(1);
    expect(amountCells[0]).toBeInTheDocument();

    expect(
      screen.getByText("Sun, Mar 16, 2025, 6:00:00 PM")
    ).toBeInTheDocument();

    const withdrawCells = screen.getAllByText(/-50\.00/);
    expect(withdrawCells.length).toBeGreaterThanOrEqual(1);
    expect(withdrawCells[0]).toBeInTheDocument();

    const balanceCells = screen.getAllByText(/50\.00/);
    expect(balanceCells.length).toBeGreaterThanOrEqual(1);
    expect(balanceCells[0]).toBeInTheDocument();
  });

  it("back to home button works", () => {
    useBankBalance.mockReturnValue({
      state: {
        transactions: [],
      },
    });

    render(<PrintStatementPage />);

    const backButton = screen.getByRole("button", {
      name: formConstant.buttonName.backToHome,
    });
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.homePath
    );
  });
});
