import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import LoginStack from './loginStack'
import LogoutStack from './logoutStack'
import AsyncStorage from '@react-native-community/async-storage'

let RootDrawerNavigator = {}

// let token = ''
// AsyncStorage.getItem('token')
//     .then(value => {
//         token = value
//     })
// console.log("token in drawer", token)
// token = ''
// if(token){
 RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
        // navigationOptions: {drawerLabel: () => null}
    },
    About: {
        screen: AboutStack
        // navigationOptions: {drawerLabel: () => false}

    },
    Logout: {
        screen: LogoutStack
    },
    Login: {
        screen: LoginStack   
    }
}
,{
    initialRouteName: "Home"
})


// }
// else{
//      RootDrawerNavigator = createDrawerNavigator({
//         Login: {
//             screen: LoginStack   
//         }
//     },{
//         initialRouteName: "Login"
//       })
// }

export default createAppContainer(RootDrawerNavigator)