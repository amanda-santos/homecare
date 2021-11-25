import React, { ReactElement, SelectHTMLAttributes } from "react";
import { SelectWrapper } from "./styles";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  labelColor?: "white" | "text-light";
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = ({
  name,
  label,
  labelColor = "text-light",
  options,
  ...rest
}: Props): ReactElement => {
  return (
    <SelectWrapper $labelColor={labelColor}>
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
