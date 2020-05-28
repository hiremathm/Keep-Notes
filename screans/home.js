import React,{useState} from 'react'
import {View ,Text, Button, FlatList, TouchableOpacity} from "react-native";
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

export default function Home({navigation}){
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

    return (
        <View style= {globalStyles.container}>
            {/* <Text style= {globalStyles.titleText}>
                Home Screen
            </Text>
            <Button title = "go to review page" onPress = {pressHandler }/> */}
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