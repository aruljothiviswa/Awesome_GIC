import { Grid2, Typography } from "@mui/material";
import styled from "styled-components";
import { centeredGridConfig, StyledGridConfig } from "./custom_styles";
import { GICButton } from "../../components/Button/GICButton";
import { formConstant } from "../../const";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledGrid = styled(Grid2)(StyledGridConfig);
const CenteredGrid = styled(Grid2)(centeredGridConfig);

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState(formConstant.title);

  useEffect(() => {
    const { amount, withDrawAmount } = location.state || {};
    if (amount) {
      setTitle(
        formConstant.successTrancaction.thankyou +
          ` $${parseFloat(amount).toFixed(2)} ` +
          formConstant.successTrancaction.deposited +
          formConstant.successTrancaction.anythingElse
      );
    } else if (withDrawAmount) {
      setTitle(
        formConstant.successTrancaction.thankyou +
          ` $${parseFloat(withDrawAmount).toFixed(2)} ` +
          formConstant.successTrancaction.withdrawn +
          formConstant.successTrancaction.anythingElse
      );
    }
  }, [location]);

  const depositHandleClick = () => {
    navigate(formConstant.redirectionPath.depositPath);
  };

  const withDrawHandleClick = () => {
    navigate(formConstant.redirectionPath.withdrawPath);
  };

  const printStatementHandleClick = () => {
    navigate(formConstant.redirectionPath.printStatementPath);
  };

  const quitHandleClick = () => {
    navigate(formConstant.redirectionPath.quitPath);
  };

  return (
    <StyledGrid>
      <CenteredGrid container spacing={2}>
        <Grid2 item>
          <Typography>{title}</Typography>
        </Grid2>
        <Grid2 item>
          <GICButton
            name={formConstant.buttonName.deposit}
            onClick={depositHandleClick}
          />
        </Grid2>
        <Grid2 item>
          <GICButton
            name={formConstant.buttonName.withdraw}
            onClick={withDrawHandleClick}
          />
        </Grid2>
        <Grid2 item>
          <GICButton
            name={formConstant.buttonName.printStatement}
            onClick={printStatementHandleClick}
          />
        </Grid2>
        <Grid2 item>
          <GICButton
            name={formConstant.buttonName.quit}
            onClick={quitHandleClick}
          />
        </Grid2>
      </CenteredGrid>
    </StyledGrid>
  );
};
