import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const selectableOptionStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
    selectableOptionBottom: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 15,
        padding: 2,
        paddingBottom: 6,
      },
      selectableOptionTop: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 18,
      },
      selectedOptionBottom: {
        borderRadius: 15,
      },
      selectableOptionIcon: {
        width: 35,
        height: 35,
        marginRight: 15,
      },
      selectableOptionBottomLarge: {
        flexDirection: 'row',
        width: '100%',
        height: 130,
        borderRadius: 15,
        padding: 2,
        paddingBottom: 6,
      },
      selectableOptionTopLarge: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 10,
      },
      selectableOptionIconLarge: {
        width: 70,
        height: 70,
        marginRight: 20,
      },
      selectableOptionText: {
        flex: 1,
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 16,
        color: colorScheme === 'dark' ? colors.gray[300] : colors.gray[800], 
      },
      selectableOptionTitle: {
        flex: 1,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: colorScheme === 'dark' ? colors.gray[300] : colors.gray[800], 
      },
      textBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        gap: 10,
        flex: 1,
      },
      selectedOptionText: {
        color: colorScheme === 'dark' ? colors.blue[500] : colors.blue[400], 
      },
      selectedOptionTitle: {
        color: colorScheme === 'dark' ? colors.blue[500] : colors.blue[400], 
      },
      optionMessage: {
        position: 'absolute',
        right: -8,
        bottom: 45,
        height: 30, 
        backgroundColor: colorScheme === 'dark' ? colors.blue[500] : colors.blue[400],
        justifyContent: 'flex-end', 
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 12,
        padding: 5,
      },
      optionMessageText: {
        fontFamily: 'Nunito-ExtraBold',
        color: colorScheme === 'dark' ? colors.gray[800] : colors.gray[100], 
        fontSize: 14,
      }


});