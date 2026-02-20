import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import { CustomButtonProps } from "@/types";
import {colors, radius} from '@/constants/theme';
import {verticalScale} from '@/utils/styling';
import { CpuIcon } from "phosphor-react-native"; 5995



const Loading = ({
    size = "large",
    color = colors.primary

}: ActivityIndicatorProps) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={size} color={color}/>
        </View>
    )
};
  

export default Loading;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        height: verticalScale(52),
        justifyContent: "center",
        alignItems: "center",
    }
});