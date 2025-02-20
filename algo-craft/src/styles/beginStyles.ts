import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

const beginStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
  beginScreenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbox: {
    height: '15%',
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  navigationHeader: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: 'center',
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

export default beginStyles;
