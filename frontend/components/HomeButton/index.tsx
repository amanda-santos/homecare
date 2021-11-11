import React from "react";
import Image from "next/image";
import { Button } from "./styles";

type Props = {
  title: string;
  icon: "toolbox" | "heart";
  color: "primary" | "secondary";
};

export const HomeButton = ({ title, icon, color }: Props) => {
  return (
    <Button $color={color}>
      <Image src={`/images/${icon}.svg`} alt={title} height="40" width="40" />
      {title}
    </Button>
  );
};
