import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IButtonProp } from "./types";

export default function Button({ onClick, backgroundColor, disabled, children, type }: IButtonProp) {

  const CustomButton = styled(MuiButton)({
    textTransform: "none",
    borderRadius: "8px",
    backgroundColor: backgroundColor || "#3360FF",
    padding: "10px 25px",
    boxShadow: "none",
    minWidth: "140px"
  });

  return (
    <CustomButton
      onClick={onClick}
      type={type}
      variant="contained"
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
}
