import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Container, Content, Text, } from 'native-base'
// components
import ProfileHead from './profile-head'

const ProfileComponent = ({}) => (
  <Container>
    <Content>
      <ProfileHead />
      <Text>I'm Profile Component</Text>
    </Content>
  </Container>
);

export default ProfileComponent;

const styles = StyleSheet.create({

});
