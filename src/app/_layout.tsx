import "@/styles/global.css"

import { Slot } from "expo-router"

import { Loading } from "@/components/loading"

import {
    useFonts,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
} from "@expo-google-fonts/roboto"
import { isLoaded } from "expo-font"

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_500Medium,
        Roboto_400Regular
    })


    if(!fontsLoaded){
        return <Loading />
    }

    return <Slot /> 
      
    
}