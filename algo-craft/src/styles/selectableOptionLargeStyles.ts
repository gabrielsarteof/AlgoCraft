import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const selectableOptionLargeStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
    selectableOptionBottom: {
        flexDirection: 'row',
        width: '100%',
        height: 130,
        borderRadius: 15,
        padding: 2,
        paddingBottom: 0,
      },
      selectableOptionTop: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '90%',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
      },
      selectedOptionBottom: {
        borderRadius: 15,
      },
      selectableOptionIcon: {
        width: 70,
        height: 70,
        marginRight: 20,
      },
      textBox: {
        flex: 1,
        textAlign: 'center',
        overflow: 'hidden'
      },
      selectableOptionText: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 16,
        color: colorScheme === 'dark' ? colors.gray[300] : colors.gray[800], 
      },
      selectedOptionText: {
        color: colorScheme === 'dark' ? colors.blue[500] : colors.blue[400], 
      },
});