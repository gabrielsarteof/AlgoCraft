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
import { SelectableOption } from '@/components/ui/SelectableOption';

export default function Experience() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const router = useRouter();
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    if (selectedOption) {
      router.push('/custom/howDidYouHear');
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
          Quanto você entende de programação?
        </Text>
      </View>

      <View style={experienceCustomizationStyles(colorScheme).middlebox}>
        <SelectableOption
            text="Sei um pouco de programação"
            imageSource={require('@assets/images/flaticon/bronze-medal.png')}
            isSelected={selectedOption === '1'}
            onSelect={() => setSelectedOption('1')}
          />
        <Spacer height={10}></Spacer>
        <SelectableOption
            text="Já desenvolvi pequenos projetos"
            imageSource={require('@assets/images/flaticon/silver-medal.png')}
            isSelected={selectedOption === '2'}
            onSelect={() => setSelectedOption('2')}
          />
          <Spacer height={10}></Spacer>
        <SelectableOption
            text="Tenho experiência prática com linguagens de programação "
            imageSource={require('@assets/images/flaticon/gold-medal.png')}
            isSelected={selectedOption === '3'}
            onSelect={() => setSelectedOption('3')}
          />
          <Spacer height={10}></Spacer>
        <SelectableOption
            text="Sou fluente em programação e já trabalhei em projetos complexos "
            imageSource={require('@assets/images/flaticon/cup.png')}
            isSelected={selectedOption === '4'}
            onSelect={() => setSelectedOption('4')}
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
