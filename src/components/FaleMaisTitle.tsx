import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaleMaisAnimatedLogo } from "./FaleMaisAnimatedLogo";

export function FaleMaisTitle() {
  return (
    <Box textAlign="center">
      <FaleMaisAnimatedLogo />
      <Text>onde você fala mais pagando menos!</Text>
    </Box>
  );
}
