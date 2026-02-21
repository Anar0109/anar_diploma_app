// import { Image, StyleSheet, Text, View } from "react-native"
// import {useEffect} from 'react';
// import React from 'react';
// import {colors} from '@/constants/theme';
// import {useRouter} from "expo-router";

// const index = () => {
//   // const router = useRouter();
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     router.push("/(auth)/welcome")
//   //   }, 2000);
//   // },[])
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.logo}
//         resizeMode="contain"
//         source={require('../assets/images/splashImage.png')}
//       />
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.neutral900,
//     },

//     logo: {
//       height: "20%",
//       aspectRatio: 1,

//     }
// })

import React, { useEffect } from "react";
import { Href, Router, useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

import Loading from "@/components/Loading";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";

const SplashScreen = () => {
  const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.replace("/welcome");
  //   }, 1500);
  // }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/splashImage.png")}
      />
      {/* <Text style={styles.title}>Expense Tracker</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
    gap: 20,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
    // width: "50%",
  },
  // title: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: colors.neutral200,
  // },
});

export default SplashScreen;
