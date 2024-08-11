import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#fff",
        gainsboro: "#d9d9d9",
        tomato: "#ff4444",
        "neutral-300": "#c1c1c1",
        "neutral-black": "#000",
        "neutral-100": "#f4f4f4",
        "neutral-500": "#333",
        "neutral-400": "#848484",
        darkgray: "#acacac",
        "neutral-200": "#eaeaea",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "1rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      sm: "0.875rem",
      "3xs": "0.625rem",
      xs: "0.75rem",
      "5xl": "1.5rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
