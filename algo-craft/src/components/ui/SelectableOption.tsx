import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ColorSchemeName, useColorScheme, Animated, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { selectableOptionStyles } from '@/styles/selectableOptionStyles';
import { colors } from '@/styles/colors';

type SelectableOptionProps = {
  text: string;
  title?: string;
  imageSource?: any; // Tornando imageSource opcional
  isSelected: boolean;
  onSelect: () => void;
  isLarge?: boolean; 
  showMessage?: string;
};

export const SelectableOption: React.FC<SelectableOptionProps> = ({
  text,
  title, 
  imageSource, 
  isSelected, 
  onSelect, 
  isLarge = false,
  showMessage,
}) => {
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

  // Estilos específicos para o tamanho "grande"
  const largeStyles = isLarge ? {
    container: selectableOptionStyles(colorScheme).selectableOptionBottomLarge,
    imageStyle: selectableOptionStyles(colorScheme).selectableOptionIconLarge,
  } : {};

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={handlePressIn} 
      onPressOut={handlePressOut}
      onPress={onSelect}
    >
      <Animated.View 
        style={[
          selectableOptionStyles(colorScheme).selectableOptionBottom, 
          isLarge && selectableOptionStyles(colorScheme).selectableOptionBottomLarge, 
          isSelected && selectableOptionStyles(colorScheme).selectedOptionBottom,
          { 
            backgroundColor: buttonColors.bottom, 
            transform: [{ scale }]  
          }
        ]}
      >
        <View style={[
          selectableOptionStyles(colorScheme).selectableOptionTop,
          isLarge && selectableOptionStyles(colorScheme).selectableOptionTopLarge, 
          { backgroundColor: buttonColors.top }
        ]}>
          {imageSource && (
            <Image 
              source={imageSource} 
              style={[selectableOptionStyles(colorScheme).selectableOptionIcon, isLarge && largeStyles.imageStyle]} // Aplica estilo maior para imagem
              resizeMode="contain" 
            />
          )}
          <View style={selectableOptionStyles(colorScheme).textBox}>
          {title && (
              <Text style={[
                selectableOptionStyles(colorScheme).selectableOptionTitle, 
                isSelected && selectableOptionStyles(colorScheme).selectedOptionTitle
              ]}>
                {title}
              </Text>
            )}
            <Text style={[
              selectableOptionStyles(colorScheme).selectableOptionText, 
              isSelected && selectableOptionStyles(colorScheme).selectedOptionText
            ]}>
              {text}
            </Text>
          </View>
          {showMessage && (
            <View style={[selectableOptionStyles(colorScheme).optionMessage]}>
              <Text style={[selectableOptionStyles(colorScheme).optionMessageText]}>
                {showMessage}
              </Text>
            </View>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
