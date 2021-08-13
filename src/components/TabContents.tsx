import React, { useRef, useEffect } from "react";
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

type Props = BoxProps & {
  scrollToRef: React.MutableRefObject<any>;
  isOpen: boolean;
};

const TabContents = ({ scrollToRef, isOpen, ...restOfProps }: Props) => {
  const animateColor = keyframes`
    0%{background-position:0% 0%}
    100%{background-position:200% 200%}
  `;

  const Data = () => (
    <VStack fontSize={18}>
      <Text>Sem FaleMais: R$ 60,00</Text>
      <Box>
        <Text
          display="inline"
          fontWeight="extrabold"
          bgClip="text"
          bgImg="title-background.webp"
          backgroundSize="200% 200%"
          animation={`${animateColor} 10s linear infinite`}
        >
          Com FaleMais:{" "}
        </Text>
        R$ 10,00
      </Box>
    </VStack>
  );

  return (
    <ScaleFade initialScale={0.9} in={isOpen}>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius={8}
        boxSizing="content-box"
        mt={2}
        pt={2}
        px={4}
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
          <Heading>Simulação</Heading>
          <TabPanels textAlign="left">
            <TabPanel>
              <Text>Quanto você pagaria:</Text>
              <br />
              <Data />
            </TabPanel>

            <TabPanel>
              <Text align="center">Quanto você pagaria:</Text>
              <br />
              <Data />
            </TabPanel>

            <TabPanel>
              <Text align="right">Quanto você pagaria:</Text>
              <br />
              <Data />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ScaleFade>
  );
};

export default React.memo(TabContents);
