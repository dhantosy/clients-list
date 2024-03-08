import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { Input, Box } from "@mui/material";
import styles from "./formInputText.module.css";
import { IFormInputProps } from "./types";

export const FormInputText = forwardRef(({ name, control, label }: IFormInputProps, ref) => {
  return (
    <Controller
      name={name || ""}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Box component="fieldset" className={styles.fieldset}>
          {label && <label className={styles.labelInput}>{label}</label>}
          <Input
            ref={ref}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            className={styles.textInput}
          />
        </Box>
      )}
    />
  );
});
