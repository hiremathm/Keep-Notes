import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import LoginStack from './loginStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    },
    Login: {
        screen: LoginStack   
    }
})

export default createAppContainer(RootDrawerNavigator)