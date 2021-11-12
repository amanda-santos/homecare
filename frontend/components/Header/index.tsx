import React, { useState } from "react";
import { Logo } from "..";
// import Image from "next/image";
// import Link from "next/link";

import { Header as HeaderWrapper } from "./Header";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  );
};
