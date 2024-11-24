import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const inputStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme === 'dark' ? colors.gray[800] : colors.gray[100],
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderColor: theme === 'dark' ? colors.gray[700] : colors.gray[300],
    borderRadius: 20,
  },
  input: {
    flex: 1,
    color: theme === 'dark' ? colors.gray[500] : colors.gray[900],
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});