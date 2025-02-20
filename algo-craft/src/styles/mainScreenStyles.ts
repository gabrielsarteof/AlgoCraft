import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const mainScreenStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: { 
    height: '8%',
    flexDirection: 'row', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',  
    borderBottomWidth: 2,
    borderBottomColor: colorScheme === 'dark' ? colors.gray[600] : colors.gray[100],
  },
  middlebox: {
    flex: 1,
    width: '100%',
  },
  cardBottom: {
    backgroundColor: colorScheme === 'dark' ? colors.green[600] : colors.green[500],
    height: 75,
    borderRadius: 12,
    paddingBottom: 6,
    width: '100%',
  },
  cardTop: {
    backgroundColor: colorScheme === 'dark' ? colors.green[500] : colors.green[400],
    borderRadius: 12,
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  textContainer: {
    flex: 0.8, 
  },
  iconContainer: {
    flex: 0.2, 
    alignItems: 'flex-end', 
  },
  cardText: {
    fontFamily: 'Nunito-Bold',
    color: colors.gray[100], 
    fontSize: 18,
  },
  selectableOptionList: {
    gap: 50,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottombox: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between', 
    width: '100%', 
    paddingBottom: 30,
    borderTopWidth: 2,
    borderTopColor: colorScheme === 'dark' ? colors.gray[600] : colors.gray[100],
  },
});
