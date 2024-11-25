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
import { SelectableOption } from '@/components/ui/SelectableOption';

export default function HowDidYouHear() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const router = useRouter();
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    if (selectedOption) {
      router.push('/signup');
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
          Como você conheceu o Algocraft?
        </Text>
      </View>

      <View style={containerStyle}>
        <ScrollView 
          contentContainerStyle={experienceCustomizationStyles(colorScheme).selectableOptionList}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onLayout={handleLayout} 
          onContentSizeChange={handleContentSizeChange} 
        >
          <SelectableOption
            text="Canal do WhatsApp"
            imageSource={require('@assets/images/flaticon/social.png')}
            isSelected={selectedOption === 'WhatsApp'}
            onSelect={() => setSelectedOption('WhatsApp')}
          />
          <SelectableOption
            text="Facebook"
            imageSource={require('@assets/images/flaticon/facebook.png')}
            isSelected={selectedOption === 'Facebook'}
            onSelect={() => setSelectedOption('Facebook')}
          />
          <SelectableOption
            text="Instagram"
            imageSource={require('@assets/images/flaticon/instagram.png')}
            isSelected={selectedOption === 'Instagram'}
            onSelect={() => setSelectedOption('Instagram')}
          />
          <SelectableOption
            text="Youtube"
            imageSource={require('@assets/images/flaticon/youtube.png')}
            isSelected={selectedOption === 'Youtube'}
            onSelect={() => setSelectedOption('Youtube')}
          />
          <SelectableOption
            text="Busca do Google"
            imageSource={require('@assets/images/flaticon/search.png')}
            isSelected={selectedOption === 'Google'}
            onSelect={() => setSelectedOption('Google')}
          />
          <SelectableOption
            text="Play Store"
            imageSource={require('@assets/images/flaticon/app.png')}
            isSelected={selectedOption === 'PlayStore'}
            onSelect={() => setSelectedOption('PlayStore')}
          />
          <SelectableOption
            text="Tik Tok"
            imageSource={require('@assets/images/flaticon/tik-tok.png')}
            isSelected={selectedOption === 'TikTok'}
            onSelect={() => setSelectedOption('TikTok')}
          />
          <SelectableOption
            text="Recomendação Pessoal"
            imageSource={require('@assets/images/flaticon/laugh.png')}
            isSelected={selectedOption === 'Recomendação'}
            onSelect={() => setSelectedOption('Recomendação')}
          />
          <SelectableOption
            text="Outros"
            imageSource={require('@assets/images/flaticon/menu.png')}
            isSelected={selectedOption === 'Outros'}
            onSelect={() => setSelectedOption('Outros')}
          />
          
        </ScrollView>
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
