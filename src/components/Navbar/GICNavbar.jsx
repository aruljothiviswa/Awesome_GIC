import styled from "styled-components";
import { Grid2 } from "@mui/material";
import { StyledGridConfig, styledImageConfig } from "./custom_style";
import logo from "../../assets/images/logo.svg";

const Navbar = styled(Grid2)(StyledGridConfig);

const ResponsiveImage = styled.img(styledImageConfig);

export function GICNavbar() {
  return (
    <Navbar>
      <ResponsiveImage src={logo} alt="gic-logo" />
    </Navbar>
  );
}
