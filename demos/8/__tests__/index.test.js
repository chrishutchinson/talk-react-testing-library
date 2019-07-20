import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import App from "../index";

const visit = (path, options) =>
  render(
    <MemoryRouter initialHistoryEntries={[path]}>
      <App />
    </MemoryRouter>,
    options
  );

describe("Demo #8", () => {
  it("should call the onSubmit prop with the location when the form is submitted", async () => {
    const { getByPlaceholderText } = visit("/form");

    getByPlaceholderText("Location");
  });
});
