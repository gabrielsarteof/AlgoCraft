// app/index.tsx (HomeScreen)
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router'; // Importar o hook useRouter
import homeScreenStyles from '@/styles/HomeScreenStyles';  // Importando o arquivo de estilos
import typography from '@/styles/Typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { ToggleThemeButton } from '@/components/ui/ToggleThemeButton';
import { useTheme } from '@/context/themeContext';
import { Spacer } from '@/components/Spacer';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  
  const { theme } = useTheme(); 
  
  const handleAccessCreateAccount= () => {
    router.push('/page1'); 
  };

  
  const handleAccessLogin = () => {
    router.push('/page2'); 
  };

  return (
    <View style={homeScreenStyles.container}>
      <View style={homeScreenStyles.topbox}>
        <ToggleThemeButton />
      </View>

      <View style={homeScreenStyles.middlebox}>
        <Text style={typography(theme).logo}>algocraft</Text>
        <Spacer height={20} />
        <Text style={typography(theme).slogan}>
          Aprenda a programar de uma maneira grátis e divertida
        </Text>
      </View>

      <View style={homeScreenStyles.bottombox}>
        <BlueButton
          title="COMEÇAR AGORA"
          onPress={handleAccessCreateAccount}
          isLoading={isLoading}
        />
        <BlueButton
          title="JÁ TENHO UMA CONTA"
          onPress={handleAccessLogin}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
