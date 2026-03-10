import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { scale, verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import Typo from "@/components/Typo";
import * as Icons from "phosphor-react-native";
import { useAuth } from "@/contexts/authContext";
import Screenwrapper from "../../components/ScreenWrapper";


const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {login: loginUser} = useAuth();

  const handleSubmit = async()=>{
      if(!emailRef.current || !passwordRef){
        Alert.alert("Login", "Талбарыг бөглөнө үү");
        return;
      }
      
      setIsLoading(true);
      const res = await loginUser(emailRef.current, passwordRef.current)
      setIsLoading(false);
      if(!res.success){
        Alert.alert('Login', res.msg);
      }
  }

  return (
    <Screenwrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>
        <View style={{gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={"800"}>Сайн уу,</Typo>
            <Typo size={30} fontWeight={"800"}>Тавтай морил</Typo>
        </View>
        {/*form*/}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>Нэвтрэх</Typo>
        <Input
          placeholder='Имэйл хаягаа оруулна уу' 
          onChangeText={(value: string)=>emailRef.current = value} 
          icon={<Icons.At size={verticalScale(26)} color={colors.white} weight='fill'/>} 
        />
        <Input
          placeholder='Нууц үгээ оруулна уу' 
          secureTextEntry
          onChangeText={(value: string)=>passwordRef.current = value} 
          icon={<Icons.Lock size={verticalScale(26)} color={colors.white} weight='fill'/>} 
        />
        <Typo size={14} color={colors.text} style={{alignSelf: 'flex-end'}}>Нууц үг сэргээх</Typo>
        
     
        <Button loading = {isLoading} onPress={handleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Нэвтрэх
            </Typo>
        </Button>
        
        </View>
        {/*footer*/} 
        <View style={styles.footer}>
          <Pressable onPress={() => router.navigate('/(auth)/register')}>
            <Typo size={15}>Бүртгэл үүсгэх</Typo>
          </Pressable>
        </View>
      </View>
    </Screenwrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: spacingX._30,
      paddingHorizontal: spacingX._20,
    },
    welcomeText: {
      fontSize: verticalScale(20),
      fontWeight: "bold",
      color: colors.text,
    },
    form: {
      gap: spacingY._20, 
    },
    forgotPassword: {
      textAlign: "right",
      fontWeight: "bold",
      color: colors.text,
    },
    footer: {
      backgroundColor: colors.neutral900,
      alignItems: 'center',
      gap: 5,
      justifyContent: "center",
      flexDirection: "row"
    },
    footerText: {
      textAlign: 'center',
      color: colors.text,
      fontSize: verticalScale(15),
    }
});