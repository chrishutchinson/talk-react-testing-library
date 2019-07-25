import React from "react";

const DemoFour = () => {
  const [loadingState, setLoadingState] = React.useState("none");

  const handleClick = () => {
    setLoadingState("pending");
  };

  return (
    <form>
      <input type="text" placeholder="Location" />
      <button onClick={handleClick}>
        {loadingState === "pending"
          ? "Loading..."
          : "Use your current location"}
      </button>
    </form>
  );
};

export default DemoFour;
