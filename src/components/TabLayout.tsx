import { TabPanel, VStack, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function TabLayout() {
  return (
    <TabPanel>
      <Text align="center">Quanto você pagaria:</Text>
      <br />
      <VStack fontSize={18}>
        <Text>
          Sem FaleMais: R$ {totalCosts.noFM.toFixed(2).replace(".", ",")}
        </Text>
        <Box>
          <Text
            display="inline"
            fontWeight="extrabold"
            bgClip="text"
            bgImg="title-background.webp"
            backgroundSize="200% 200%"
            animation={`${animateColor} 10s linear infinite`}
          >
            Com FaleMais30:{" "}
          </Text>
          R$ {totalCosts.fm30cost.toFixed(2).replace(".", ",")}
        </Box>
      </VStack>
    </TabPanel>
  );
}
