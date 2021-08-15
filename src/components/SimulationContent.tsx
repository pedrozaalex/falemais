import { TabPanel, VStack, Box, Text, keyframes } from "@chakra-ui/react";
import React from "react";

export function SimulationContent(planNumber: number, totalCost: number) {
  const animateColor = keyframes`
    0%{background-position:0% 0%}
    100%{background-position:200% 200%}
  `;

  return (
    <TabPanel>
      <Text align="center">Quanto você pagaria:</Text>
      <br />
      <VStack fontSize={18}>
        <Text>Sem FaleMais: R$ {totalCost.toFixed(2).replace(".", ",")}</Text>
        <Box>
          <Text
            display="inline"
            fontWeight="extrabold"
            bgClip="text"
            bgImg="title-background.webp"
            backgroundSize="200% 200%"
            animation={`${animateColor} 10s linear infinite`}
          >
            Com FaleMais{planNumber}:{" "}
          </Text>
          R$ {totalCost.toFixed(2).replace(".", ",")}
        </Box>
      </VStack>
    </TabPanel>
  );
}
