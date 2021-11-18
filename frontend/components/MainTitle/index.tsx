import React, { useState } from "react";
import { Select } from "../Select";

import { MainTitleWrapper } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  showFilters?: boolean;
};

export const MainTitle = ({ title, subtitle, showFilters = false }: Props) => {
  return (
    <MainTitleWrapper>
      <h3>{title}</h3>
      <span>{subtitle}</span>

      <Select
        name="blba"
        label="vavavav"
        options={[{ value: "bababa", label: "bebeb" }]}
      />
    </MainTitleWrapper>
  );
};
