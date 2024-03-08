import { ReactNode } from "react";

export interface IButtonProp {
  onClick?: () => void;
  backgroundColor?: string;
  disabled?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
}
