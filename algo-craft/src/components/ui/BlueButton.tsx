import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, Animated } from 'react-native';
import { useTheme } from '@/context/themeContext'; // Importando o hook do tema
import { blueButtonStyles } from '@/styles/BlueButtonStyles';
import { Colors } from '@/styles/Colors';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function BlueButton({ title, isLoading = false, ...rest }: Props) {
  const { theme } = useTheme();
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
    top: theme === 'light' 
      ? (isPressed ? Colors.blue[600] : Colors.blue[500]) 
      : (isPressed ? Colors.blue[700] : Colors.blue[600]),
    bottom: theme === 'light' 
      ? (isPressed ? Colors.blue[700] : Colors.blue[600]) 
      : (isPressed ? Colors.blue[800] : Colors.blue[700]),
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
        style={[blueButtonStyles(theme).buttonBottom, { backgroundColor: buttonColors.bottom, transform: [{ scale }] }]}  
      >
        <View style={[blueButtonStyles(theme).buttonTop, { backgroundColor: buttonColors.top }]}>
          {isLoading ? (
            <ActivityIndicator size="small" color={theme === 'dark' ? Colors.dark.text : Colors.light.text} />
          ) : (
            <Text style={blueButtonStyles(theme).buttonText}>
              {title}
            </Text>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
