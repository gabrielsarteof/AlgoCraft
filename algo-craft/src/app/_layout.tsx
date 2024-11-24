import React from 'react';
import { useFonts } from 'expo-font';  
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Slot } from 'expo-router';  
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '@/context/themeContext';  
import { Colors } from '@/styles/Colors';  

const Layout = () => {
  const [fontsLoaded] = useFonts({
    'Righteous': require('@assets/fonts/Righteous/Righteous-Regular.ttf'),
    'Roboto-Regular': require('@assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('@assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Light': require('@assets/fonts/Roboto/Roboto-Light.ttf'),
    'Roboto-Medium': require('@assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  const { theme } = useTheme();  

  if (!fontsLoaded) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: Colors[theme].background }]}>
        <ActivityIndicator size="large" color={Colors[theme].tint} />
        <Text style={{ color: Colors[theme].text }}>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
