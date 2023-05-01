// Initialization for ES Users
import {
  Carousel,
  initTE,
} from "tw-elements";

tailwind.config = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
  },
  corePlugins: {
    preflight: false,
  },
};

initTE({ Carousel });