import React from 'react'
import {Image,View ,Text, Button,StyleSheet} from "react-native";
import {globalStyles, images} from '../styles/global'

import Card from '../shared/card'

export default function reviewDetails({navigation}){
    const pressHandler = () => {
        navigation.goBack()
    }

    const rating = navigation.getParam('rating')

    return (
        <View style={globalStyles.container}>
            <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>
                    Gamezone Rating : 
                    <Image
                    source = {images.ratings[rating]}
                />
                </Text>

            </View>
            </Card>
            <Button title = "Back to home screen" onPress = {pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})