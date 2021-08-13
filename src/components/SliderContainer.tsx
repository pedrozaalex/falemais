import { Box, useColorModeValue } from "@chakra-ui/react";
import "rc-slider/assets/index.css";

export const SliderContainer = ({ children, ...restofProps }) => {
  const styling = {
    ".rc-slider-disabled": {
      bg: `${useColorModeValue("white", "gray.800")}`,
    },
  };

  return (
    <Box sx={styling} {...restofProps}>
      {children}
    </Box>
  );
};
