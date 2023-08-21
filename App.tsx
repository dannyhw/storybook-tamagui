import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Paragraph, TamaguiProvider, Theme, Text } from "tamagui";
import config from "./tamagui.config";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>{children}</Theme>
    </TamaguiProvider>
  );
};

function App() {
  return (
    <Wrapper>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Wrapper>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  const StorybookUI = require("./.ondevice").default;

  AppEntryPoint = () => (
    <Wrapper>
      <StorybookUI />
    </Wrapper>
  );
}

export default AppEntryPoint;
