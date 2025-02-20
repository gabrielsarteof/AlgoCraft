import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, Animated, ColorSchemeName, useColorScheme, Image } from 'react-native';
import { cardStyles } from '@/styles/cardStyles';
import { colors } from '@/styles/colors';
import typography from '@/styles/typography';

type Props = TouchableOpacityProps & {
  title: string;
  text: string;
  type: 'xp' | 'fast' | 'accuracy' | 'combo';
};

export function Card({ title, text, type, ...rest }: Props) {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [scale] = useState(new Animated.Value(1));
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1, // Aumentar o tamanho
      useNativeDriver: true,
    }).start();
    setIsPressed(true);
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // Voltar ao tamanho original
      useNativeDriver: true,
    }).start();
    setIsPressed(false);
  };

  const typeColors = {
    xp: {
      light: isPressed ? colors.red[500] : colors.red[400],
      dark: isPressed ? colors.blue[500] : colors.blue[600],
    },
    fast: {
      light: isPressed ? colors.yellow[500] : colors.blue[400],
      dark: isPressed ? colors.yellow[300] : colors.yellow[400],
    },
    accuracy: {
      light: isPressed ? colors.green[500] : colors.green[400],
      dark: isPressed ? colors.green[400] : colors.green[500],
    },
    combo: {
      light: isPressed ? colors.red[500] : colors.red[400],
      dark: isPressed ? colors.red[400] : colors.red[450],
    },
  };

  const typeImages = {
    xp: require('@assets/images/flaticon/flash.png'), 
    fast: require('@assets/images/flaticon/wall-clock.png'), 
    accuracy: require('@assets/images/flaticon/target.png'), 
    combo: require('@assets/images/flaticon/fire.png'), 
  };

  const cardBottomColor = colorScheme === 'light' 
    ? typeColors[type].light 
    : typeColors[type].dark;

  const cardTextColor = colorScheme === 'light' 
    ? typeColors[type].light 
    : typeColors[type].dark;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Animated.View
        style={[
          cardStyles(colorScheme).cardBottom,
          { backgroundColor: cardBottomColor, transform: [{ scale }] },
        ]}
      >
        <View style={cardStyles(colorScheme).cardHeader}>
          <Text style={cardStyles(colorScheme).cardTitle}>{title}</Text>
        </View>
        <View style={cardStyles(colorScheme).cardTop}>
          <Image source={typeImages[type]} style={{ width: 24, height: 24, marginBottom: 8 }} />
          <Text style={[cardStyles(colorScheme).cardText, { color: cardTextColor}]}>{text}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
