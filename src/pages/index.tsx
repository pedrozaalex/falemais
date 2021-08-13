import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Select,
  FormLabel,
  FormControl,
  FormHelperText,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Chakra } from "../Chakra";
import { Layout } from "../components/Layout";
import { FaleMaisTitle } from "../components/FaleMaisTitle";
import throttled from "lodash/throttle";

const TabContents = dynamic(import("../components/TabContents"));

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => {
  const [callerDDD, setCallerDDD] = useState("");
  const [receiverDDD, setReceiverDDD] = useState("");
  const [duration, setDuration] = useState(0);
  const { isOpen: isSimulationOpen, onToggle: toggleSimulation } =
    useDisclosure();

  const durationLabelRef = useRef(null);
  const scrollTo = useRef(null);

  function handleDurationChangeRef(val: number) {
    if (durationLabelRef?.current?.innerText)
      durationLabelRef.current.innerText = val;
  }

  function handleDurationChangeEnd(val: React.SetStateAction<number>) {
    console.log(
      `isOpen: ${isSimulationOpen}\ncallerDDD: ${callerDDD}\nreceiverDDD: ${receiverDDD}\nduration: ${duration}\nval: ${val}`
    );

    setDuration(val);
  }

  function showSimulation() {
    toggleSimulation();
    if (scrollTo?.current)
      scrollTo.current.scrollIntoView({ behavior: "smooth" });
  }

  function shouldSimulationToggle() {
    if (callerDDD && receiverDDD && duration) {
      if (!isSimulationOpen) showSimulation();
    } else {
      if (isSimulationOpen) toggleSimulation();
    }
  }

  useEffect(shouldSimulationToggle, [duration, callerDDD, receiverDDD]);

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

              <FormLabel width="100%" fontSize={16} textAlign="center">
                <div ref={durationLabelRef} style={{ display: "inline" }}>
                  {duration}
                </div>{" "}
                minuto
                {duration !== 1 ? "s" : ""}
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                // throttled here prevents the onChange method from firing >60 times/sec
                onChange={throttled(handleDurationChangeRef, 17)}
                onChangeEnd={handleDurationChangeEnd}
                min={0}
                max={100}
                defaultValue={0}
                colorScheme="teal"
                isDisabled={!receiverDDD}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb shadow="dark-lg" />
              </Slider>

              <FormHelperText>
                Quanto tempo você vai ficar de prosa
              </FormHelperText>
            </FormControl>
          </Flex>

          <TabContents scrollTo={scrollTo} isOpen={isSimulationOpen} />

          <Box h={10} />
        </VStack>
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
export { getServerSideProps } from "../Chakra";
