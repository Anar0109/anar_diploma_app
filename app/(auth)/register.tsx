import Screenwrapper from '@/components/ScreenWrapper'
import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, Pressable, Alert} from 'react-native'
import Typo from "@/components/Typo"
import { colors, spacingY, spacingX } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/input'
import * as Icons from 'phosphor-react-native';
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

const Register = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async()=>{
      if(!emailRef.current || !passwordRef || !nameRef.current){
        Alert.alert("Signup", "Талбарыг бөглөнө үү");
        return;
      }
      console.log("email: ", emailRef.current);
      console.log("name: ", nameRef.current);
      console.log("password: ", passwordRef.current);
      console.log("good to go",);
  }

  return (
    <Screenwrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>
        <View style={{gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={"800"}>Бүртгүүлэх</Typo>
            <Typo size={30} fontWeight={"800"}>Мэдээллээ оруулна уу</Typo>
        </View>
        {/*form*/}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>Бүртгэл үүсгэх</Typo>
        <Input
          placeholder='Нэрээ оруулна уу' 
          onChangeText={value=>nameRef.current = value} 
          icon={<Icons.User size={verticalScale(26)} color={colors.white} weight='fill'/>} 
        />
        <Input
          placeholder='Имэйл хаягаа оруулна уу' 
          onChangeText={value=>emailRef.current = value} 
          icon={<Icons.At size={verticalScale(26)} color={colors.white} weight='fill'/>} 
        />
        <Input
          placeholder='Нууц үгээ оруулна уу' 
          secureTextEntry
          onChangeText={value=>passwordRef.current = value} 
          icon={<Icons.Lock size={verticalScale(26)} color={colors.white} weight='fill'/>} 
        />
        
        
     
        <Button loading = {isLoading} onPress={handleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Бүртгүүлэх 
            </Typo>
        </Button>
        
        </View>
        {/*footer*/} 
        <View style={styles.footer}>
          <Pressable onPress={() => router.navigate('/(auth)/login')}>
            <Typo size={15}>Бүртгэл үүсгэсэн</Typo>
          </Pressable>
        </View>
      </View>
    </Screenwrapper>
  )
}

export default Register

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