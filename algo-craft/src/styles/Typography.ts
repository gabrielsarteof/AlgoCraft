import { StyleSheet } from 'react-native';
import { colors } from './colors'; 

export const typography = (colorScheme: 'light' | 'dark') =>
  StyleSheet.create({
    logo: {
      fontFamily: 'Righteous',  
      fontSize: 48,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.blue[600] : colors.blue[500], 
    },

    title: {
      fontFamily: 'Roboto-Bold',  
      fontSize: 32,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.light.text : colors.dark.text, 
    },

    subtitle: {
      fontFamily: 'Roboto-Medium',  
      fontSize: 24,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.gray[200] : colors.gray[200], 
    },

    text: {
      fontFamily: 'Roboto-Regular',  
      fontSize: 16,
      textAlign: 'left',
      color: colorScheme === 'dark' ? colors.light.text : colors.dark.text, 
    },

    slogan: {
      fontFamily: 'Roboto-Light',    
      fontSize: 16,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.gray[400] : colors.gray[500], 
    },
    linkText: {
      fontFamily: 'Roboto-Regular',    
      fontSize: 18,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.blue[600] : colors.blue[500],
    },
    highLightText: {
      fontFamily: 'Nunito-ExtraBold',    
      fontSize: 20,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.gray[400] : colors.gray[500], 
    },
    ButtonText: {
      fontFamily: 'Nunito-ExtraBold',    
      fontSize: 16,
      textAlign: 'center',
      color: colorScheme === 'dark' ? colors.gray[800] : colors.gray[100], 
    }
  });

export default typography;
