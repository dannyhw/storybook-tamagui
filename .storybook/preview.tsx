// @ts-ignore this is needed for web to work currently
import React from "react";
import { Preview } from "@storybook/react";
import { AppWrapper } from "../components/AppWrapper";
import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config";
import { Appearance, useColorScheme } from "react-native";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const colorScheme = useColorScheme();
      return (
        <TamaguiProvider
          config={config}
          defaultTheme={colorScheme === "dark" ? "dark" : "light"}
        >
          <Theme name={colorScheme === "dark" ? "dark" : "light"}>
            <Story />
          </Theme>
        </TamaguiProvider>
      );
    },
  ],
};

export default preview;
