import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, Animated, ColorSchemeName, useColorScheme } from 'react-native';
import { blueButtonStyles } from '@/styles/blueButtonStyles';
import { colors } from '@/styles/colors';
import typography from '@/styles/typography';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean; 
};

export function BlueButton({ title, isLoading = false, disabled = false, ...rest }: Props) {
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
      ? (isPressed ? colors.blue[600] : (disabled ? colors.grayBlue[400] : colors.blue[500])) 
      : (isPressed ? colors.blue[700] : (disabled ? colors.grayBlue[600] : colors.blue[600])),
    bottom: colorScheme === 'light' 
      ? (isPressed ? colors.blue[700] : (disabled ? colors.grayBlue[500] : colors.blue[600])) 
      : (isPressed ? colors.blue[800] : (disabled ? colors.grayBlue[700] : colors.blue[700])),
  };

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      disabled={disabled || isLoading} 
      onPressIn={handlePressIn}  
      onPressOut={handlePressOut}  
      {...rest}
    >
      <Animated.View 
        style={[blueButtonStyles(colorScheme).buttonBottom, { backgroundColor: buttonColors.bottom, transform: [{ scale }] }]}  
      >
        <View style={[blueButtonStyles(colorScheme).buttonTop, { backgroundColor: buttonColors.top }]}>
          {isLoading || disabled ? ( 
            <MaterialCommunityIcons
            name="window-close"
            color={colorScheme === 'dark' ? colors.gray[800] : colors.gray[100]}
            size={24}
          />
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
