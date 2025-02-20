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
  grayBlue: {
    400: '#74cdef',
    500: '#63c0e6',
    600: '#245372',
    700: '#2c445b',
    800: '#1c222a',
    900: "#17181f"
  },
  green: {
    100: '#f2fee7', 
    200: '#e0fdca', 
    300: '#c4fa9c', 
    400: '#63D963', 
    500: '#54D454', 
    600: '#29B329', 
    700: '#209920', 
    800: '#337e0d', 
    900: '#2c6311', 
    950: '#275413', 
    1000: '#102f04', 
  },
  red: {
    400: '#FA4E45',
    450: '#F03B31',
    500: '#E5271D',
    600: '#D32218',
    700: '#C11D14',
    800: '#A01B14',
  },
  yellow: {
    300: '#FFDC45',
    400: '#FCC713',
    500: '#ECAE06',
  }
};
