import { Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    onPress: { action: "onPress" },
  },
} satisfies Meta<typeof Button>;

export const Basic = {
  args: {
    text: "Hello world!",
  },
};
export const Outlined = {
  args: {
    text: "Hello world!",
    variant: "outlined",
  },
};
