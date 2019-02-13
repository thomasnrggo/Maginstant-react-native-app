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
import Search from './screens/containers/search'
import Notifications from './screens/containers/notifications'
import Detail from './screens/containers/detail'
import Camera from './screens/containers/camera'
import Login from './screens/containers/login'
import Loading from './screens/containers/loading'
import NewPost from './screens/containers/newpost'
import Messages from './screens/containers/messages'

const tabbarVisible = (navigation) => {
  const { routes } = navigation.state;

  let showTabbar = true;
  routes.forEach((route) => {
    if (route.routeName === 'Messages') {
      showTabbar = false;
    }
  });

  return showTabbar;
};

const mainNavigation = createStackNavigator(
  {
    Home,
    AddMedia,
    Profile,
    Search,
    Detail,
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
    },
    Messages,
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
    Search,
    AddMedia: {
      screen: AddMedia,
    },
    Notifications,
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

const innerNavigation = createStackNavigator(
  {
    Tabs: tabNavigator,
    Messages,
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
