import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ColorSchemeName, useColorScheme, Animated } from 'react-native';
import { answerButtonStyles } from '@/styles/answerButtonStyles';
import { colors } from '@/styles/colors';

type AnswerButtonProps = {
  text: string;
  isSelected: boolean;
  onSelect: () => void;
  disabled: boolean;
};

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  text,
  isSelected,
  onSelect,
  disabled,
}) => {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [scale] = useState(new Animated.Value(1));
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    if (disabled) return;
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    setIsPressed(true);
  };

  const handlePressOut = () => {
    if (disabled) return;
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    setIsPressed(false);
  };

  const buttonColors = {
    top: isSelected
      ? (colorScheme === 'light'
          ? (isPressed ? colors.blue[200] : colors.blue[100])
          : (isPressed ? colors.grayBlue[900] : colors.grayBlue[800]))
      : (colorScheme === 'light'
          ? (isPressed ? colors.gray[300] : colors.gray[100])
          : (isPressed ? colors.gray[900] : colors.gray[800])),

    bottom: isSelected 
      ? (colorScheme === 'light'
          ? (isPressed ? colors.blue[300] : colors.blue[250])
          : (isPressed ? colors.blue[800] : colors.blue[600]))
      : (colorScheme === 'light'
          ? (isPressed ? colors.gray[400] : colors.gray[300])
          : (isPressed ? colors.gray[750] : colors.gray[700])),
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={handlePressIn} 
      onPressOut={handlePressOut}
      onPress={disabled ? () => {} : onSelect}
      disabled={disabled}
    >
      <Animated.View 
        style={[ 
          answerButtonStyles(colorScheme).bottom,
          isSelected && answerButtonStyles(colorScheme).selectedBottom,
          { 
            backgroundColor: buttonColors.bottom, 
            transform: [{ scale }]  
          }
        ]}
      >
        <View style={[ 
          answerButtonStyles(colorScheme).top, 
          { backgroundColor: buttonColors.top }
        ]}>
          <View style={answerButtonStyles(colorScheme).textBox}>
            <Text style={[ 
              answerButtonStyles(colorScheme).text, 
              isSelected && answerButtonStyles(colorScheme).selectedText
            ]}>
              {text}
            </Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
