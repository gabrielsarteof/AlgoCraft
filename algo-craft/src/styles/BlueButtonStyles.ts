import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';  

export const blueButtonStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
  buttonBottom: {
    backgroundColor: colorScheme === 'dark' ? colors.blue[700] : colors.blue[600], 
    height: 50,
    width: '100%',
    borderRadius: 18,
    paddingBottom: 6,
    elevation: 2,
  },
  buttonTop: {
    backgroundColor: colorScheme === 'dark' ? colors.blue[600] : colors.blue[500], 
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    color: colorScheme === 'dark' ? colors.dark.text : colors.light.text, 
    fontSize: 16,
    fontWeight: 'bold',
  }
});
