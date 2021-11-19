import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { ButtonWrapper } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label }: Props) => {
  return (
    <ButtonWrapper>
      {label}
      <span>
        <Image
          src="/images/chevron-right.svg"
          alt={label}
          height="32"
          width="32"
        />
      </span>
    </ButtonWrapper>
  );
};
