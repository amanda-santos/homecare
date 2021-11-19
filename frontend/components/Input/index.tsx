import React, { InputHTMLAttributes, ReactElement } from "react";
import { InputWrapper } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = ({ name, label, ...rest }: Props): ReactElement => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputWrapper>
  );
};
