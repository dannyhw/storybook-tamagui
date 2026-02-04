if (!process.env.TAMAGUI_TARGET) {
  process.env.TAMAGUI_TARGET = "native";
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true"
        ? ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }]
        : null,
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
      "react-native-worklets/plugin",
    ].filter(Boolean),
  };
};
