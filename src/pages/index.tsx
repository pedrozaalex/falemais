import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Box, VStack, useDisclosure } from "@chakra-ui/react";
import { Chakra } from "../Chakra";
import { Layout } from "../components/Layout";
import { FaleMaisTitle } from "../components/FaleMaisTitle";
import InputWrapContainer from "../components/InputWrapContainer";
import SelectInput from "../components/SelectInput";
import SliderInput from "../components/SliderInput";
import useRegions from "../hooks/useRegions";

const SimulationWindow = dynamic(import("../components/SimulationWindow"));

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => {
  const [callerDDD, setCallerDDD] = useState("");
  const [receiverDDD, setReceiverDDD] = useState("");
  const [duration, setDuration] = useState(0);

  // controls the state of the price simulation tab
  const { isOpen: isSimulationOpen, onToggle: toggleSimulation } =
    useDisclosure();

  // for scrolling the simulation tab into view when it opens
  const simulationTabRef = useRef(null);
  function showSimulation() {
    toggleSimulation();
    if (simulationTabRef?.current)
      simulationTabRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // whenever the inputs change, check them and open the simulation tab
  // if they're all present
  useEffect(() => {
    if (callerDDD && receiverDDD && duration) {
      if (!isSimulationOpen) showSimulation();
    } else {
      if (isSimulationOpen) toggleSimulation();
    }
  }, [duration, callerDDD, receiverDDD]);

  // populates the "Caller DDD" select input
  const regions = useRegions();

  return (
    <Chakra cookies={cookies}>
      <Layout>
        <VStack p={1} spacing={8} m="auto" fontSize="xl">
          <FaleMaisTitle />

          <InputWrapContainer>
            <SelectInput
              title="1. Seu DDD"
              caption="O DDD de onde você mora"
              options={regions?.map((r) => r.ddd)}
              onChange={(e) => setCallerDDD(e.target.value)}
            />

            <SelectInput
              title="2. DDD do recebedor"
              caption="O DDD para onde você vai ligar"
              options={[11, 16, 17, 18]}
              onChange={(e) => setReceiverDDD(e.target.value)}
              isDisabled={!callerDDD}
            />

            <SliderInput
              caption="Quanto tempo você vai ficar de prosa"
              title="3. Duração da chamada: "
              onChangeEnd={setDuration}
              isDisabled={!receiverDDD}
            />
          </InputWrapContainer>

          <SimulationWindow
            scrollToRef={simulationTabRef}
            isOpen={isSimulationOpen}
          />

          {/* TODO: criar e inserir aqui o Footer */}
          <Box h={10} />
        </VStack>
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
export { getServerSideProps } from "../Chakra";
