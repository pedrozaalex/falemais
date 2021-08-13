import {
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
} from "@chakra-ui/react";
import React, { ChangeEventHandler } from "react";

type Prop = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
  caption: string;
  options: number[];
  isDisabled?: boolean;
};

export default function SelectInput({
  onChange,
  title,
  caption,
  options,
  isDisabled,
}: Prop) {
  return (
    <FormControl width="fit-content" padding={2} isDisabled={isDisabled}>
      <FormLabel>{title}</FormLabel>

      <Select
        variant="filled"
        isDisabled={isDisabled}
        placeholder=" "
        onChange={onChange}
        w="fit-content"
        m="auto"
      >
        {options.map((opt, idx) => (
          <option value={opt} key={idx}>
            {opt}
          </option>
        ))}
      </Select>
      <FormHelperText>{caption}</FormHelperText>
    </FormControl>
  );
}
