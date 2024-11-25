import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

const experienceCustomizationStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  topbox: {
    height: '20%',
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  navigationHeader: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  middlebox: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  selectableOptionList: {
    width: '100%',
    paddingVertical: 10,
    gap: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  bottombox: {
    gap: 10,
    justifyContent: 'flex-end', 
    width: '100%', 
    paddingBottom: 30,
  },
  logo: {
    height: 150,
    width: 150
  }
});

export default experienceCustomizationStyles;
