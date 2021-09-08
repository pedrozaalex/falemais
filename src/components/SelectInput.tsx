import {
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
} from "@chakra-ui/react";
import React, { ChangeEventHandler } from "react";

export type SelectInputProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
  caption: string;
  options: number[];
  isDisabled?: boolean;
};

export function SelectInput({
  onChange,
  title,
  caption,
  options,
  isDisabled,
}: SelectInputProps) {
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
        {options?.map((opt, idx) => (
          <option value={opt} key={idx} label={opt.toString()} />
        )) ?? "Nenhuma Opção Encontrada"}
      </Select>
      <FormHelperText>{caption}</FormHelperText>
    </FormControl>
  );
}
