import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import React from "react";

export type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="solid"
      bg={bg}
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      shadow="md"
      {...props}
    />
    // </Flex>
  );
};
