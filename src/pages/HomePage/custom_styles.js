export const StyledGridConfig = {
  "&.MuiGrid2-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d2e4ec",
    margin: 0,
    width: "100%",
    height: "75vh",
    margin: 0,
    background: "#d2e4ec",
    "@media (max-width: 1200px)": {
      height: "90vh",
    },
    "@media (max-width: 768px)": {
      height: "92vh",
    },
  },
};

export const centeredGridConfig = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: "500px",
};
