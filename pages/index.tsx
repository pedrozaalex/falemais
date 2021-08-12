import {
  Box,
  Select,
  FormLabel,
  FormControl,
  FormHelperText,
  // Slider,
  // SliderTrack,
  // SliderFilledTrack,
  // SliderThumb,
  Flex,
  VStack,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
  // Text,
  // HStack,
  // keyframes,
  useColorModeValue,
  // SelectField,
  ScaleFade,
  useDisclosure,
  // Slider,
} from "@chakra-ui/react";
import { Chakra } from "../Chakra";
import { Layout } from "../components/Layout";
import React, { useEffect, useRef, useState } from "react";
import { FaleMaisTitle } from "../components/FaleMaisTitle";
import { TabContents } from "../components/TabContents";
import { DurationInput } from "../components/DurationInput";
import Slider, { SliderTooltip, Handle, HandleProps } from "rc-slider";
import { SliderContainer } from "../components/SliderContainer";
import "rc-slider/assets/index.css";

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => {
  const [callerDDD, setCallerDDD] = useState("");
  const [receiverDDD, setReceiverDDD] = useState("");
  const [duration, setDuration] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const [showSimulationTab, setShowSimulationTab] = useState(false);
  const scrollIntoRef = useRef(null);

  function handleDurationChangeEnd(val: React.SetStateAction<number>) {
    if (!showSimulationTab) setShowSimulationTab(true);
    if (!val) setShowSimulationTab(false);
    setDuration(val);
  }

  function shouldSimulationToggle() {
    if (!isOpen && showSimulationTab && callerDDD && receiverDDD && duration) {
      onToggle();

      if (scrollIntoRef?.current) scrollIntoRef.current.scrollIntoView(false);
    }
  }

  function shouldSimulationToggleOnChangeEnd() {
    if (isOpen && (!callerDDD || !receiverDDD || !duration)) {
      onToggle();
    }
  }

  useEffect(shouldSimulationToggle, [
    duration,
    callerDDD,
    receiverDDD,
    showSimulationTab,
  ]);

  useEffect(shouldSimulationToggleOnChangeEnd, [showSimulationTab]);

  function handle(props) {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  }

  return (
    <Chakra cookies={cookies}>
      <Layout>
        <VStack p={1} spacing={8} m="auto" fontSize="xl">
          <FaleMaisTitle />

          <Flex
            width="100%"
            wrap="wrap"
            justifyContent="space-evenly"
            alignItems="flex-end"
            alignContent="center"
          >
            <FormControl width="fit-content" padding={2}>
              <FormLabel>1. Seu DDD</FormLabel>
              <Select
                variant="filled"
                placeholder=" "
                onChange={(e) => setCallerDDD(e.target.value)}
                w="fit-content"
                m="auto"
              >
                <option value={11}>11</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
              </Select>
              <FormHelperText>O DDD de onde você mora</FormHelperText>
            </FormControl>

            <FormControl
              width="fit-content"
              padding={2}
              isDisabled={!callerDDD}
            >
              <FormLabel>2. DDD do recebedor</FormLabel>
              <Select
                variant="filled"
                placeholder=" "
                onChange={(e) => setReceiverDDD(e.target.value)}
                w="fit-content"
                m="auto"
              >
                <option value="11">11</option>
                <option value="16">16</option>
                <option value="17">17</option>
              </Select>
              <FormHelperText>O DDD para onde você vai ligar</FormHelperText>
            </FormControl>

            <FormControl
              width="fit-content"
              padding={2}
              isDisabled={!receiverDDD}
            >
              <FormLabel>3. Duração da chamada: </FormLabel>

              {/* <Slider
                aria-label="slider-ex-1"
                value={duration}
                onChange={setDuration}
                onChangeEnd={(val) => {
                  if (!showSimulationTab) setShowSimulationTab(true);
                  if (!val) setShowSimulationTab(false);
                }}
                min={0}
                max={100}
                step={10}
                colorScheme="teal"
                isDisabled={!receiverDDD}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb shadow="dark-lg" />
              </Slider> */}
              {/* <DurationInput /> */}
              <SliderContainer>
                <Slider
                  // onChange={setDuration}
                  handle={handle}
                  onAfterChange={handleDurationChangeEnd}
                  disabled={!receiverDDD}
                  marks={{ 0: 0, 100: 100 }}
                />
              </SliderContainer>

              <FormLabel width="100%" fontSize={16} textAlign="center">
                {duration} minuto{duration !== 1 ? "s" : ""}
              </FormLabel>
              <FormHelperText>
                Quanto tempo você vai ficar de prosa
              </FormHelperText>
            </FormControl>
          </Flex>

          <Box maxW="100%">
            <ScaleFade initialScale={0.9} in={isOpen}>
              <TabContents scrollref={scrollIntoRef} />
            </ScaleFade>
          </Box>
        </VStack>
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
export { getServerSideProps } from "../Chakra";
