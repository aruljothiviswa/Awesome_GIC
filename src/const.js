export const formConstant = {
  title: " Welcome to AwesomeGIC Bank! What would you like to do?",
  successTrancaction: {
    thankyou: "Thank you.",
    deposited: "has been deposited to your account.",
    withdrawn: "has been withdrawn.",
    anythingElse: "Is there anything else you'd like to do?",
  },
  footer: {
    content: "Awesome GIC. All rights reserved.",
  },
  buttonName: {
    deposit: "Deposit",
    withdraw: "Withdraw",
    printStatement: "Print statement",
    quit: "Quit",
    continue: "Continue",
    cancel: "Cancel",
    backToHome: "Back To Home",
  },
  redirectionPath: {
    homePath: "/",
    depositPath: "/deposit",
    withdrawPath: "/withdraw",
    printStatementPath: "/print-statement",
    quitPath: "/quit",
  },
  deposit: {
    inputLabel: "Please enter the amount to deposit:",
    placeholder: "Enter a number",
  },
  withdraw: {
    inputLabel: "Please enter the amount to withdraw:",
    placeholder: "Enter a number",
    errorMessage: "Not sufficient balance to withdraw.",
  },
  common: {
    validInput: "Please enter an amount greater than 0.",
  },
  quit: {
    message: "Thank you for banking with AwesomeGIC Bank.Have a nice day!",
  },
  printStatement: {
    date: "Date",
    amount: "Amount",
    balance: "Balance",
  },
};

export const APPLICATION_ACTION = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
};
