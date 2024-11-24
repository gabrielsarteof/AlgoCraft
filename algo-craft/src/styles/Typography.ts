import { StyleSheet } from 'react-native';
import { colors } from './colors'; 

export const typography = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    logo: {
      fontFamily: 'Righteous',  
      fontSize: 48,
      textAlign: 'center',
      color: theme === 'dark' ? colors.blue[600] : colors.blue[500], 
    },

    title: {
      fontFamily: 'Roboto-Bold',  
      fontSize: 32,
      textAlign: 'center',
      color: theme === 'dark' ? colors.light.text : colors.dark.text, 
    },

    subtitle: {
      fontFamily: 'Roboto-Medium',  
      fontSize: 24,
      textAlign: 'center',
      color: theme === 'dark' ? colors.gray[200] : colors.gray[200], 
    },

    text: {
      fontFamily: 'Roboto-Regular',  
      fontSize: 16,
      textAlign: 'left',
      color: theme === 'dark' ? colors.light.text : colors.dark.text, 
    },

    slogan: {
      fontFamily: 'Roboto-Light',    
      fontSize: 16,
      textAlign: 'center',
      color: theme === 'dark' ? colors.gray[400] : colors.gray[500], 
    },
    linkText: {
      fontFamily: 'Roboto-Regular',    
      fontSize: 18,
      textAlign: 'center',
      color: theme === 'dark' ? colors.blue[600] : colors.blue[500],
    },
  });

export default typography;
