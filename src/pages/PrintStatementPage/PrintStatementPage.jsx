import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { APPLICATION_ACTION, formConstant } from "../../const";
import { useBankBalance } from "../../context";
import { PrintStatementPageStyles } from "./custom_style";
import { useNavigate } from "react-router-dom";

export const PrintStatementPage = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const navigate = useNavigate();
  const { state } = useBankBalance();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  const handleClick = () => {
    navigate(formConstant.redirectionPath.homePath);
  };

  useEffect(() => {
    let currentBalance = 0;
    const formattedData = state?.transactions.map((transaction) => {
      const amount =
        transaction.type === APPLICATION_ACTION.WITHDRAW
          ? -transaction.amount
          : transaction.amount;
      currentBalance += amount;

      return {
        ...transaction,
        amount: amount.toFixed(2),
        balance: currentBalance.toFixed(2),
      };
    });

    setTransactionsData(formattedData);
  }, [state]);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: {
            xs: "70vh",
            sm: "80vh",
            md: "60vh",
          },
          overflow: "auto",
        }}
      >
        <Table stickyHeader aria-label="transaction table">
          <TableHead>
            <TableRow>
              <TableCell>{formConstant.printStatement.date}</TableCell>
              <TableCell>{formConstant.printStatement.amount}</TableCell>
              <TableCell>{formConstant.printStatement.balance}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsData.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={PrintStatementPageStyles.buttonBoxStyle}>
        <Button
          sx={PrintStatementPageStyles.backToHomeButtonStyle}
          variant="outlined"
          onClick={handleClick}
        >
          {formConstant.buttonName.backToHome}
        </Button>
      </Box>
    </>
  );
};
