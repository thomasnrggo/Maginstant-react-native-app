import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
import { Icon } from 'native-base'
//Screens
import Home from './screens/containers/home'
import AddMedia from './screens/containers/add-media'
import Profile from './screens/containers/profile'
import Detail from './screens/containers/detail'
import Camera from './screens/containers/camera'
import Login from './screens/containers/login'
import Loading from './screens/containers/loading'

const mainNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Magistant',
      }
    },
    AddMedia,
    Profile,
    Detail,
    Camera,
  }
)

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: mainNavigation,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type='SimpleLineIcons'
            name='home'
            style={{ color: tintColor }}
            size={10}
          />
        )
      }
    },
    AddMedia: {
      screen: AddMedia,
    },
    Profile: {
      screen: Profile,
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    }
   }
)

const switchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: tabNavigator,
    Login: Login,
  },
  {
    initialRouteName: 'Loading',
  }
)


export default createAppContainer(tabNavigator)
