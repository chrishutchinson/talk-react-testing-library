import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DemoFour from "../index";

describe("Demo #4", () => {
  it("should change the button text to 'Loading...' when clicked", () => {
    const { getByRole } = render(<DemoFour />);

    fireEvent.click(getByRole("button"));

    expect(getByRole("button").textContent).toEqual("Loading...");
  });
});
