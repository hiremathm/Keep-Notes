import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import Logout from '../screans/logout'
import Header from '../shared/header'

const screens = {
    Logout: {
        screen: Logout,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Logout "/>
            } 
        }
    }
}


const LogoutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ccc', height: 70
        }
    }
})

export default LogoutStack;