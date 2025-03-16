import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { useLocation, useNavigate } from "react-router-dom";
import { formConstant } from "../../const";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("HomePage", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders HomePage with default title", () => {
    useLocation.mockReturnValue({
      state: null,
    });

    render(<HomePage />);

    expect(
      screen.getByText(
        /Welcome to AwesomeGIC Bank! What would you like to do?/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(formConstant.buttonName.deposit)
    ).toBeInTheDocument();
    expect(
      screen.getByText(formConstant.buttonName.withdraw)
    ).toBeInTheDocument();
    expect(
      screen.getByText(formConstant.buttonName.printStatement)
    ).toBeInTheDocument();
    expect(screen.getByText(formConstant.buttonName.quit)).toBeInTheDocument();
  });

  it("updates title when location state contains amount", () => {
    useLocation.mockReturnValue({
      state: { amount: "100" },
    });

    render(<HomePage />);

    expect(
      screen.getByText(
        `${formConstant.successTrancaction.thankyou} $100.00 ${formConstant.successTrancaction.deposited}${formConstant.successTrancaction.anythingElse}`
      )
    ).toBeInTheDocument();
  });

  it("updates title when location state contains withdrawAmount", () => {
    useLocation.mockReturnValue({
      state: { withDrawAmount: "50" },
    });

    render(<HomePage />);

    expect(
      screen.getByText(
        `${formConstant.successTrancaction.thankyou} $50.00 ${formConstant.successTrancaction.withdrawn}${formConstant.successTrancaction.anythingElse}`
      )
    ).toBeInTheDocument();
  });

  it("navigates to deposit page when Deposit button is clicked", () => {
    useLocation.mockReturnValue({
      state: {},
    });

    render(<HomePage />);

    fireEvent.click(screen.getByText(formConstant.buttonName.deposit));

    expect(mockNavigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.depositPath
    );
  });

  it("navigates to withdraw page when Withdraw button is clicked", () => {
    useLocation.mockReturnValue({
      state: {},
    });
    render(<HomePage />);

    fireEvent.click(screen.getByText(formConstant.buttonName.withdraw));

    expect(mockNavigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.withdrawPath
    );
  });

  it("navigates to print statement page when Print Statement button is clicked", () => {
    useLocation.mockReturnValue({
      state: {},
    });
    render(<HomePage />);

    fireEvent.click(screen.getByText(formConstant.buttonName.printStatement));

    expect(mockNavigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.printStatementPath
    );
  });

  it("navigates to quit page when Quit button is clicked", () => {
    useLocation.mockReturnValue({
      state: {},
    });
    render(<HomePage />);

    fireEvent.click(screen.getByText(formConstant.buttonName.quit));

    expect(mockNavigate).toHaveBeenCalledWith(
      formConstant.redirectionPath.quitPath
    );
  });
});
