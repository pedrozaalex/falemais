import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Text,
  Flex,
  HStack,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NextChakraLink } from "./NextChakraLink";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children }: Props) => (
  <div className="max">
    <Head>
      <title>FaleMais</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Container maxWidth="1200px">
      <header>
        <Box
          as="nav"
          position="fixed"
          top="0"
          left="0"
          w="100%"
          pl={8}
          pr={4}
          py={4}
          lineHeight="initial"
          bg={useColorModeValue("gray.100", "gray.900")}
          shadow="md"
          zIndex="sticky"
        >
          <Flex alignItems="center">
            <NextChakraLink href="/" fontWeight="bold" fontSize="2rem">
              <HStack align="center">
                <Text mr={1} color={useColorModeValue("gray.600", "white")}>
                  VxTel
                </Text>
                <Image
                  src="/logo.webp"
                  layout="intrinsic"
                  width="25rem"
                  height="25rem"
                />
              </HStack>
            </NextChakraLink>
            <Spacer />
            <ColorModeSwitcher />
          </Flex>
        </Box>
      </header>
      <Box h="75px" w="100%" />
      {children}
    </Container>
  </div>
);
