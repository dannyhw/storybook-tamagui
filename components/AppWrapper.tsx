import config from "../tamagui.config";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TamaguiProvider
        config={config}
        defaultTheme={colorScheme === "dark" ? "dark" : "light"}
      >
        <Theme name={colorScheme === "dark" ? "dark" : "light"}>
          {children}
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
};
