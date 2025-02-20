import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const resultScreenStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
  resultScreenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbox: {
    height: '5%',
    width: '100%',
    justifyContent: 'flex-end', 
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
    justifyContent: 'center',
    width: '100%',
  },
  bottombox: {
    gap: 10,
    justifyContent: 'flex-end', 
    width: '100%', 
    paddingBottom: 30,
  },
  optionsGrid: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    paddingHorizontal: 20  },
});
