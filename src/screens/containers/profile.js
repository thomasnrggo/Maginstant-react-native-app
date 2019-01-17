/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Icon} from 'native-base'
// components
import ProfileComponent from '../../sections/components/profile';

export default class Profile extends Component {

  static navigationOptions = {
    title: 'Perfil',
    tabBarIcon: ({tintColor}) => (
      <Icon
        type='SimpleLineIcons'
        name='user'
        style={{ color: tintColor}}
        size={10}
      />
    )
  }

  render() {
    return (
      <ProfileComponent />
    );
  }
}
