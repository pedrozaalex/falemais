import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./FaleMaisAnimatedLogo";

export function FaleMaisTitle() {
  return (
    <Box textAlign="center">
      <Logo pointerEvents="none" />
      <Text>onde você fala mais pagando menos!</Text>
    </Box>
  );
}
