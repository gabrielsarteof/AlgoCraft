import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/context/themeContext';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();  

  return (
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <MaterialIcons
        name={theme === 'dark' ? 'light-mode' : 'dark-mode'}
        size={30}
        color={theme === 'dark' ? '#fff' : '#000'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
