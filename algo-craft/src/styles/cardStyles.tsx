import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';  

export const cardStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
  cardBottom: {
    backgroundColor: colorScheme === 'dark' ? colors.blue[700] : colors.blue[600], 
    height: '100%',
    padding: 3,
    borderRadius: 14,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 3,
  },
  cardTop: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? colors.gray[800] : colors.gray[100], 
    width: '100%',
    gap: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  cardText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 22,
  }
});
