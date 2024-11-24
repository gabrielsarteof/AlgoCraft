import React, { ReactNode } from "react";
import { TextInput, View, TextInputProps, ColorSchemeName, useColorScheme } from "react-native";
import { inputStyles } from "@/styles/inputStyles";
import { colors } from '@/styles/colors';
import { useTheme } from "@/context/themeContext";

function Input({ children }: { children: ReactNode }) {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  return (
    <View style={inputStyles(colorScheme).container}>
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  return (
    <TextInput
      style={inputStyles(colorScheme).input}
      placeholderTextColor={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
