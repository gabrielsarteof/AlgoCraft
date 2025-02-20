import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const answerButtonStyles = (colorScheme: 'light' | 'dark') => StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        borderRadius: 15,
        padding: 2,
        paddingBottom: 6,
      },
      top: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 18,
      },
      selectedBottom: {
        borderRadius: 15,
      },
      text: {
        flex: 1,
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: colorScheme === 'dark' ? colors.gray[300] : colors.gray[800], 
      },
      textBox: {
        flex: 1,
      },
      selectedText: {
        color: colorScheme === 'dark' ? colors.blue[500] : colors.blue[400], 
      },

});