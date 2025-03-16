import { APPLICATION_ACTION } from "../../const";

export const bankBalanceReducer = (state, action) => {
  const newTransaction = {
    amount: action.amount,
    type: action.type,
    date: new Date().toLocaleString(),
  };

  switch (action.type) {
    case APPLICATION_ACTION.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.amount,
        transactions: [...state.transactions, newTransaction],
      };
    case APPLICATION_ACTION.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.amount,
        transactions: [...state.transactions, newTransaction],
      };
    default:
      return state;
  }
};
