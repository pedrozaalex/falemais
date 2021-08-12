import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Switch,
  Box,
  BoxProps,
  Flex,
} from "@chakra-ui/react";
import React from "react";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    // <Flex>
    //   <Switch
    //     isChecked={useColorModeValue(true, false)}
    //     colorScheme="teal"
    //   />
    //   <SwitchIcon
    //     onClick={toggleColorMode}
    //     aria-label={`Switch to ${text} mode`}
    //     size="sm"
    //     color="current"
    //     margin="auto"
    //     ml={2}
    //     {...props}
    //   />
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
    // </Flex>
  );
};
