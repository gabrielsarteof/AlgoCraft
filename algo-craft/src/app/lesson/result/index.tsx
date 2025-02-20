import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  useColorScheme,
  ColorSchemeName,
} from 'react-native';
import { useRouter } from 'expo-router';
import { resultScreenStyles } from '@/styles/resultScreenStyles';
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';
import { Card } from '@/components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResultScreen() {
  const [animations] = useState<Animated.Value[]>([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState([true, false, false, false]); // O primeiro é visível desde o início
  const router = useRouter();
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    router.push('/signin');
  };

  useEffect(() => {
    // Função que anima cada cartão sequencialmente
    const animationSequence = [
      () => {
        // Animação do primeiro cartão
        Animated.timing(animations[0], {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          // Depois que o primeiro terminar, habilita o segundo
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[1] = true;
            return newVisibility;
          });
        });
      },
      () => {
        // Animação do segundo cartão
        Animated.timing(animations[1], {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          // Depois que o segundo terminar, habilita o terceiro
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[2] = true;
            return newVisibility;
          });
        });
      },
      () => {
        // Animação do terceiro cartão
        Animated.timing(animations[2], {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          // Depois que o terceiro terminar, habilita o quarto
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[3] = true;
            return newVisibility;
          });
        });
      },
      () => {
        // Animação do quarto cartão
        Animated.timing(animations[3], {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          // Quando todos terminarem, habilita o botão
          setIsButtonEnabled(true);
        });
      },
    ];

    // Chama cada animação na ordem
    animationSequence.forEach((animate, index) => {
      setTimeout(animate, index * 600); // Cada animação começa com delay
    });
  }, [animations]);

  const renderAnimatedCard = (
    animation: Animated.Value,
    type: 'xp' | 'combo' | 'fast' | 'accuracy',
    title: string,
    text: string,
    index: number
  ) => {
    if (!isVisible[index]) {
      return null; // Não renderiza o cartão até a animação começar
    }

    const translateY = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });

    const scale = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [3, 1],
    });

    const rotate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['30deg', '0deg'],
    });

    return (
      <Animated.View
        style={{
          height: 100,
          width: '48%',
          marginBottom: 20,
          transform: [
            { translateY },
            { scale },
            { rotate },
          ],
        }}
      >
        <Card title={title} text={text} type={type} />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={[resultScreenStyles(colorScheme).resultScreenContainer]}>
      <View style={resultScreenStyles(colorScheme).topbox}></View>

      <View style={resultScreenStyles(colorScheme).middlebox}>
        <Text style={typography(colorScheme).blueHighLightText}>
          Lição Concluída!
        </Text>
        <Spacer height={40}></Spacer>
        <View style={resultScreenStyles(colorScheme).optionsGrid}>
          {renderAnimatedCard(animations[0], 'xp', 'TOTAL DE XP', '23', 0)}
          {renderAnimatedCard(animations[1], 'combo', 'MAIOR COMBO', '4', 1)}
          {renderAnimatedCard(animations[2], 'fast', 'TEMPO', '1:08', 2)}
          {renderAnimatedCard(animations[3], 'accuracy', 'ACERTOS', '80%', 3)}
        </View>
      </View>

      <View style={resultScreenStyles(colorScheme).bottombox}>
        <BlueButton
          title="RECEBER XP"
          onPress={handleAccessGoNext}
          isLoading={false}
          disabled={!isButtonEnabled}
        />
      </View>
    </SafeAreaView>
  );
}
