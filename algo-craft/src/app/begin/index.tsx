import React, { useState } from 'react';
import { View, Text, ColorSchemeName, useColorScheme, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Importar o hook useRouter
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import beginStyles from '@/styles/beginStyles';

export default function ResultScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    router.push('/begin/begin'); 
  };

  return (
    <SafeAreaView style={[beginStyles(colorScheme).beginScreenContainer]}>
      <View style={beginStyles(colorScheme).topbox}>
      </View>

      <View style={beginStyles(colorScheme).middlebox}>
      <Image
        style={beginStyles(colorScheme).logo}
        source={require('@assets/images/logo/logo-dark.png')} 
        resizeMode="contain"
        />

        <Text style={typography(colorScheme).highLightText}>
            Só mais umas perguntinhas e vamos para sua primeira lição
        </Text>
        <Spacer height={40}></Spacer>
      </View>

      <View style={beginStyles(colorScheme).bottombox}>
        <BlueButton
          title="CONTINUAR"
          onPress={handleAccessGoNext}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}