import React from "react";
import { render } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DepositPage } from "./pages/DepositPage/DepositPage";
import { WithdrawPage } from "./pages/WithdrawPage/WithdrawPage";
import { PrintStatementPage } from "./pages/PrintStatementPage/PrintStatementPage";
import { QuitPage } from "./pages/QuitPage/QuitPage";
import { GICNavbar } from "./components/Navbar/GICNavbar";
import { GICFooter } from "./components/Footer/GICFooter";
import { HomePage } from "./pages/HomePage/HomePage";

describe("App Component", () => {
  let router;

  beforeEach(() => {
    router = createBrowserRouter([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/deposit",
        element: <DepositPage />,
      },
      {
        path: "/withdraw",
        element: <WithdrawPage />,
      },
      {
        path: "/print-statement",
        element: <PrintStatementPage />,
      },
      {
        path: "/quit",
        element: <QuitPage />,
      },
    ]);
  });

  it("renders the navbar and footer correctly", () => {
    render(
      <>
        <GICNavbar />
        <RouterProvider router={router} />
        <GICFooter />
      </>
    );
  });
});
