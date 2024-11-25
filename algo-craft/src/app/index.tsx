// app/index.tsx (HomeScreen)
import React, { useState } from 'react';
import { View, Text, ColorSchemeName, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router'; // Importar o hook useRouter
import homeScreenStyles from '@/styles/homeScreenStyles';  // Importando o arquivo de estilos
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  
  const handleAccessSignIn= () => {
    router.push('/custom'); 
  };

  
  const handleAccessSignUp = () => {
    router.push('/signup'); 
  };

  return (
    <View style={homeScreenStyles.container}>
      <View style={homeScreenStyles.topbox}>
      </View>

      <View style={homeScreenStyles.middlebox}>
        <Text style={typography(colorScheme).logo}>algocraft</Text>
        <Spacer height={20} />
        <Text style={typography(colorScheme).slogan}>
          Aprenda a programar de uma maneira grátis e divertida
        </Text>
      </View>

      <View style={homeScreenStyles.bottombox}>
        <BlueButton
          title="COMEÇAR AGORA"
          onPress={handleAccessSignIn}
          isLoading={isLoading}
        />
        <BlueButton
          title="JÁ TENHO UMA CONTA"
          onPress={handleAccessSignUp}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
