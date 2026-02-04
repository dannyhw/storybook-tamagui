import { createV5Theme, defaultChildrenThemes } from "@tamagui/config/v5";
import { v5ComponentThemes } from "@tamagui/themes/v5";
import {
  yellow,
  yellowDark,
  red,
  redDark,
  green,
  greenDark,
} from "@tamagui/colors";

const darkPalette = [
  "hsla(0, 0%, 0%, 1)",
  "hsla(0, 0%, 5%, 1)",
  "hsla(0, 0%, 10%, 1)",
  "hsla(0, 0%, 16%, 1)",
  "hsla(0, 0%, 22%, 1)",
  "hsla(0, 0%, 29%, 1)",
  "hsla(0, 0%, 35%, 1)",
  "hsla(0, 0%, 42%, 1)",
  "hsla(0, 0%, 48%, 1)",
  "hsla(0, 0%, 55%, 1)",
  "hsla(0, 0%, 94%, 1)",
  "hsla(0, 0%, 100%, 1)",
];
const lightPalette = [
  "hsla(0, 0%, 100%, 1)",
  "hsla(0, 0%, 96%, 1)",
  "hsla(0, 0%, 92%, 1)",
  "hsla(0, 0%, 87%, 1)",
  "hsla(0, 0%, 82%, 1)",
  "hsla(0, 0%, 75%, 1)",
  "hsla(0, 0%, 67%, 1)",
  "hsla(0, 0%, 60%, 1)",
  "hsla(0, 0%, 52%, 1)",
  "hsla(0, 0%, 45%, 1)",
  "hsla(0, 0%, 8%, 1)",
  "hsla(0, 0%, 0%, 1)",
];

// Your custom accent color theme
const accentLight = {
  accent1: "hsla(0, 0%, 8%, 1)",
  accent2: "hsla(0, 0%, 14%, 1)",
  accent3: "hsla(0, 0%, 19%, 1)",
  accent4: "hsla(0, 0%, 25%, 1)",
  accent5: "hsla(0, 0%, 30%, 1)",
  accent6: "hsla(0, 0%, 35%, 1)",
  accent7: "hsla(0, 0%, 40%, 1)",
  accent8: "hsla(0, 0%, 45%, 1)",
  accent9: "hsla(0, 0%, 50%, 1)",
  accent10: "hsla(0, 0%, 88%, 1)",
  accent11: "hsla(0, 0%, 94%, 1)",
  accent12: "hsla(0, 0%, 100%, 1)",
};

const accentDark = {
  accent1: "hsla(0, 0%, 92%, 1)",
  accent2: "hsla(0, 0%, 86%, 1)",
  accent3: "hsla(0, 0%, 81%, 1)",
  accent4: "hsla(0, 0%, 75%, 1)",
  accent5: "hsla(0, 0%, 70%, 1)",
  accent6: "hsla(0, 0%, 65%, 1)",
  accent7: "hsla(0, 0%, 60%, 1)",
  accent8: "hsla(0, 0%, 55%, 1)",
  accent9: "hsla(0, 0%, 50%, 1)",
  accent10: "hsla(0, 0%, 12%, 1)",
  accent11: "hsla(0, 0%, 6%, 1)",
  accent12: "hsla(0, 0%, 0%, 1)",
};

const builtThemes = createV5Theme({
  darkPalette,
  lightPalette,
  componentThemes: v5ComponentThemes,
  childrenThemes: {
    // Include default color themes (blue, red, green, yellow, etc.)
    ...defaultChildrenThemes,

    // Your custom accent color
    accent: {
      light: accentLight,
      dark: accentDark,
    },

    // Semantic color themes for warnings, errors, and success states
    warning: {
      light: yellow,
      dark: yellowDark,
    },
    error: {
      light: red,
      dark: redDark,
    },
    success: {
      light: green,
      dark: greenDark,
    },
  },
});

export type Themes = typeof builtThemes;

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === "client" &&
  process.env.NODE_ENV === "production"
    ? ({} as any)
    : (builtThemes as any);
