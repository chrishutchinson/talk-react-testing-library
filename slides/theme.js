import { dark } from "mdx-deck/themes";
import nightOwl from "prism-react-renderer/themes/nightOwl";

const heading = {
  fontFamily: '"Montserrat", sans-serif'
};

export default {
  ...dark,
  transitionDuration: 0,
  h1: heading,
  h2: heading,
  h3: heading,
  h4: heading,
  font: '"Montserrat", sans-serif',
  fontSizes: [10, 20, 27, 45, 60, 80],
  weights: [700, 900],
  colors: {
    text: "white",
    background: "#292A44",
    link: "#F66C9B"
  },
  codeSurfer: {
    ...nightOwl,
    plain: {
      color: "#d6deeb",
      backgroundColor: "#292A44"
    }
  }
};
