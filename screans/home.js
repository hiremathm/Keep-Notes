import React,{useState, useEffect} from 'react'
import {View ,Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'
import Form from './form'


// validation done using (yup)
export default function Home({navigation}){
    const [modalOpen, setModalOpen] = useState(false)
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
    //     // navigation.push('ReviewDetails')
    // }

    const [reviews, setReviews] = useState([
     
    ]);

    const addReview = (review) => {
        review.key = Math.random(10000).toString();
        review["category"] = '5ec4a88106d10236454be3fd'
        AsyncStorage.getItem('token')
        .then(value => {
            setReviews((prevState) => {
                fetch('https://snotemern.herokuapp.com/notes', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-auth': value
                    },
                    body: JSON.stringify(review)
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            })
        })
        setModalOpen(false)
    }

    useEffect(() => {
    AsyncStorage.getItem('token')
        .then(token => {
            token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM0YTgwZTA2ZDEwMjM2NDU0YmUzZmEiLCJuYW1lIjoiYWlzaHUiLCJlbWFpbCI6ImFpc2h1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJGNxdlhWOElOcVlRQVJDeXN6MTRVRE9IUUtydXFEeEpEcE1GSTVMMlJoR0h3VEFNSkJqVXRDIiwiaWF0IjoxNTkxMjQyMDgwfQ.mrbO5jaeQISCMOcJdVuu7OelVM-iymDw5NoEf9XkWrg'
            fetch('http://snotemern.herokuapp.com/notes',{headers: {'x-auth': token}})
            .then(resp => resp.json())
            .then(resp => {
                console.log("callback response ", token)
                let reviews = resp.map(r => {
                    return {title: r.title, rating: 5, body: r.body, key:  r.title}
                })
                setReviews(reviews)      
            })
        })
    })
    return (
        <View style= {globalStyles.container}>

            <Modal visible = {modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons 
                    name = 'close'
                    size = {24}
                    style = {{...styles.modalToggle, ...styles.modelClose}}
                    onPress = {() => 
                        setModalOpen(false)
                    }
                />
                <Form addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            {/* <Text style= {globalStyles.titleText}>
                Home Screen
            </Text>
            <Button title = "go to review page" onPress = {pressHandler }/> */}

            <MaterialIcons 
                name = 'add'
                size = {24}
                style = {styles.modalToggle}
                onPress = {() => 
                    setModalOpen(true)
                }
            />

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress = {() => {
                        navigation.navigate('ReviewDetails',item)
                    }}>
                        <Card>
                            <Text style = {globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        alignSelf: 'center'
    },
    modelClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    }
})