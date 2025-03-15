import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { GCIButtonConfig } from "./custom_styles";

const StyledButton = styled(Button)(GCIButtonConfig);

export const GICButton = ({ name, onClick }) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};
