import React, { InputHTMLAttributes, ReactElement } from "react";
import { InputWrapper } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
}

export const Checkbox = ({
  name,
  label,
  value,
  ...rest
}: Props): ReactElement => {
  return (
    <InputWrapper>
      <input type="checkbox" id={value} value={value} name={name} {...rest} />
      <label htmlFor={value}>{label}</label>
    </InputWrapper>
  );
};
