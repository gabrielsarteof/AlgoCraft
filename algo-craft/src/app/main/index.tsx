import React, { useState } from 'react';
import { ScrollView, View, Text, LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent, ColorSchemeName, useColorScheme } from 'react-native';
import { LessonButton } from '@/components/ui/LessonButton';
import { IconButton } from '@/components/ui/IconButton'; 
import { router } from 'expo-router';
import { mainScreenStyles } from '@/styles/mainScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Spacer } from '@/components/Spacer';
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Module1Unit1 } from './unit1';
import { Module1Unit2 } from './unit2';

export default function MainScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    router.push('/begin');
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

  const getPaddingForIndex = (index: number) => {
    let padding = 0;
  
    if (index === 1) {
      padding = 80; 
    } else if (index === 2) {
      padding = 160; 
    } else if (index === 3) {
      padding = 80; 
    } else if (index === 4) {
      padding = 0; 
    }
  
    const waveOffset = padding;
  
    return {
      paddingRight: waveOffset, 
    };
  };
  

  return (
    <SafeAreaView style={[mainScreenStyles(colorScheme).mainScreenContainer]}>
      <View style={mainScreenStyles(colorScheme).topBox}> 
        <IconButton iconSource={require('@assets/images/flaticon/python.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/flash.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/fire.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/heart.png')} onPress={() => {}} />
      </View>

      <View style={mainScreenStyles(colorScheme).middlebox}>
        <Spacer height={10} />
        <View style={mainScreenStyles(colorScheme).cardBottom}>
            <View style={mainScreenStyles(colorScheme).cardTop}>
                <View style={mainScreenStyles(colorScheme).textContainer}>
                  <Text style={mainScreenStyles(colorScheme).cardText}>
                    MÓDULO 1, UNIDADE 1
                  </Text>
                </View>

                <View style={mainScreenStyles(colorScheme).iconContainer}>
                    <SimpleLineIcons name="game-controller" size={28} color={colors.gray[100]} />
                </View>
            </View>
        </View>
        <ScrollView 
          contentContainerStyle={mainScreenStyles(colorScheme).selectableOptionList}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onLayout={handleLayout} 
          onContentSizeChange={handleContentSizeChange}
        >
          <Module1Unit1/>
          
          <Module1Unit2/>
        </ScrollView>
      </View>

      <View style={mainScreenStyles(colorScheme).bottombox}>
        <IconButton iconSource={require('@assets/images/flaticon/home.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/joystick.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/laugh.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/award.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/gift-box.png')} onPress={() => {}} />
        <IconButton iconSource={require('@assets/images/flaticon/notification.png')} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
