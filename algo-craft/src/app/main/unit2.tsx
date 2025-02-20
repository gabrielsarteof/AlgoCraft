import React from 'react';
import { ScrollView, View, Image, ColorSchemeName, useColorScheme } from 'react-native';
import { LessonButton } from '@/components/ui/LessonButton';

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
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: waveOffset,
  };
};

export const Module1Unit2: React.FC = () => {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const wingLeft = colorScheme === 'dark'
    ? require('@assets/images/flaticon/unicorn-dark.png') 
    : require('@assets/images/flaticon/unicorn-light.png'); 
  return (
    <View style={{width: '100%', alignItems: 'center', gap: 20}}>
       <View style={[getPaddingForIndex(0)]}>
        <LessonButton
          title={'Item 1'}
          onPress={() => {}}
          disabled={true}
        />
      </View>

      <View style={[getPaddingForIndex(1)]}>
        <LessonButton
          title={'Item 2'}
          type={'game'}
          onPress={() => {}}
          disabled={true}
        />
      </View>

      <View style={[getPaddingForIndex(2)]}>
        <LessonButton
          title={'Item 3'}
          onPress={() => {}}
          disabled={true}
        />
      </View>

      <View style={[getPaddingForIndex(3)]}>
        <LessonButton
          title={'Item 4'}
          type='time'
          onPress={() => {}}
          disabled={true}
        />
      </View>

      <View style={[getPaddingForIndex(4)]}>
        <Image
          source={wingLeft} 
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <LessonButton
          title={'Item 5'}
          type='final'
          onPress={() => {}}
          disabled={true}
        />
        <Image
          source={wingLeft} 
          style={{ width: 50, height: 50, transform: [{ scaleX: -1 }] }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
