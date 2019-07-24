import React from "react";
import { withSlide } from "mdx-deck";

const getRandomDuration = () => (Math.random() * 100 + 1).toFixed(0);

export default withSlide(({ title, shouldPass = true, slide }) => {
  const [isTesting, setIsTesting] = React.useState(true);

  React.useEffect(() => {
    if (!slide.active) {
      setIsTesting(true);
      return;
    }

    setTimeout(() => {
      setIsTesting(false);
    }, 2000);
  }, [slide.active]);

  return (
    <pre
      style={{
        color: isTesting ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 1)"
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: 8,
          background: isTesting ? "#99981D" : shouldPass ? "green" : "#D70917",
          color: "#FFF"
        }}
      >
        {isTesting ? "RUNS" : shouldPass ? "PASS ✓" : "FAIL ✕"}
      </span>{" "}
      {title} {!isTesting && shouldPass && `(${getRandomDuration()}ms)`}
    </pre>
  );
});
