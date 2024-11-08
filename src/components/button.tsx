import { View, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native"

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return(

        <TouchableOpacity 
        activeOpacity={0.7} 
        disabled={isLoading}
        {...rest}
        >
        <View className="bg-blue w-full h-14 items-center justify-center rounded-xl"
        >
       
        {isLoading ? (
          <ActivityIndicator className="text-white" />
        ) : (
          
        <Text className="text-white text-base font-bold uppercase">
            {title}
          </Text>
        )}

      </View>
    </TouchableOpacity>
    )
}
