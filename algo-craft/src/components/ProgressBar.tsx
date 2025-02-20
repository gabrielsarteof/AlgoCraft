// components/ui/ProgressBar.tsx
import React from 'react';
import { View, Text, ColorSchemeName, useColorScheme } from 'react-native';
import { colors } from '@/styles/colors';

interface ProgressBarProps {
  progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  return (
    <View style={{
      height: 17,
      width: '100%',
      backgroundColor: colorScheme === 'dark' ? colors.gray[700] : colors.gray[300],
      borderRadius: 8,
      overflow: 'hidden',
    }}>
      <View
        style={{
          height: '100%',
          paddingHorizontal: 12,
          paddingTop: 4,
          paddingBottom: 10,
          borderRadius: 8,
          justifyContent: 'center',
          width: `${progress * 100}%`,
          backgroundColor: colorScheme === 'dark' ? colors.blue[400] : colors.blue[300],
        }}
      >
        <View 
        style={{
          flex: 1,
          borderRadius: 8,
          backgroundColor: colorScheme === 'dark' ? colors.blue[300] : colors.blue[200],
        }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
