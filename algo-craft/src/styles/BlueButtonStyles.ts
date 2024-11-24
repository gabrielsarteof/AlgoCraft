import { StyleSheet } from 'react-native';
import { Colors } from './Colors';  

export const blueButtonStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  buttonBottom: {
    backgroundColor: theme === 'dark' ? Colors.blue[700] : Colors.blue[600], 
    height: 50,
    width: '100%',
    borderRadius: 20,
    elevation: 2,
  },
  buttonTop: {
    backgroundColor: theme === 'dark' ? Colors.blue[600] : Colors.blue[500], 
    height: '90%',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme === 'dark' ? Colors.light.text : Colors.dark.text, 
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    color: theme === 'dark' ? Colors.dark.text : Colors.light.text, 
    fontSize: 16,
    fontWeight: 'bold',
  }
});
