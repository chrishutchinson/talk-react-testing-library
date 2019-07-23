const Component = () => (
  <form>
    <input type="text" placeholder="Location" />
    <button>Use your current location</button>
  </form>
);

it("should render an element with the role 'button'", () => {
  const { getByRole } = render(<Component />);

  getByRole("button");
});
