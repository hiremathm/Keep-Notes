import React,{useState} from 'react'
import {View ,Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet} from "react-native";
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'

import Form from './form'

export default function Home({navigation}){
    const [modalOpen, setModalOpen] = useState(false)
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
    //     // navigation.push('ReviewDetails')
    // }
    const [reviews, setReviews] = useState([
        {title: 'abc',rating: 5, body: 'abc', key: '1'},
        {title: 'xyz',rating: 4, body: 'abc', key: '2'},
        {title: 'mno',rating: 3, body: 'abc', key: '3'},
        {title: 'pqr',rating: 2, body: 'abc', key: '4'},
        {title: 'efg',rating: 1, body: 'abc', key: '5'}
    ]);

    const addReview = (review) => {
        review.key = Math.random(10000).toString();
        setReviews((prevState) => {
            return [review, ...prevState]
        })
        setModalOpen(true)
    }

    return (
        <View style= {globalStyles.container}>

            <Modal visible = {modalOpen} animationType='slide'>
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
                    <TouchableOpacity onPress = {() => navigation.navigate('ReviewDetails',item)}>
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