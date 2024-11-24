import { StyleSheet } from 'react-native';
import { Colors } from './Colors'; 

export const typography = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    logo: {
      fontFamily: 'Righteous',  
      fontSize: 48,
      textAlign: 'center',
      color: theme === 'dark' ? Colors.blue[600] : Colors.blue[500], 
    },

    title: {
      fontFamily: 'Roboto-Bold',  
      fontSize: 32,
      textAlign: 'center',
      color: theme === 'dark' ? Colors.light.text : Colors.dark.text, 
    },

    subtitle: {
      fontFamily: 'Roboto-Medium',  
      fontSize: 24,
      textAlign: 'center',
      color: theme === 'dark' ? Colors.gray[200] : Colors.gray[200], 
    },

    text: {
      fontFamily: 'Roboto-Regular',  
      fontSize: 16,
      textAlign: 'left',
      color: theme === 'dark' ? Colors.light.text : Colors.dark.text, 
    },

    slogan: {
      fontFamily: 'Roboto-Light',    
      fontSize: 16,
      textAlign: 'center',
      color: theme === 'dark' ? Colors.gray[400] : Colors.gray[500], 
    },
  });

export default typography;
