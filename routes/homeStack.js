import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import Home from '../screans/home'
import ReviewDetails from '../screans/reviewDetails'

import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                // title: 'GaneZone'
                headerTitle: () => <Header navigation={navigation} title="GameZone"/>
            } 
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails',
        } 
    }
}

const HomeStack = createStackNavigator(screens, {
        defaultNavigationOptions: {
            headerStyle: {backgroundColor: '#ccc', height: 70
        }
    }
});

export default HomeStack;