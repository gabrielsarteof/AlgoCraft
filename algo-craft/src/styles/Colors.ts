/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  blue: {
    100: '#B6EBFF',
    200: '#76DDFF',
    300: '#2DCDFF',
    400: '#02B8F5',
    500: '#01A6E4',
    600: '#0093D2',
    700: '#0076AA',
    800: '#006994',
  },
  gray: {
    100: '#E3E3E3',
    200: '#D1D1D1',
    300: '#C0C0C0',
    400: '#AAAAAA',
    500: '#969696',
    600: '#6A6A6A',
    700: '#333333',
  },
};
