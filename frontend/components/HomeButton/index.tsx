import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./styles";

type Props = {
  title: string;
  icon: "toolbox" | "heart";
  color: "primary" | "secondary";
  href: "/caregivers" | "/caregivers/new";
};

export const HomeButton = ({ title, icon, color, href }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link href={href} passHref>
      <Button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        $color={color}
      >
        <span>
          <Image
            src={
              isHovering
                ? `/images/${icon}-${color}.svg`
                : `/images/${icon}.svg`
            }
            alt={title}
            height="48"
            min-height="48"
            width="48"
            min-width="48"
          />
        </span>

        <p>{title}</p>
      </Button>
    </Link>
  );
};
