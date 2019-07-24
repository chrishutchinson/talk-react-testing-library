const Component = ({ onSubmit }) => {
  const [loadingState, setLoadingState] = React.useState("none");
  const [location, setLocation] = React.useState(null);

  const handleClick = React.useCallback(async () => {
    setLoadingState("pending");

    const currentLocation = await getCurrentLocation();

    setLocation(currentLocation);
  }, []);

  const handleLocationChange = React.useCallback(e => {
    setLocation(e.currentTarget.value);
  }, []);

  const handleSubmit = React.useCallback(
    e => {
      e.preventDefault();
      onSubmit(location);
    },
    [location]
  );

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {!isValidLocation(location) && <p>Error</p>}

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />

        <button onClick={handleClick}>
          {loadingState === "pending"
            ? "Loading..."
            : "Use your current location"}
        </button>
      </fieldset>

      <button type="submit" data-testid="submitButton">
        Save
      </button>
    </form>
  );
};

it("should call the onSubmit prop with...", async () => {
  const mockOnSubmit = jest.fn();
  const { getByPlaceholderText, getByTestId } = render(
    <Component onSubmit={mockOnSubmit} />
  );

  userEvent.type(getByPlaceholderText("Location"), "SE1 9GF");
  userEvent.click(getByTestId("submitButton"));

  expect(mockOnSubmit).toHaveBeenCalledWith("SE1 9GF");
});
