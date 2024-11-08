import { useState } from "react"
import { View, Image, StatusBar, Alert, TouchableOpacity } from "react-native"
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import axios from "axios"

import { colors } from "@/styles/colors"

import { api } from "@/server/api"
import { useBadgeStore } from "@/store/badge-store"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

import { usePasswordVisibility } from "@/components/paswordInput" 

const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33"

export default function Register() {
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { isPasswordVisible, togglePasswordVisibility } = usePasswordVisibility()

  const badgeStore = useBadgeStore()

  async function handleRegister() {
    try {
      if (!name.trim() || !email.trim()) {
        return Alert.alert("Inscrição", "Preencha todos os campos!")
      }

      setIsLoading(true)

      const registerResponse = await api.post(`/events/${EVENT_ID}/attendees`, {
        name,
        email,
      })

      if (registerResponse.data.attendeeId) {
        const badgeResponse = await api.get(
          `/attendees/${registerResponse.data.attendeeId}/badge`
        )

        badgeStore.save(badgeResponse.data.badge)

        Alert.alert("Inscrição", "Inscrição realizada com sucesso!", [
          { text: "OK", onPress: () => router.push("/ticket") },
        ])
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)

      if (axios.isAxiosError(error)) {
        if (
          String(error.response?.data.message).includes("already registered")
        ) {
          return Alert.alert("Inscrição", "Este e-mail já está cadastrado!")
        }
      }

      Alert.alert("Inscrição", "Não foi possível fazer a inscrição")
    }
  }

  function setPassword(text: string): void {
    throw new Error("Function not implemented.")
  }

  return (
    <View className="flex-1 bg-white items-center justify-center p-8 ">
      <StatusBar barStyle="light-content" />

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
            placeholder="Nome de usuário"
            onChangeText={setCode}
          />
        </Input>

        <Input>
          <MaterialCommunityIcons
            name="email-outline"
            color={colors.gray[300]}
            size={20}
          />
          <Input.Field
            placeholder="Email"
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

        <Input>
          <MaterialIcons
            name="lock-outline" 
            color={colors.gray[300]}
            size={20}
          />
          <Input.Field
            placeholder="Confirme a Senha"
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
          title="Realizar inscrição"
          onPress={handleRegister}
          isLoading={isLoading}
        />

        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}