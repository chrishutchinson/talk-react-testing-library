import React from "react";
import { render } from "@testing-library/react";

import DemoThree from "../index";

describe("Demo #3", () => {
  it("should render a button with the role 'button'", () => {
    const { getByRole } = render(<DemoThree />);

    getByRole("button");
  });
});
