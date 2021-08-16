import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-extended";

import {
  SimulationContent,
  SimulationContentProps,
} from "../../components/SimulationContent";

describe("<ColorModeSwitcher />", () => {
  const enabledProps: SimulationContentProps = {
    normalCost: 123,
    planCost: 321,
    planNumber: 42,
  };

  const component = render(<SimulationContent {...enabledProps} />);

  it("renders the ColorModeSwitcher component", () =>
    expect(component).toBeTruthy());

  it("should display normal call cost", () => {
    const normal = component.findAllByText(/R$ 123,00/);
    expect(normal).toBeTruthy();
  });
});
