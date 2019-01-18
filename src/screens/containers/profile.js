import React, { Component } from 'react';
import {Container, Content, Icon, } from 'native-base'
// components
import ProfileView from '../../sections/containers/profile'

export default class Profile extends Component {

  static navigationOptions = {
    title: 'TitanLoco8',
    headerLeft: null,
    headerBackTitle: null,
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
          <ProfileView />
        </Content>
      </Container>
    );
  }
}
