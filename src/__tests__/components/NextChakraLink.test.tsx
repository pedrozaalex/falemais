import React from "react";
import { render } from "../../helpers/testHelper";
import "@testing-library/jest-dom";
import "jest-extended";

import {
  NextChakraLink,
  NextChakraLinkProps,
} from "../../components/NextChakraLink";

describe("<NextChakraLink />", () => {
  it("renders the NextChakraLink component", () => {
    const enabledProps: NextChakraLinkProps = {
      href: "test.com",
    };

    const component = render(<NextChakraLink {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});
