const Component = () => {
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

  return (
    <main>
      <fieldset>
        {!isValidLocation(location) && <p>Error: ...</p>}

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
    </main>
  );
};

it("should render the async value into the input box", () => {
  const { getByDisplayValue, getByRole } = render(<Component />);

  fireEvent.click(getByRole("button"));

  getByDisplayValue("SE1 9GF");
});
