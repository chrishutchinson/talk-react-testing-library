const Component = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <form>
      <input type="text" placeholder="Location" />
      <button onClick={handleClick}>
        {isLoading ? "Loading..." : "Use your current location"}
      </button>
    </form>
  );
};

it("should change the button text to 'Loading...' when clicked", () => {
  const { getByRole } = render(<Component />);

  fireEvent.click(getByRole("button"));

  expect(getByRole("button").textContent).toEqual("Loading...");
});
