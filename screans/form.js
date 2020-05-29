import React,{useState} from 'react'
import {View ,Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, TextInput} from "react-native";
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import { Formik } from 'formik'

export default function Form ({addReview}){
    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values) => {
                    console.log(values)
                    addReview(values)
                }}>
                    {
                        (props) => (
                             <View>
                                 <TextInput 
                                    style={globalStyles.input}
                                    placeholder = 'Title'
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title}
                                 />

                                <TextInput 
                                    multiline
                                    style={globalStyles.input}
                                    placeholder = 'Description'
                                    onChangeText={props.handleChange('body')}
                                    value={props.values.body}
                                 />

                                <TextInput 
                                    keyboardType='numeric'
                                    style={globalStyles.input}
                                    placeholder = 'Rating'
                                    onChangeText={props.handleChange('rating')}
                                    value={props.values.rating}
                                 />

                                 <Button title = 'Submit' color = 'maroon' onPress={props.handleSubmit}/>
                             </View>
                        )
                    }
            </Formik>
        </View>
    )
}