import React from "react";
import { render } from "@testing-library/react";

import DemoOne from "../index";

describe("Demo #1", () => {
  it("should render the text 'Hello, world!'", () => {
    const { getByText } = render(<DemoOne />);

    expect(getByText("Hello, world!")).toBeTruthy();

    // The same as
    getByText("Hello, world!");
  });
});
