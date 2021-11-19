import React from "react";
import { PatientWrapper } from "./styles";

type Props = {
  title: string;
  emoji: string;
};

export const Patient = ({ title, emoji }: Props) => {
  return (
    <PatientWrapper>
      {emoji} {title}
    </PatientWrapper>
  );
};
