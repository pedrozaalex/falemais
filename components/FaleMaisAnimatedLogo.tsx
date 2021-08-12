import { HeadingProps, Heading, keyframes } from "@chakra-ui/react";
import React from "react";

export const Logo = (props: HeadingProps) => {
  const animateColor = keyframes`
    0%{background-position:50% 50%}
    100%{background-position:250% 250%}
  `;

  return (
    <>
      <Heading
        fontSize={"10vmin"}
        bgImg="title-background.webp"
        backgroundSize="200% 200%"
        bgClip="text"
        animation={`${animateColor} 10s linear infinite`}
        {...props}
      >
        FaleMais
      </Heading>
    </>
  );
};
