import {
  Box,
  useColorModeValue,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const DurationInput = () => {
  const [value, setValue] = useState(0);
  const [isDraggin, setIsDraggin] = useState(false);

  return "";
  // <Slider
  //   aria-label="slider-ex-1"
  //   // value={duration}
  //   // onChange={setDuration}
  //   // onChangeEnd={(val) => {
  //   //   if (!showSimulationTab) setShowSimulationTab(true);
  //   //   if (!val) setShowSimulationTab(false);
  //   // }}
  //   min={0}
  //   max={100}
  //   step={10}
  //   colorScheme="teal"
  //   // isDisabled={!receiverDDD}
  //   onMouseDown={() => setIsDraggin(true)}
  //   onMouseUp={() => setIsDraggin(false)}
  // >
  //   <SliderTrack>
  //     <SliderFilledTrack />
  //   </SliderTrack>
  //   <Tooltip
  //     label="Hey, I'm here!"
  //     aria-label="A tooltip"
  //     placement="top"
  //     hasArrow
  //     closeDelay={500}
  //   >
  //     <SliderThumb shadow="dark-lg" />
  //   </Tooltip>
  // </Slider>
};
