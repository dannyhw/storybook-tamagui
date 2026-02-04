import { Button, Text, View } from "tamagui";
import { AppWrapper } from "./components/AppWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import StorybookUI from "./.rnstorybook";

function App() {
  if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
    return (
      <AppWrapper>
        <StorybookUI />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      <SafeAreaView>
        <View background={"$background"} p="$4">
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

export default App;
