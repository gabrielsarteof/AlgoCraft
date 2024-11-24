import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { colors } from '@/styles/colors';
import { Slot } from 'expo-router';
import { View, StyleSheet, ColorSchemeName } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme: ColorSchemeName = useColorScheme();
  console.log('Color Scheme:', colorScheme);
  const [loaded] = useFonts({
    'Righteous': require('@assets/fonts/Righteous/Righteous-Regular.ttf'),
    'Roboto-Regular': require('@assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('@assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Light': require('@assets/fonts/Roboto/Roboto-Light.ttf'),
    'Roboto-Medium': require('@assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Ajuste para garantir que o ThemeProvider englobe toda a navegação
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={[styles.container, { backgroundColor: colors[colorScheme ?? 'light'].background }]}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Slot />
      </View>
    </ThemeProvider>
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
