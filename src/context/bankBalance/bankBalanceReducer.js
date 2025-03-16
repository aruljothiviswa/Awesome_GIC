import { APPLICATION_ACTION } from "../../const";

export const bankBalanceReducer = (state, action) => {
  switch (action.type) {
    case APPLICATION_ACTION.DEPOSIT:
      return state;
    case APPLICATION_ACTION.WITHDRAW:
      return state;
    default:
      return state;
  }
};
