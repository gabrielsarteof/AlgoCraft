import React, { useState } from 'react';
import { View, Text, ColorSchemeName, useColorScheme, ScrollView, NativeSyntheticEvent, NativeScrollEvent, LayoutChangeEvent } from 'react-native';
import { useRouter } from 'expo-router';
import experienceCustomizationStyles from '@/styles/experienceCustomization';
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectableOptionLarge } from '@/components/ui/SelectableOptionLarge';

export default function Begin() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const router = useRouter();
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    if (selectedOption) {
      router.push('/custom/languages');
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    setScrollPosition(contentOffsetY);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const layoutHeight = event.nativeEvent.layout.height;
    setScrollViewHeight(layoutHeight);
  };

  const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setContentHeight(contentHeight);
  };

  const isTop = scrollPosition === 0;
  const isBottom = scrollPosition + scrollViewHeight >= contentHeight - 10; 

  const containerStyle = [
    experienceCustomizationStyles(colorScheme).middlebox,
    !isTop && { borderTopWidth: 1, borderTopColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] },
    !isBottom && { borderBottomWidth: 1, borderBottomColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] }
  ];

  return (
    <SafeAreaView style={experienceCustomizationStyles(colorScheme).container}>
      <Spacer height={10} />
      <View style={experienceCustomizationStyles(colorScheme).navigationHeader}>
        <MaterialIcons
          name="arrow-back-ios-new"
          color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[800]}
          size={24}
        />
      </View>
      <View style={experienceCustomizationStyles(colorScheme).topbox}>
        <Text style={typography(colorScheme).highLightText}>
          Vamos achar o melhor lugar para começar!
        </Text>
      </View>

      <View style={experienceCustomizationStyles(colorScheme).middlebox}>
        <SelectableOptionLarge
            text="É minha primeira vez programando!"
            imageSource={require('@assets/images/flaticon/start-line.png')}
            isSelected={selectedOption === 'Zero'}
            onSelect={() => setSelectedOption('Zero')}
          />
        <Spacer height={20}></Spacer>
        <SelectableOptionLarge
            text="Conheço um pouco de programação!"
            imageSource={require('@assets/images/flaticon/rocket.png')}
            isSelected={selectedOption === '?'}
            onSelect={() => setSelectedOption('?')}
          />
      </View>

      <View style={experienceCustomizationStyles(colorScheme).bottombox}>
      <Spacer height={20} />
        <BlueButton
          title="CONTINUAR"
          onPress={handleAccessGoNext}
          isLoading={isLoading}
          disabled={!selectedOption}
        />
      </View>
    </SafeAreaView>
  );
}
