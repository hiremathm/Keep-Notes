import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
// import {createAppContainer} from 'react-navigation'

import About from '../screans/about'
import Header from '../shared/header'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                // title: 'GaneZone'
                headerTitle: () => <Header navigation={navigation} title="About Gamezone"/>
            } 
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#ddd', height: 70
        }
    }
});

export default AboutStack;