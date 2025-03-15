import { Grid2 } from "@mui/material";
import styled from "styled-components";
import { centeredGridConfig, StyledGridConfig } from "./custom_styles";
import { GICButton } from "../../components/Button/GICButton";
import { formConstant } from "../../const";
import { useNavigate } from "react-router-dom";

const StyledGrid = styled(Grid2)(StyledGridConfig);
const CenteredGrid = styled(Grid2)(centeredGridConfig);

export const HomePage = () => {
  const navigate = useNavigate();

  const depositHandleClick = () => {
    console.log("depositHandleClick success");
    navigate(formConstant.redirectionPath.depositPath);
  };

  const withDrawHandleClick = () => {
    console.log("withDrawHandleClick success");
    navigate(formConstant.redirectionPath.withdrawPath);
  };

  const printStatementHandleClick = () => {
    console.log("printStatementHandleClick success");
    navigate(formConstant.redirectionPath.printStatementPath);
  };

  const quitHandleClick = () => {
    console.log("quitHandleClick success");
    navigate(formConstant.redirectionPath.quitPath);
  };

  return (
    <StyledGrid>
      <CenteredGrid container spacing={2}>
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
