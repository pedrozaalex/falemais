import { TimeIcon } from "@chakra-ui/icons";
import { VStack, Box, Text, keyframes } from "@chakra-ui/react";
import React from "react";

type propType = {
  planNumber: number;
  normalCost: number;
  planCost: number;
  isPicking: boolean;
};

export function SimulationContent({
  planNumber,
  normalCost,
  planCost,
  isPicking,
}: propType) {
  const animateColor = keyframes`
    0%{background-position:0% 0%}
    100%{background-position:200% 200%}
  `;

  const FallbackBar = () => <TimeIcon />;

  const normalPrice = isPicking ? (
    <FallbackBar />
  ) : (
    `R$ ${normalCost?.toFixed(2).replace(".", ",")}`
  );

  return (
    <>
      <Text align="center">Quanto você pagaria:</Text>
      <br />
      <VStack fontSize={18} textAlign="left">
        <Text>Sem FaleMais: {normalPrice}</Text>
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
          {isPicking ? (
            <FallbackBar />
          ) : (
            `R$ ${planCost?.toFixed(2).replace(".", ",")}`
          )}
        </Box>
      </VStack>
    </>
  );
}
