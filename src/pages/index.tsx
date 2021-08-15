import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Box, VStack, useDisclosure } from "@chakra-ui/react";
import { Chakra } from "../Chakra";
import { Layout } from "../components/Layout";
import { FaleMaisTitle } from "../components/FaleMaisTitle";
import { InputWrapContainer } from "../components/InputWrapContainer";
import { SelectInput } from "../components/SelectInput";
import { SliderInput } from "../components/SliderInput";
import { useRegions } from "../hooks/useRegions";
import { useCallSimulator } from "../hooks/useCallSimulator";

const SimulationWindow = dynamic(import("../components/SimulationWindow"));

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => {
  const [callerDDD, setCallerDDD] = useState<number | undefined>(undefined);
  const [receiverDDD, setReceiverDDD] = useState<number | undefined>(undefined);
  const [callDuration, setCallDuration] = useState<number>(0);

  const { regions, callableOptions } = useRegions(callerDDD);
  const totalCosts = useCallSimulator(
    callerDDD,
    receiverDDD,
    callDuration,
    regions
  );

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
  // if they're all present or close it otherwise
  useEffect(() => {
    if (callerDDD && receiverDDD && callDuration >= 0) {
      // if all inputs are valid AND the simulation is closed, open the window
      if (!isSimulationOpen) showSimulation();
    } else {
      // if any of the inputs are invalid AND the simulation window is open, close it
      if (isSimulationOpen) toggleSimulation();
    }
  }, [callDuration, callerDDD, receiverDDD]);

  return (
    <Chakra cookies={cookies}>
      <Layout>
        <VStack p={1} spacing={8} m="auto" fontSize="xl">
          <FaleMaisTitle />

          <InputWrapContainer>
            <SelectInput
              title="1. Seu DDD"
              caption="O DDD de onde você mora"
              options={regions.map((r) => r.ddd)}
              onChange={(e) => setCallerDDD(parseInt(e.target.value))}
            />

            <SelectInput
              title="2. DDD do recebedor"
              caption="O DDD para onde você vai ligar"
              options={callableOptions}
              onChange={(e) => setReceiverDDD(parseInt(e.target.value))}
              isDisabled={!callerDDD}
            />

            <SliderInput
              caption="Quanto tempo você vai ficar de prosa"
              title="3. Duração da chamada: "
              onChangeEnd={setCallDuration}
              isDisabled={!receiverDDD}
            />
          </InputWrapContainer>

          <SimulationWindow
            scrollToRef={simulationTabRef}
            isOpen={isSimulationOpen}
            totalCosts={totalCosts}
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
