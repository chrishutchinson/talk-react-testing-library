import React from "react";

const DemoSix = () => {
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

  return (
    <main>
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
    </main>
  );
};

export default DemoSix;
