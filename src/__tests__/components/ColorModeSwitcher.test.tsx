import React from "react";
import { render } from "../../helpers/testHelper";
import "@testing-library/jest-dom";
import "jest-extended";

import {
  ColorModeSwitcher,
  ColorModeSwitcherProps,
} from "../../components/ColorModeSwitcher";

test("Sample test", () => {
  expect(true).toBeTruthy();
});

describe("<ColorModeSwitcher />", () => {
  it("renders the ColorModeSwitcher component", () => {
    const enabledProps: ColorModeSwitcherProps = {};

    const component = render(<ColorModeSwitcher {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});
