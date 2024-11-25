/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const colors = {
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
    100: '#DEF4FF',
    200: '#B6EBFF',
    250: '#76DDFF',
    300: '#2DCDFF',
    400: '#02B8F5',
    500: '#01A6E4',
    600: '#0093D2',
    700: '#0076AA',
    800: '#006994',
  },
  gray: {
    100: '#F6F6F9',
    200: '#ECECF2',
    300: '#E1E1E9',
    400: '#B2B3C7',
    500: '#696D8E',
    600: '#444560',
    700: '#353545',
    750: "#202024",
    800: '#16161D',
    900: '#111111'
  },
};
