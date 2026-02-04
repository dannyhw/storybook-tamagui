export default {
  stories: ["../components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  addons: ["@storybook/addon-docs"],
  viteFinal: async (config, { configType }) => {
    const { tamaguiPlugin } = await import("@tamagui/vite-plugin");
    config.plugins.push(
      tamaguiPlugin({
        config: "./tamagui.config.ts",
        components: ["tamagui"],
      }),
    );

    return config;
  },
  typescript: {
    reactDocgen: "react-docgen",
  },
  env: (config) => ({
    ...config,
    TAMAGUI_TARGET: "web",
  }),
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
