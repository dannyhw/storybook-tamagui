import { Button, Text, View } from "tamagui";
import { AppWrapper } from "./components/AppWrapper";
import { SafeAreaView } from "react-native-safe-area-context";

function App() {
  return (
    <AppWrapper>
      <SafeAreaView>
        <View background={"$background"}>
          <Text color="$color">
            Open up App.tsx to start working on your app!
          </Text>
          <Button onPress={() => console.log("Button pressed")}>
            Click me
          </Button>
        </View>
      </SafeAreaView>
    </AppWrapper>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  const StorybookUI = require("./.ondevice").default;

  AppEntryPoint = () => (
    <AppWrapper>
      <StorybookUI />
    </AppWrapper>
  );
}

export default AppEntryPoint;
