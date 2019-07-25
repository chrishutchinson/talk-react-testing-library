import React from "react";

const paddingStyles = {
  padding: 20,
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px 20%"
};

export default ({ children, withPadding = true, fullWidth = false }) => (
  <div
    style={{
      borderTop: withPadding ? "20px solid #F66C9B" : "40px solid #F66C9B",
      textAlign: "center",
      ...(withPadding ? paddingStyles : {}),
      ...(fullWidth
        ? {
            padding: "20px 5%"
          }
        : {})
    }}
  >
    {children}
  </div>
);
