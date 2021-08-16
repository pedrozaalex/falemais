import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-extended";

import { SelectInput, SelectInputProps } from "../../components/SelectInput";

describe("<ColorModeSwitcher />", () => {
  const enabledProps: SelectInputProps = {
    title: "test",
    caption: "test",
    options: [1, 2, 3],
    isDisabled: false,
    onChange: (_p) => {
      return;
    },
  };

  const component = render(<SelectInput {...enabledProps} />);

  it("renders the ColorModeSwitcher component", () =>
    expect(component).toBeTruthy());
});
