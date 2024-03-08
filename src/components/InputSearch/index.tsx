import { TextField, InputAdornment } from "@mui/material";
import {  styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { IInputSearchProp } from "./types";

const CssTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  width: "100%",
  borderRadius: "8px",
  "& .MuiOutlinedInput-input": {
    padding: "12px 14px"
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #EEEEEE",
    borderRadius: "8px",
  },
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #EEEEEE",
      borderRadius: "8px",
    }
  },
  [theme.breakpoints.up("sm")]: {
    width: "280px"
  },
}));

export default function InputSearch({ placeholder, onChange }: IInputSearchProp) {
  return (
    <CssTextField
      onChange={onChange}
      placeholder={placeholder}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
}
