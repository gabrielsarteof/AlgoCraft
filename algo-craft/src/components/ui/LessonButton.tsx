import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Animated, ColorSchemeName, useColorScheme, Image } from 'react-native';
import { lessonButtonStyles } from '@/styles/lessonButtonStyles';
import { colors } from '@/styles/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'default' | 'game' | 'time' | 'final'; // Novo tipo "final"
};

export function LessonButton({ disabled = false, type = 'default', ...rest }: Props) {
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
      ? (isPressed ? colors.blue[600] : (disabled ? colors.gray[100] : colors.blue[500]))
      : (isPressed ? colors.blue[700] : (disabled ? colors.grayBlue[800] : colors.blue[600])),
    bottom: colorScheme === 'light'
      ? (isPressed ? colors.blue[700] : (disabled ? colors.gray[300] : colors.blue[600]))
      : (isPressed ? colors.blue[800] : (disabled ? colors.gray[900] : colors.blue[700])),
  };

  const getIconOrImage = () => {
    switch (type) {
      case 'game':
        return (
          <Ionicons
            name="game-controller"
            color={disabled ? (colorScheme === 'light' ? colors.gray[300] : colors.gray[800]) : colors.blue[100]}
            size={32}
          />
        );
      case 'time':
        return (
          <Octicons
            name="clock"
            color={disabled ? (colorScheme === 'light' ? colors.gray[300] : colors.gray[800]) : colors.blue[100]}
            size={32}
          />
        );
      case 'final':
        const imageSource = colorScheme === 'dark'
          ? require('@assets/images/flaticon/award-dark.png') // Imagem para o modo dark
          : require('@assets/images/flaticon/award-light.png'); // Imagem para o modo light
        return (
          <Image
            source={imageSource}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
        );
      default:
        return (
          <Octicons
            name="star-fill"
            color={disabled ? (colorScheme === 'light' ? colors.gray[300] : colors.gray[800]) : colors.blue[100]}
            size={32}
          />
        );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Animated.View
        style={[
          lessonButtonStyles(colorScheme).buttonBottom,
          { backgroundColor: buttonColors.bottom, transform: [{ scale }] },
        ]}
      >
        <View style={[lessonButtonStyles(colorScheme).buttonTop, { backgroundColor: buttonColors.top }]}>
          {getIconOrImage()}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
