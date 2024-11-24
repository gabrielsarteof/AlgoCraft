import React from 'react';
import { View, ViewStyle } from 'react-native';

type SpacerProps = {
  height?: number;
  width?: number;
  style?: ViewStyle;
};

export const Spacer: React.FC<SpacerProps> = ({ height = 10, width = 0, style }) => {
  return <View style={[{ height, width }, style]} />;
};
