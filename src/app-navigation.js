import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
//Screens
import Home from './screens/containers/home'
import AddMedia from './screens/containers/add-media'
import Profile from './screens/containers/profile'

const mainNavigation = createStackNavigator(
  {
    Home,
    AddMedia,
    Profile,
  }
)

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: mainNavigation,
    },
    AddMedia: {
      screen: AddMedia,
    },
    Profile: {
      screen: Profile,
    }
  }
)


export default createAppContainer(tabNavigator)
