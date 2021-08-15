import { Flex } from "@chakra-ui/layout";

type Props = {
  children: any;
};

export function InputWrapContainer({ children }) {
  return (
    <Flex
      width="100%"
      wrap="wrap"
      justifyContent="space-evenly"
      alignItems="flex-end"
      alignContent="center"
    >
      {children}
    </Flex>
  );
}
