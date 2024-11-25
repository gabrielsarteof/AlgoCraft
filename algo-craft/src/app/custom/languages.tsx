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

export default function Languages() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const router = useRouter();
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    if (selectedOption) {
      router.push('/custom/experience');
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
          Qual linguagem você quer aprender?
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
            text="Python"
            imageSource={require('@assets/images/programming-languages/python.png')}
            isSelected={selectedOption === 'Python'}
            onSelect={() => setSelectedOption('Python')}
          />
          <SelectableOption
            text="C"
            imageSource={require('@assets/images/programming-languages/c.png')}
            isSelected={selectedOption === 'C'}
            onSelect={() => setSelectedOption('C')}
          />
          <SelectableOption
            text="C++"
            imageSource={require('@assets/images/programming-languages/cplusplus.png')}
            isSelected={selectedOption === 'C++'}
            onSelect={() => setSelectedOption('C++')}
          />
          <SelectableOption
            text="C#"
            imageSource={require('@assets/images/programming-languages/csharp.png')}
            isSelected={selectedOption === 'C#'}
            onSelect={() => setSelectedOption('C#')}
          />
          <SelectableOption
            text="Java"
            imageSource={require('@assets/images/programming-languages/java.png')}
            isSelected={selectedOption === 'Java'}
            onSelect={() => setSelectedOption('Java')}
          />
          <SelectableOption
            text="HTML"
            imageSource={require('@assets/images/programming-languages/html.png')}
            isSelected={selectedOption === 'HTML'}
            onSelect={() => setSelectedOption('HTML')}
          />
          <SelectableOption
            text="CSS"
            imageSource={require('@assets/images/programming-languages/css.png')}
            isSelected={selectedOption === 'CSS'}
            onSelect={() => setSelectedOption('CSS')}
          />
          <SelectableOption
            text="JavaScript"
            imageSource={require('@assets/images/programming-languages/javascript.png')}
            isSelected={selectedOption === 'JavaScript'}
            onSelect={() => setSelectedOption('JavaScript')}
          />
          <SelectableOption
            text="React"
            imageSource={require('@assets/images/programming-languages/react.png')}
            isSelected={selectedOption === 'React'}
            onSelect={() => setSelectedOption('React')}
          />
          <SelectableOption
            text="Flutter"
            imageSource={require('@assets/images/programming-languages/flutter.png')}
            isSelected={selectedOption === 'Flutter'}
            onSelect={() => setSelectedOption('Flutter')}
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
