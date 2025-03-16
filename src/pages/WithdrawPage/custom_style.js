export const WithdrawPageStyles = {
  containerStyle: {
    minWidth: "100%",
    height: "100vh",
    margin: 0,
    background: "#d2e4ec",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    paddingTop: 12,
  },
  buttonBoxStyle: {
    display: "flex",
    gap: 2,
  },
  continueButtonStyle: {
    background: "#218838",
  },
  cancelButtonStyle: {
    color: "#218838",
    borderColor: "#218838",
  },
  textBoxStyle: {
    width: "50%",
    "@media (max-width: 600px)": { width: "75%" },
  },
};
