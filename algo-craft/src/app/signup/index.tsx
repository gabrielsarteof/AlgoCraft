import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ColorSchemeName, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import homeScreenStyles from '@/styles/homeScreenStyles';
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';
import { Input } from '@/components/ui/Input';
import { colors } from '@/styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

export default function SignUpScreen() {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <View style={homeScreenStyles.container}>
      <View style={homeScreenStyles.topbox}>
      </View>

      <View style={homeScreenStyles.middlebox}>
        <Text style={typography(colorScheme).logo}>algocraft</Text>
        <Spacer height={20} />

        <Input>
          <Octicons
            name="person"
            color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
            size={24}
          />
          <Input.Field
            placeholder="Email ou nome de usuário"
            value={username}
            onChangeText={setUsername}
          />
        </Input>
        <Spacer height={5} />
        <Input>
          <MaterialCommunityIcons
            name="lock-outline"
            color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
            size={24}
          />
          <Input.Field
            placeholder="Senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          {password.length > 0 && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
                size={24}
              />
            </TouchableOpacity>
          )}
        </Input>
        <Spacer height={15} />
        <Text style={typography(colorScheme).linkText}>ESQUECI A SENHA</Text>
      </View>

      <View style={homeScreenStyles.bottombox}>
        <BlueButton
          title="ENTRAR"
          onPress={handleLogin}
          isLoading={isLoading}
        />
        <BlueButton
          title="VOLTAR"
          onPress={handleGoBack}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
