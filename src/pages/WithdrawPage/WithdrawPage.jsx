import React, { useState } from "react";
import { Button, TextField, Container, Box, Typography } from "@mui/material";
import { APPLICATION_ACTION, formConstant } from "../../const";
import { useNavigate } from "react-router-dom";
import { useBankBalance } from "../../context";
import { WithdrawPageStyles } from "./custom_style";

export const WithdrawPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { state, dispatch } = useBankBalance();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(inputValue);
    if (amount <= 0) {
      setError(formConstant.common.validInput);
      return;
    } else if (amount > state.balance) {
      setError(formConstant.withdraw.errorMessage);
      return;
    }
    dispatch({ type: APPLICATION_ACTION.WITHDRAW, amount: Number(inputValue) });
    navigate(formConstant.redirectionPath.homePath, {
      state: { withDrawAmount: inputValue },
    });
  };

  const handleCancel = () => {
    navigate(formConstant.redirectionPath.homePath);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Regex to allow only numbers with at most one decimal and up to two digits after the decimal
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(inputValue)) {
      setInputValue(inputValue);
    }
  };

  return (
    <Container sx={WithdrawPageStyles.containerStyle}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={WithdrawPageStyles.boxStyle}
      >
        <Typography>{formConstant.withdraw.inputLabel}</Typography>
        <TextField
          sx={WithdrawPageStyles.textBoxStyle}
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleChange}
          placeholder={formConstant.withdraw.placeholder}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={WithdrawPageStyles.buttonBoxStyle}>
          <Button
            sx={WithdrawPageStyles.continueButtonStyle}
            variant="contained"
            type="submit"
          >
            {formConstant.buttonName.continue}
          </Button>
          <Button
            sx={WithdrawPageStyles.cancelButtonStyle}
            variant="outlined"
            onClick={handleCancel}
          >
            {formConstant.buttonName.cancel}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
