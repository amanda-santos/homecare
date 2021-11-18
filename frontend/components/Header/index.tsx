import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HeaderWrapper, Logo } from "./styles";

type Props = {};

export const Header = ({}: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HeaderWrapper>
      <Link href="/">
        <a
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Image
            src={
              isHovering
                ? `/images/arrow-left-hover.svg`
                : `/images/arrow-left.svg`
            }
            alt="Go back"
            width="48"
            height="96"
          />
        </a>
      </Link>
      <Logo>homecare</Logo>
    </HeaderWrapper>
  );
};
