import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ColorSchemeName, useColorScheme, Animated } from 'react-native';
import {selectableOptionLargeStyles} from '@/styles/selectableOptionLargeStyles';
import { colors } from '@/styles/colors';

type SelectableOptionProps = {
  text: string;
  imageSource: any;
  isSelected: boolean;
  onSelect: () => void;
};

export const SelectableOptionLarge: React.FC<SelectableOptionProps> = ({ text, imageSource, isSelected, onSelect }) => {
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
    ? (isSelected 
        ? (isPressed ? colors.blue[200] : colors.blue[100])  
        : (isPressed ? colors.gray[300] : colors.gray[100])) 
    : (isPressed ? colors.gray[900] : colors.gray[800]),
    
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
      onPress={onSelect}
    >
      <Animated.View 
        style={[
          selectableOptionLargeStyles(colorScheme).selectableOptionBottom, 
          isSelected && selectableOptionLargeStyles(colorScheme).selectedOptionBottom,
          { 
            backgroundColor: buttonColors.bottom, 
            transform: [{ scale }]  
          }
        ]}
      >
        <View style={[
          selectableOptionLargeStyles(colorScheme).selectableOptionTop,
          { backgroundColor: buttonColors.top } 
        ]}>
          <Image 
            source={imageSource} 
            style={selectableOptionLargeStyles(colorScheme).selectableOptionIcon} 
            resizeMode="contain" 
          />
          <View style={selectableOptionLargeStyles(colorScheme).textBox}> 
            <Text style={[
                selectableOptionLargeStyles(colorScheme).selectableOptionText, 
                isSelected && selectableOptionLargeStyles(colorScheme).selectedOptionText
            ]}>
                {text}
            </Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
