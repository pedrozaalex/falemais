import React from "react";
import { render } from "../../helpers/testHelper";
import "@testing-library/jest-dom";
import "jest-extended";

import {
  SimulationContent,
  SimulationContentProps,
} from "../../components/SimulationContent";

describe("<SimulationContent />", () => {
  const enabledProps: SimulationContentProps = {
    normalCost: 123,
    planCost: 321,
    planNumber: 42,
  };

  it("renders the SimulationContent component", () => {
    const component = render(<SimulationContent {...enabledProps} />);
    expect(component).toBeTruthy();
  });
});
