import React, { ReactElement } from "react";

import { MainTitleWrapper, Subtitle } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactElement;
};

export const MainTitle = ({ title, subtitle, children }: Props) => {
  return (
    <MainTitleWrapper>
      <h3>{title}</h3>
      <Subtitle>{subtitle}</Subtitle>
      <div>{children}</div>
    </MainTitleWrapper>
  );
};
