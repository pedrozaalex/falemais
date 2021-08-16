import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-extended";

import {
  NextChakraLink,
  NextChakraLinkProps,
} from "../../components/NextChakraLink";

describe("<ColorModeSwitcher />", () => {
  it("renders the ColorModeSwitcher component", () => {
    const enabledProps: NextChakraLinkProps = {
      href: "test.com",
    };

    const component = render(<NextChakraLink {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});
