import React from "react";
import { render } from "@testing-library/react";

import DemoTwo from "../index";

describe("Demo #2", () => {
  it("should render an input with a 'Location' placeholder", () => {
    const { getByPlaceholderText } = render(<DemoTwo />);

    getByPlaceholderText("Location");
  });
});
