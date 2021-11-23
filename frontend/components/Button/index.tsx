import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { ButtonWrapper } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: "primary" | "secondary" | "green";
  icon: "arrow-right" | "whatsapp";
}

export const Button = ({ label, color, icon }: Props) => {
  return (
    <ButtonWrapper $color={color}>
      {icon === "whatsapp" && (
        <span>
          <Image
            src="/images/whatsapp.svg"
            alt={label}
            height="24"
            width="24"
          />
        </span>
      )}
      {label}
      {icon === "arrow-right" && (
        <span>
          <Image
            src="/images/chevron-right.svg"
            alt={label}
            height="32"
            width="32"
          />
        </span>
      )}
    </ButtonWrapper>
  );
};
