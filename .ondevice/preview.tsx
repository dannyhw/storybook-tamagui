import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { View, TamaguiProvider, Theme, getConfig } from "tamagui";
import { useColorScheme } from "react-native";

// Config is already loaded via .ondevice/index.tsx
const config = getConfig();

export const decorators = [
  withBackgrounds,
  (Story) => {
    const colorScheme = useColorScheme();
    return (
      <TamaguiProvider config={config}>
        <Theme name={colorScheme === "dark" ? "dark" : "light"}>
          <View padding="$4" flex={1}>
            <Story />
          </View>
        </Theme>
      </TamaguiProvider>
    );
  },
];

export const parameters = {
  backgrounds: {
    default: "plain",
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
};
