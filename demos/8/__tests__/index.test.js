import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Routes from "../index";

const visit = path =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>
  );

describe("Demo #8", () => {
  it("should render the form when the `/form` route is visited", async () => {
    const { getByPlaceholderText } = visit("/form");

    getByPlaceholderText("Location");
  });
});
