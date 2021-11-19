import React, { ReactElement, SelectHTMLAttributes } from "react";
import { SelectWrapper } from "./styles";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = ({
  name,
  label,
  options,
  ...rest
}: Props): ReactElement => {
  return (
    <SelectWrapper>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione...
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </SelectWrapper>
  );
};
