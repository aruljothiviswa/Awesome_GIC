export const GCIButtonConfig = {
  width: "300px",
  backgroundColor: "#218838",
  color: "white",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "50px",
  transition: "all 0.3s ease",
  border: "none",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#205b2e",
    transform: "translateY(-3px)",
  },

  "&:focus": {
    backgroundColor: "#007bff",
    boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)",
  },

  "&:active": {
    backgroundColor: "#0069d9",
    transform: "translateY(2px)",
  },
};
