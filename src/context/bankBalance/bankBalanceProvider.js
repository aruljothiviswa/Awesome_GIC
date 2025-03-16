import { useReducer } from "react";
import { BankBalanceContext } from "./bankBalanceContext";
import { bankBalanceReducer } from "./bankBalanceReducer";

const initialState = {
  balance: 0,
  transactions: [],
};

export const BankBalanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bankBalanceReducer, initialState);

  return (
    <BankBalanceContext.Provider value={{ state, dispatch }}>
      {children}
    </BankBalanceContext.Provider>
  );
};
