const { getDefaultConfig } = require("expo/metro-config");
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");
const { withTamagui } = require("@tamagui/metro-plugin");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

defaultConfig.resolver.sourceExts.push("mjs");

const config = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
});

module.exports = withTamagui(config, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
});
