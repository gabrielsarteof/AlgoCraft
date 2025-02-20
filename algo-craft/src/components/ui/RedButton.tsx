import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, Animated, ColorSchemeName, useColorScheme } from 'react-native';
import { blueButtonStyles } from '@/styles/blueButtonStyles';
import { colors } from '@/styles/colors';
import typography from '@/styles/typography';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function RedButton({ title, isLoading = false, ...rest }: Props) {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [scale] = useState(new Animated.Value(1));  
  const [isPressed, setIsPressed] = useState(false); 

  const handlePressIn = () => {
    
    Animated.spring(scale, {
      toValue: 0.95,  
      useNativeDriver: true,
    }).start();
    setIsPressed(true); 
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,  
      useNativeDriver: true,
    }).start();
    setIsPressed(false); 
  };

  const buttonColors = {
    top: colorScheme === 'light' 
      ? (isPressed ? colors.red[450] : colors.red[400]) 
      : (isPressed ? colors.red[500] : colors.red[450]),
    bottom: colorScheme === 'light' 
      ? (isPressed ? colors.red[600] : colors.red[500]) 
      : (isPressed ? colors.red[700] : colors.red[600]),
  };

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      disabled={isLoading} 
      onPressIn={handlePressIn}  
      onPressOut={handlePressOut}  
      {...rest}
    >
      <Animated.View 
        style={[blueButtonStyles(colorScheme).buttonBottom, { backgroundColor: buttonColors.bottom, transform: [{ scale }] }]}  
      >
        <View style={[blueButtonStyles(colorScheme).buttonTop, { backgroundColor: buttonColors.top }]}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colorScheme === 'dark' ? colors.dark.text : colors.light.text} />
          ) : (
            <Text style={typography(colorScheme).ButtonText}>
              {title}
            </Text>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
