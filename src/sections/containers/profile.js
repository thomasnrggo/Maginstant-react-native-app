import React, {Component} from 'react';
import { Container, Content, } from 'native-base'
//components
import ProfileHead from '../components/profile-head'
import ProfileBody from './profile-body'

export default class ProfileComponent extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ProfileHead />
          <ProfileBody />
        </Content>
      </Container>
    );
  }
}
