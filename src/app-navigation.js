import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { Icon } from 'native-base'
//Screens
import Home from './screens/containers/home'
import AddMedia from './screens/containers/add-media'
import Profile from './screens/containers/profile'
import Detail from './screens/containers/detail'
import Camera from './screens/containers/camera'

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


export default createAppContainer(tabNavigator)
