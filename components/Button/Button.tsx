import React from "react";
import { Button as TButton } from "@tamagui/button";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  variant?: "outlined" | undefined;
}

export const Button = ({ onPress, text, variant }: MyButtonProps) => {
  return (
    <TButton onPress={onPress} variant={variant} borderColor={"$borderColor"}>
      {text}
    </TButton>
  );
};
