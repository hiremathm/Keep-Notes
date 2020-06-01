import React from 'react'
import {Text, View,Button, TextInput} from 'react-native'
import {globalStyles} from '../styles/global'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-community/async-storage'

export default function Loign({navigation}){
    const sendLoginRequest = (obj) => {
        fetch('https://snotemern.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(response => {
            let token = response['token']
            if(token){
                AsyncStorage.setItem('token', token) 
                navigation.navigate('Home')
            }
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <View style={globalStyles.container}>
            {/* {console.log("props", props)} */}
            <Formik initialValues={{email: '',password: ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    sendLoginRequest(values)
                }}>

                {(props) => (
                        <View>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Username"
                                onChangeText={props.handleChange('email')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text></Text>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Password"
                                onChangeText={props.handleChange('password')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text></Text>
                            
                            <Button title = 'Submit' color = 'maroon' onPress={props.handleSubmit}/>
                        </View>
                    )
                }

            </Formik>
        </View>
    )
}