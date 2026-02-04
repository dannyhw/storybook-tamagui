const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

defaultConfig.resolver.sourceExts.push("mjs");

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: "./.ondevice",
});
