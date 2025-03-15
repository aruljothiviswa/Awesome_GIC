import { Grid2 } from "@mui/material";
import styled from "styled-components";
import { centeredGridConfig, StyledGridConfig } from "./custom_styles";
import { GICButton } from "../../components/Button/GICButton";
import { formConstant } from "../../const";

const StyledGrid = styled(Grid2)(StyledGridConfig);
const CenteredGrid = styled(Grid2)(centeredGridConfig);

export const HomePage = () => {
  const depositHandleClick = () => {
    console.log("depositHandleClick success");
  };

  const withDrawHandleClick = () => {
    console.log("withDrawHandleClick success");
  };

  const printStatementHandleClick = () => {
    console.log("printStatementHandleClick success");
  };

  const quitHandleClick = () => {
    console.log("quitHandleClick success");
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
