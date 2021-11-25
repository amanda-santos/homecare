import React, { InputHTMLAttributes, ReactElement } from "react";
import { InputWrapper } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  labelColor?: "white" | "text-light";
}

export const Input = ({
  name,
  label,
  labelColor = "text-light",
  ...rest
}: Props): ReactElement => {
  return (
    <InputWrapper $labelColor={labelColor}>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputWrapper>
  );
};
