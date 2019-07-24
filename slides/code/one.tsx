import { render } from "@testing-library/react";

const Component = () => <div>Hello, world!</div>;

it("should render the text 'Hello, world!'", () => {
  const { getByText } = render(<Component />);

  getByText("Hello, world!");
});
