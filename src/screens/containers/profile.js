import React, { Component } from 'react';
import {Container, Content, Icon, } from 'native-base'
// components
import ProfileView from '../../sections/containers/profile'

export default class Profile extends Component {

  static navigationOptions = {
    title: 'TitanLoco8',
    headerLeft: null,
    headerBackTitle: null,
    headerRight:
    (
      <Icon
      type='AntDesign'
      name='setting'
      style={{marginRight: 10, fontSize: 26, color: '#323232'}}
      />
    ),
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        type='AntDesign'
        name='user'
        style={{ color: tintColor}}
        size={10}
      />
    ),
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
