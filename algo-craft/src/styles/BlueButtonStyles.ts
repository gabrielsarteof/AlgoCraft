import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';  

export const blueButtonStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  buttonBottom: {
    backgroundColor: theme === 'dark' ? colors.blue[700] : colors.blue[600], 
    height: 50,
    width: '100%',
    borderRadius: 20,
    elevation: 2,
  },
  buttonTop: {
    backgroundColor: theme === 'dark' ? colors.blue[600] : colors.blue[500], 
    height: '90%',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme === 'dark' ? colors.light.text : colors.dark.text, 
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    color: theme === 'dark' ? colors.dark.text : colors.light.text, 
    fontSize: 16,
    fontWeight: 'bold',
  }
});
