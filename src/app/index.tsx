import { useState } from "react"
import { View, Image, StatusBar, Alert, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons"
import { Link, Redirect, router } from "expo-router"

import { api } from "@/server/api"
import { useBadgeStore } from "@/store/badge-store"

import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { usePasswordVisibility } from "@/components/paswordInput" 


export default function Home() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const { isPasswordVisible, togglePasswordVisibility } = usePasswordVisibility()

  const badgeStore = useBadgeStore()

  async function handleAccessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ingresso", "Informe o código do ingresso!")
      }

      setIsLoading(true)

      const { data } = await api.get(`/attendees/${code}/badge`)
      badgeStore.save(data.badge)
    } catch (error) {
      console.log(error)
      setIsLoading(false)

      Alert.alert("Ingresso", "Ingresso não encontrado!")
    }
  }

  if (badgeStore.data?.checkInURL) {
    return <Redirect href="/ticket" />
  }

  return (
    <View className="flex-1 bg-white items-center justify-center p-8">
      <StatusBar barStyle="dark-content" />

      <Image
        source={require("@/assets/logo-blue.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <Octicons
            name="person"
            color={colors.gray[300]}
            size={20}
          />
          <Input.Field
            placeholder="Nome de usuário ou email"
            onChangeText={setCode}
          />
        </Input>

        <Input>
          <MaterialIcons
            name="lock-outline" 
            color={colors.gray[300]}
            size={20}
          />
          <Input.Field
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible} 
            onChangeText={setPassword} 
          />
          
          {/* Botão para alternar a visibilidade da senha */}
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialIcons
              name={isPasswordVisible ? "visibility-off" : "visibility"} 
              color={colors.gray[300]} 
              size={20}
            />
          </TouchableOpacity>
        </Input>
  

        <Button
          title="Começar Agora"
          onPress={handleAccessCredential}
          isLoading={isLoading}
        />


        
      </View>
    </View>
  )
}