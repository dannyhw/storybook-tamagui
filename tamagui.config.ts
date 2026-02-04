import { createTamagui } from "@tamagui/core";
import { defaultConfig } from "@tamagui/config/v5";
import { themes } from "./themes";

// you usually export this from a tamagui.config.ts file
const config = createTamagui({ ...defaultConfig, themes });

type Conf = typeof config;

// make imports typed
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
