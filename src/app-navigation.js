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
import NewPost from './screens/containers/newpost'
import Messages from './screens/containers/messages'

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
    Messages,
    Camera: {
      screen: Camera,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    NewPost: {
      screen: NewPost,
      navigationOptions: {
        title: '',
        headerLayoutPreset: 'center',
      }
    }
  }
)

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: mainNavigation,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            type='SimpleLineIcons'
            name='home'
            color={tintColor}
            size={10}
          />
        ),
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
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
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
