import React, { TextareaHTMLAttributes, ReactElement } from "react";
import { TextAreaWrapper } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  labelColor?: "white" | "text-light";
}

export const TextArea = ({
  name,
  label,
  labelColor = "text-light",
  ...rest
}: Props): ReactElement => {
  return (
    <TextAreaWrapper $labelColor={labelColor}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextAreaWrapper>
  );
};
