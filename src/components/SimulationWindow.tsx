import React from "react";
import {
  Box,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Heading,
  BoxProps,
  Tab,
  TabList,
  Tabs,
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
          <Tabs variant="solid-rounded" colorScheme="teal" align="center">
            <TabList>
              <Tab>FaleMais 30</Tab>
              <Tab>FaleMais 60</Tab>
              <Tab>FaleMais 120</Tab>
            </TabList>
            <TabPanels textAlign="left">
              <TabPanel>
                <SimulationContent
                  planNumber={30}
                  planCost={totalCosts?.fm30cost}
                  normalCost={totalCosts?.noFM}
                />
              </TabPanel>
              <TabPanel>
                <SimulationContent
                  planNumber={60}
                  planCost={totalCosts?.fm60cost}
                  normalCost={totalCosts?.noFM}
                />
              </TabPanel>
              <TabPanel>
                <SimulationContent
                  planNumber={120}
                  planCost={totalCosts?.fm120cost}
                  normalCost={totalCosts?.noFM}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ScaleFade>
    </>
  );
};

export default React.memo(component);
