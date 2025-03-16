import { useNavigate } from "react-router-dom";
import { formConstant } from "../../const";
import { Box, Button, Container, Typography } from "@mui/material";
import { QuitPageStyles } from "./custom_style";

export const QuitPage = () => {
    const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(formConstant.redirectionPath.homePath);
  };

  return (
    <Container sx={QuitPageStyles.containerStyle}>
      <Box sx={QuitPageStyles.boxStyle}>
        <Typography>{formConstant.quit.message}</Typography>

        <Box sx={QuitPageStyles.buttonBoxStyle}>
          <Button
            sx={QuitPageStyles.backToHomeButtonStyle}
            variant="outlined"
            onClick={handleClick}
          >
            {formConstant.buttonName.backToHome}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
