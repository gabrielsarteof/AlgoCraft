import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

const lessonStyles= (colorScheme: 'light' | 'dark') => StyleSheet.create({
  beginScreenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbox: {
    height: '20%',
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
    justifyContent: 'center',
    width: '100%',
  },
  optionsGrid: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
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
    height: '20%',
    gap: 10,
    justifyContent: 'flex-end', 
    width: '100%', 
    paddingBottom: 30,
  },
  feedbackTitleRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10,
  },
  feedbackTitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24
  },
  feedbackText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 19
  },
  CorretAnswer: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18
  }
});

export default lessonStyles;
