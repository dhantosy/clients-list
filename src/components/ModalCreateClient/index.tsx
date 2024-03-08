import { ReactNode, useState } from "react";
import { Modal as MuiModal, Box, Typography, Step, StepLabel, Stepper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

import styles from "./modal.module.css";
import { IModalProp } from "./types";

import FormCreateClient from "./FormCreateClient";

const CustomModal = styled(MuiModal)({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent"
  },
});

const steps = ["Personal details", "Contact details"];

export default function ModalCreateClient({ onOpen, onClose }: IModalProp) {
  const [activeStep, setActiveStep] = useState(0);

  const handleModalClose = () => {
    onClose();
    setActiveStep(0);
  };

  const handleNextStep = () => {
    setActiveStep(1);
  };

  return (
    <CustomModal
      open={onOpen}
      onClose={handleModalClose}
      aria-labelledby="create client modal"
    >
      <Box className={styles.modalContainer}>
        <Box className={styles.modalTitle}>
          <Typography variant="h6">
            Create new client
          </Typography>
          <CloseIcon color="disabled" onClick={handleModalClose} />
        </Box>
        <Box className={styles.stepperContainer}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        <Box>
          <FormCreateClient onFormSuccess={handleModalClose} onFormNext={handleNextStep} />
        </Box>
      </Box>
    </CustomModal>
  );
}
