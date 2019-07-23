import React from "react";

const DemoSeven = ({ onSubmit }) => {
  const [loadingState, setLoadingState] = React.useState("none");
  const [location, setLocation] = React.useState("");

  const handleClick = React.useCallback(async () => {
    setLoadingState("pending");

    const asyncResult = await Promise.resolve("SE1 9GF");

    setLocation(asyncResult);
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
        {location.length > 10 && (
          <p>
            Error: The location field cannot contain more than 10 characters
          </p>
        )}

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

export default DemoSeven;
