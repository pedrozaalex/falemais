import React, { useRef, ChangeEventHandler } from "react";
import {
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormHelperText,
} from "@chakra-ui/react";
import throttled from "lodash/throttle";

type SliderInputProps = {
  onChange?: (val: number) => void;
  onChangeEnd: (val: number) => void;
  title: string;
  caption: string;
  isDisabled?: boolean;
};

export function SliderInput({
  onChange,
  onChangeEnd,
  title,
  caption,
  isDisabled,
}: SliderInputProps) {
  // for fast updating of the "x minuto" labels above the slider
  const durationLabelRef = useRef(null);

  function handleDurationChangeRef(val: number) {
    if (onChange && typeof onChange === "function") {
      onChange(val);
    }

    if (durationLabelRef?.current?.innerText)
      durationLabelRef.current.innerText = val;
  }

  return (
    <FormControl width="fit-content" padding={2} isDisabled={isDisabled}>
      <FormLabel>{title}</FormLabel>

      <FormLabel width="100%" fontSize={16} textAlign="center">
        <div ref={durationLabelRef} style={{ display: "inline" }}>
          0
        </div>{" "}
        minutos
      </FormLabel>
      <Slider
        aria-label="slider-ex-1"
        // throttled here prevents the onChange method from firing >60 times/sec
        onChange={throttled(handleDurationChangeRef, 17)}
        onChangeEnd={onChangeEnd}
        min={0}
        max={300}
        defaultValue={0}
        colorScheme="teal"
        isDisabled={isDisabled}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb shadow="dark-lg" />
      </Slider>

      <FormHelperText>{caption}</FormHelperText>
    </FormControl>
  );
}
