import React, { useState } from "react"

export function usePasswordVisibility() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState)
  }

  return {
    isPasswordVisible,
    togglePasswordVisibility
  }
}
