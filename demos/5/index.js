import React from "react";

const DemoFive = () => {
  const [loadingState, setLoadingState] = React.useState("none");
  const [location, setLocation] = React.useState("");

  const handleClick = () => {
    setLoadingState("pending");
  };

  const handleLocationChange = e => {
    setLocation(e.currentTarget.value);
  };

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

export default DemoFive;
