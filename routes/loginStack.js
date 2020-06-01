import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import Login from '../screans/login'
import Header from '../shared/header'

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="SignIn / SignUp "/>
            } 
        }
    }
}


const LoginStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ddd', height: 70
        }
    }
})

export default LoginStack;