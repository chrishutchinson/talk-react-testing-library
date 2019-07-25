const Component = () => {
  const [loadingState, setLoadingState] = React.useState("none");
  const [location, setLocation] = React.useState(null);

  const handleClick = () => {
    setLoadingState("pending");
  };

  const handleLocationChange = e => {
    setLocation(e.currentTarget.value);
  };

  return (
    <main>
      <fieldset>
        {!isValidLocation(location) && <p>Error: The location is not valid</p>}

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

it("should render an error message if an invalid location is entered", () => {
  const { getByPlaceholderText, getByText } = render(<Component />);

  fireEvent.change(getByPlaceholderText("Location"), {
    target: {
      value: "Invalid value"
    }
  });

  getByText(/Error:/);
});
