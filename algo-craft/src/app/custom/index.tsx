import React, { useState } from 'react';
import { View, Text, ColorSchemeName, useColorScheme, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Importar o hook useRouter
import experienceCustomizationStyles from '@/styles/experienceCustomization';  // Importando o arquivo de estilos
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExperienceCustomization() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleAccessGoNext = () => {
    router.push('/custom/begin'); 
  };

  return (
    <SafeAreaView style={experienceCustomizationStyles(colorScheme).container}>
      <View style={experienceCustomizationStyles(colorScheme).topbox}>
        <Spacer height={10}/>
        <View style={experienceCustomizationStyles(colorScheme).navigationHeader}>
          <MaterialIcons
            name="arrow-back-ios-new"
            color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
            size={24}
          />
        </View>
      </View>

      <View style={experienceCustomizationStyles(colorScheme).middlebox}>
        <Image 
          source={require('@assets/images/logo/logo-dark.png')} 
          style={experienceCustomizationStyles(colorScheme).logo} 
          resizeMode="contain" 
        />
        <Spacer height={20} />
        <Text style={typography(colorScheme).highLightText}>
          Só algumas perguntas rápidas e depois vamos para sua primeira lição
        </Text>
      </View>

      <View style={experienceCustomizationStyles(colorScheme).bottombox}>
        <BlueButton
          title="CONTINUAR"
          onPress={handleAccessGoNext}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}
