import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import homeScreenStyles from '@/styles/homeScreenStyles';
import typography from '@/styles/typography';
import { BlueButton } from '@/components/ui/BlueButton';
import { Spacer } from '@/components/Spacer';
import { Input } from '@/components/ui/Input';
import { colors } from '@/styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ColorSchemeName } from 'react-native';

export default function SignInScreen() {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = () => {
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
            placeholder="Nome de usuário"
            value={username}
            onChangeText={setUsername}
          />
        </Input>
        <Spacer height={5} />
        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
            size={24}
          />
          <Input.Field
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
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
        <Spacer height={5} />
        <Input>
          <MaterialCommunityIcons
            name="lock-check-outline"
            color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
            size={24}
          />
          <Input.Field
            placeholder="Confirme a senha"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {confirmPassword.length > 0 && (
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <MaterialCommunityIcons
                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[400]}
                size={24}
              />
            </TouchableOpacity>
          )}
        </Input>
      </View>

      <View style={homeScreenStyles.bottombox}>
        <BlueButton
          title="COMEÇAR AGORA"
          onPress={handleCreateAccount}
          isLoading={isLoading}
        />
        <BlueButton
          title="JÁ TENHO UMA CONTA"
          onPress={handleGoBack}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
