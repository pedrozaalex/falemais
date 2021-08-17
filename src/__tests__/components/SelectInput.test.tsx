import React from "react";
import { render, screen } from "../../helpers/testHelper";
import "@testing-library/jest-dom";
import "jest-extended";

import { SelectInput, SelectInputProps } from "../../components/SelectInput";

describe("<SelectInput />", () => {
  const title = "testTitle";
  const caption = "testCaption";

  const enabledProps: SelectInputProps = {
    title: title,
    caption: caption,
    options: [1, 2, 3],
    isDisabled: false,
    onChange: (_p) => {
      return;
    },
  };

  const component = render(<SelectInput {...enabledProps} />);

  it("renders the SelectInput component", () => expect(component).toBeTruthy());

  it("displays the provided title and caption", () => {
    render(<SelectInput {...enabledProps} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(caption)).toBeInTheDocument();
  });
});
