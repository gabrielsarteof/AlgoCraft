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
        paddingVertical: 15,
        paddingHorizontal: 10,
      },
      selectedOptionBottom: {
        borderRadius: 15,
      },
      selectableOptionIcon: {
        width: 35,
        height: 35,
        marginRight: 10,
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