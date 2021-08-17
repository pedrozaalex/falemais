import { render, screen } from "@testing-library/react";

import { Layout } from "components/Layout";

describe("<Layout />", () => {
  it("renders the Layout component", () => {
    const component = render(<Layout />);

    expect(component).toBeTruthy();
  });

  it("should render with children", () => {
    render(
      <Layout>
        <div data-testid="Mock Children" />
      </Layout>
    );

    expect(screen.getByTestId("Mock Children")).toBeInTheDocument();
  });
});
