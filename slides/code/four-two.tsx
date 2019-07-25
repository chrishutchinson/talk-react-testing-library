const Component = () => {
  const [loadingStatus, setLoadingStatus] = React.useState("none");

  const handleClick = () => {
    setLoadingStatus("pending");
  };

  return (
    <form>
      <input type="text" placeholder="Location" />
      <button onClick={handleClick}>
        {loadingStatus === "pending"
          ? "Loading..."
          : "Use your current location"}
      </button>
    </form>
  );
};

it("should change the button text to 'Loading...' when clicked", () => {
  const { getByRole } = render(<Component />);

  fireEvent.click(getByRole("button"));

  expect(getByRole("button").textContent).toEqual("Loading...");
});
