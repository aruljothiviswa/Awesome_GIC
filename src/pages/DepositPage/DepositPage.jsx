import React, { useState } from "react";
import { Button, TextField, Container, Box, Typography } from "@mui/material";
import { APPLICATION_ACTION, formConstant } from "../../const";
import { useNavigate } from "react-router-dom";
import { DepositPageStyles } from "./custom_style";
import { useBankBalance } from "../../context";

export const DepositPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useBankBalance();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: APPLICATION_ACTION.DEPOSIT, amount: Number(inputValue) });
    navigate(formConstant.redirectionPath.homePath, {
      state: { amount: inputValue },
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
    <Container sx={DepositPageStyles.containerStyle}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={DepositPageStyles.boxStyle}
      >
        <Typography>{formConstant.deposit.inputLabel}</Typography>
        <TextField
          sx={DepositPageStyles.textBoxStyle}
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleChange}
          placeholder={formConstant.deposit.placeholder}
          required
        />
        <Box sx={DepositPageStyles.buttonBoxStyle}>
          <Button
            sx={DepositPageStyles.continueButtonStyle}
            variant="contained"
            type="submit"
          >
            {formConstant.buttonName.continue}
          </Button>
          <Button
            sx={DepositPageStyles.cancelButtonStyle}
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
