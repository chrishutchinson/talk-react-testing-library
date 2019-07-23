const Demo = () => <div>Hello, world!</div>;

it("should render the text 'Hello, world!'", () => {
  const { getByText } = render(<Demo />);

  getByText("Hello, world!");
});
