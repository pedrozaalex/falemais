import React from "react";
import { render, screen } from "../../helpers/testHelper";
import "@testing-library/jest-dom";
import "jest-extended";

import { SliderInput, SliderInputProps } from "../../components/SliderInput";

describe("<SliderInput />", () => {
  const testProps: SliderInputProps = {
    title: "test title",
    caption: "test caption",
    onChangeEnd: jest.fn,
  };

  it("renders the SliderInput component", () => {
    const component = render(<SliderInput {...testProps} />);
    expect(component).toBeTruthy();
  });

  it("displays the provided title and caption", () => {
    render(<SliderInput {...testProps} />);
    expect(screen.getByText(testProps.title)).toBeInTheDocument();
    expect(screen.getByText(testProps.caption)).toBeInTheDocument();
  });
});
