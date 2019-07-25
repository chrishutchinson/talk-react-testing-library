const Component = () => (
  <form>
    <input type="text" placeholder="Location" />
  </form>
);

it("should render an input with a 'Location' placeholder", () => {
  const { getByPlaceholderText } = render(<Component />);

  getByPlaceholderText("Location");
});
