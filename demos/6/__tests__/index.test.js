import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";

import DemoSix from "../index";

describe("Demo #6", () => {
  it("should render the async value into the input box", async () => {
    const { getByDisplayValue, getByRole } = render(<DemoSix />);

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    // Wait for any async actions to finish
    await wait();

    getByDisplayValue("SE1 9GF");
  });
});
