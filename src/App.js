import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GICFooter } from "./components/Footer/GICFooter";
import { GICNavbar } from "./components/Navbar/GICNavbar";
import { HomePage } from "./pages/HomePage/HomePage";
import { DepositPage } from "./pages/DepositPage/DepositPage";
import { WithdrawPage } from "./pages/WithdrawPage/WithdrawPage";
import { PrintStatementPage } from "./pages/PrintStatementPage/PrintStatementPage";
import { QuitPage } from "./pages/QuitPage/QuitPage";
import { formConstant } from "./const";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: formConstant.redirectionPath.depositPath,
      element: <DepositPage />,
    },
    {
      path: formConstant.redirectionPath.withdrawPath,
      element: <WithdrawPage />,
    },
    {
      path: formConstant.redirectionPath.printStatementPath,
      element: <PrintStatementPage />,
    },
    {
      path: formConstant.redirectionPath.quitPath,
      element: <QuitPage />,
    },
  ]);
  return (
    <>
      <GICNavbar />
      <RouterProvider router={router} />
      <GICFooter />
    </>
  );
};

export default App;
