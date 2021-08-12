import { Box, useColorModeValue } from "@chakra-ui/react";
import "rc-slider/assets/index.css";

export const SliderContainer = ({ children }) => {
  const styling = {
    ".rc-slider-disabled": {
      bg: `${useColorModeValue("white", "gray.800")}`,
    },
  };

  return (
    <Box className="durBox" sx={styling}>
      {children}
    </Box>
  );
};
