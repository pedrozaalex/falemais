import React, { useRef } from "react";
import { HeadingProps, Heading } from "@chakra-ui/react";

function Logo(props: HeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <Heading
        fontSize={"10vmin"}
        mt={8}
        bgGradient="linear(45deg, #3bcec4, #1b9288)"
        bgClip="text"
        ref={headingRef}
        pointerEvents="none"
        {...props}
      >
        FaleMais
      </Heading>
    </>
  );
}

export const FaleMaisAnimatedLogo = React.memo(Logo);
