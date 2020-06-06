import React from 'react'
import {StyleSheet, View ,Text} from "react-native";
import {globalStyles} from '../styles/global'

export default function About(){
    return (
        <View style= {globalStyles.container}>
            <Text style = {globalStyles.titleText}>
                This is the Note Application for keeping all personal notes safely.
            </Text>
  
            <Text style={globalStyles.about}> Done by Shivakumara M Hiremath </Text>
            <Text style={globalStyles.technologies}> ReactNative | MongoDB | NodeJS | ExpressJS </Text>
        </View>
    )
}