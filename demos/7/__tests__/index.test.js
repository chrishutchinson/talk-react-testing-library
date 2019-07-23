import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DemoSeven from "../index";

describe("Demo #7", () => {
  it("should call the onSubmit prop with the location when the form is submitted", async () => {
    const mockOnSubmit = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <DemoSeven onSubmit={mockOnSubmit} />
    );

    userEvent.type(getByPlaceholderText("Location"), "SE1 9GF");
    userEvent.click(getByTestId("submitButton"));

    expect(mockOnSubmit).toHaveBeenCalledWith("SE1 9GF");
  });
});
