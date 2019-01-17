/* @flow */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {Container, Content, Icon, Button} from 'native-base'
// components
import ProfileHead from '../../sections/components/profile-head'
import ProfileNavigation from '../../sections/components/profile-nav'
import ProfileBody from '../../sections/components/profile';

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
      <Container>
        <Content>
          <ProfileHead />
          <ProfileNavigation />
          <ProfileBody />
        </Content>
      </Container>
    );
  }
}
