import MuiTextField, {
  TextFieldProps as MuiInputProps,
} from "@mui/material/TextField";
import { ReactNode, RefObject, forwardRef } from "react";

interface InputProps {
  props: MuiInputProps;
  children: ReactNode;
}

type Ref =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined;

function TextField({ props, children }: InputProps, ref: Ref) {
  return (
    <MuiTextField ref={ref} {...props}>
      {children}
    </MuiTextField>
  );
}

export default forwardRef(TextField);
