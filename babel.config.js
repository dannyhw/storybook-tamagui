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
      // [
      //   "transform-inline-environment-variables",
      //   // NOTE: include is optional, you can leave this part out
      //   {
      //     include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"],
      //   },
      // ],
      "react-native-worklets/plugin",
    ].filter(Boolean),
  };
};
