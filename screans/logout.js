import React from 'react'
import {View,Button, Text} from 'react-native'
import {globalStyles} from '../styles/global'
import AsyncStorage from '@react-native-community/async-storage'

export default function Loign({navigation}){
    let token = ''
    AsyncStorage.getItem('token')
        .then(value => {
            token = value
        })

    const sendLogoutRequest = () => {
        fetch('https://snotemern.herokuapp.com/users/logout', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth': token                                                                          
            }
        })
        .then(response => response.json())                                                                                                
        .then(response => {                                                                         
            console.log(response)    
            AsyncStorage.setItem('token', '')                                                
            console.log('Logout response')
        })
        .catch(error => {
            console.log(error)
            console.log('Logout error')
        })
    }

    return (
        <View style={globalStyles.container}>
            <Button title="Logout" onPress={sendLogoutRequest}/>
        </View>
    )
}