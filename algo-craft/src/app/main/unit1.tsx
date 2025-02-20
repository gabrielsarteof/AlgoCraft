import React from 'react';
import { ColorSchemeName, ScrollView, useColorScheme, View, Image } from 'react-native';
import { LessonButton } from '@/components/ui/LessonButton';
import { colors } from '@/styles/colors';
import { Spacer } from '@/components/Spacer';

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
    paddingRight: waveOffset,
  };
};

export const Module1Unit1: React.FC = () => {
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const wingLeft = colorScheme === 'dark'
    ? require('@assets/images/flaticon/unicorn-dark.png') 
    : require('@assets/images/flaticon/unicorn-light.png'); 

  const wingRight = colorScheme === 'dark'
    ? require('@assets/images/flaticon/unicorn-dark-right.png') 
    : require('@assets/images/flaticon/unicorn-light-right.png'); 
  return (
    <View style={{width: '100%', alignItems: 'center', gap: 20, borderBottomWidth: 3,
        borderBottomColor: colorScheme === 'dark' ? colors.gray[600] : colors.gray[200], }}>
      <View style={[getPaddingForIndex(0)]}>
        <LessonButton
          title={'Item 1'}
          onPress={() => {}}
          disabled={false}
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
      <Spacer height={20} />
    </View>
  );
};
