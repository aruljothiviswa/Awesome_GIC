import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BankBalanceProvider } from "./context/bankBalance/bankBalanceProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BankBalanceProvider>
      <App />
    </BankBalanceProvider>
  </React.StrictMode>
);
