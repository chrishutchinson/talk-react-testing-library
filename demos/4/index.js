import React from "react";

const DemoFour = () => {
  const [loadingState, setLoadingState] = React.useState("none");

  const handleClick = () => {
    setLoadingState("pending");
  };

  return (
    <main>
      <div>A form is coming...</div>

      <fieldset>
        <input type="text" placeholder="Location" />
        <button onClick={handleClick}>
          {loadingState === "pending"
            ? "Loading..."
            : "Use your current location"}
        </button>
      </fieldset>
    </main>
  );
};

export default DemoFour;
