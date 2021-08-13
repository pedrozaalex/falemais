import React from "react";
import { HeadingProps, Heading, keyframes, background } from "@chakra-ui/react";
import Script from "next/experimental-script";
import { useRef } from "react";
import { useState } from "react";

function Logo(props: HeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <Heading
        fontSize={"10vmin"}
        bgGradient="linear(45deg, #3bcec4, #1b9288)"
        bgClip="text"
        ref={headingRef}
        {...props}
      >
        FaleMais
      </Heading>
    </>
  );
}

export default React.memo(Logo);
