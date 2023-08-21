import React from "react";
import { Button as TButton } from "tamagui";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: MyButtonProps) => {
  return <TButton onPress={onPress}>{text}</TButton>;
};
