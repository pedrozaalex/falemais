import React from "react";
import {
  Box,
  TabPanels,
  TabPanel,
  Text,
  keyframes,
  useColorModeValue,
  Heading,
  BoxProps,
  Tab,
  TabList,
  Tabs,
  VStack,
  ScaleFade,
} from "@chakra-ui/react";
import { CostsPerPlan } from "../interfaces/CostsPerPlan";
import { SimulationContent } from "./SimulationContent";

type Props = BoxProps & {
  scrollToRef: React.MutableRefObject<any>;
  isOpen: boolean;
  totalCosts: CostsPerPlan | null;
};

const component = ({
  scrollToRef,
  isOpen,
  totalCosts,
  ...restOfProps
}: Props) => {
  const animateColor = keyframes`
    0%{background-position:0% 0%}
    100%{background-position:200% 200%}
  `;

  return (
    <>
      <Heading>Simulação:</Heading>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          bg={useColorModeValue("gray.100", "gray.900")}
          borderRadius={8}
          boxSizing="content-box"
          pt={2}
          px={2}
          pb={4}
          maxWidth="100%"
          shadow="xl"
          ref={scrollToRef}
          {...restOfProps}
        >
          {totalCosts ? (
            <Tabs variant="solid-rounded" colorScheme="teal" align="center">
              <TabList>
                <Tab>FaleMais 30</Tab>
                <Tab>FaleMais 60</Tab>
                <Tab>FaleMais 120</Tab>
              </TabList>
              <TabPanels textAlign="left">
                <SimulationContent />

                <TabPanel>
                  <Text align="center">Quanto você pagaria:</Text>
                  <br />
                  <VStack fontSize={18}>
                    <Text>
                      Sem FaleMais: R${" "}
                      {totalCosts.noFM.toFixed(2).replace(".", ",")}
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
                        Com FaleMais60:{" "}
                      </Text>
                      R$ {totalCosts.fm60cost.toFixed(2).replace(".", ",")}
                    </Box>
                  </VStack>
                </TabPanel>

                <TabPanel>
                  <Text align="center">Quanto você pagaria:</Text>
                  <br />
                  <VStack fontSize={18}>
                    <Text>
                      Sem FaleMais: R${" "}
                      {totalCosts.noFM.toFixed(2).replace(".", ",")}
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
                        Com FaleMais120:{" "}
                      </Text>
                      R$ {totalCosts.fm120cost.toFixed(2).replace(".", ",")}
                    </Box>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            "Houve um erro na hora fazer o cálculo do valor da sua ligação, entre em contato com nosso suporte"
          )}
        </Box>
      </ScaleFade>
    </>
  );
};

export default React.memo(component);
