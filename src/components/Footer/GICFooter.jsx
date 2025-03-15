// import { Typography } from "@mui/material";
import { formConstant } from "../../const";
import { StyledFooterConfig } from "./custom_styles";
import styled from "styled-components";

const StyledFooter = styled.footer(StyledFooterConfig);

export function GICFooter() {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} {formConstant.footer.content}
    </StyledFooter>
  );
}
