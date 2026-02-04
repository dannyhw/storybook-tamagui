import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { Preview } from "@storybook/react-native";
import { Appearance } from "react-native";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: Appearance.getColorScheme() === "dark" ? "dark" : "white",
      values: [
        { name: "white", value: "white" },
        { name: "app", value: "#F5F6F7" },
        { name: "dark", value: "#2C2C2C" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withBackgrounds],
};

export default preview;
