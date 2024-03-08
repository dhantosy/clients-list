import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { FormInputText } from "../FormInputText";
import Button from "../Button";
import { StateContext } from "../../store/ClientsProvider";
import styles from "./modal.module.css";
import { IFormInputProp, IFormCreateClientProp } from "./types";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export default function FormCreateClient({ onFormSuccess, onFormNext }: IFormCreateClientProp) {
  const [activeStep, setActiveStep] = useState(0);
  const { dispatch } = useContext(StateContext);

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<IFormInputProp>({
    defaultValues: defaultValues,
  });
  const watchFirstName = watch("firstName", "");
  const watchLastName = watch("lastName", "");
  const watchEmail = watch("email", "");
  const watchPhoneNumber = watch("phoneNumber", "");

  useEffect(() => {
    setFocus("firstName");

    if (activeStep === 1) setFocus("email");
  }, [activeStep, setFocus]);

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    onFormNext();
  };

  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleModalClose = () => {
    reset();
    setActiveStep(0);
  };

  const onSubmit = ({ firstName, lastName, email, phoneNumber }: IFormInputProp) => {
    const userData = {
      id: Math.random(),
      firstName,
      lastName,
      email,
      phoneNumber
    };

    dispatch({ type: "CREATE_NEW_CLIENT", data: userData });
    onFormSuccess();
    handleModalClose();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box className={activeStep === 0 ? "block" : "hidden"}>
        <FormInputText
          control={control}
          label="First name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName?.type === "required" && <span className="error">First name is required</span>}
        <FormInputText
          control={control}
          label="Last name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName?.type === "required" && <span className="error">Last name is required</span>}
        <Box className={styles.navBottomStepStart}>
          <Button
            onClick={handleNextStep}
            disabled={watchFirstName === "" || watchLastName === ""}
          >Continue</Button>
        </Box>
      </Box>
      <Box className={activeStep === 1 ? "block" : "hidden"}>
        <Box>
          <FormInputText
            control={control}
            label="Email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email?.type === "required" && <span className="error">Email address is required</span>}
          {errors.email?.type === "pattern" && <span className="error">Invalid email</span>}
        </Box>
        <Box>
          <FormInputText
            control={control}
            label="Phone number"
            {...register("phoneNumber", { required: true, pattern: /^[\d ()+]+$/ })}
          />
          {errors.phoneNumber?.type === "required" && <span className="error">Phone number is required</span>}
          {errors.phoneNumber?.type === "pattern" && <span className="error">Invalid phone number</span>}
        </Box>
        <Box className={styles.navBottomStepFinish}>
          <div onClick={handleBackStep} className={styles.backArrow}>
            <ArrowBackIcon />
            <span>Back</span>
          </div>
          <Button type="submit" disabled={watchPhoneNumber === "" || watchEmail === ""}>Create Client</Button>
        </Box>
      </Box>
    </form>
  );
}
