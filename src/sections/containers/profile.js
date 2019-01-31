import React, {Component} from 'react';
import { Container, Content, Text } from 'native-base'
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
//components
import ProfileHead from '../components/profile-head'
import ProfileBody from './profile-body'

export default class ProfileComponent extends Component {
  render() {
    return (
        <View>
          <ProfileHead />
          <ProfileBody />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  profileHeadContainer: {
    paddingVertical: 10,
  },
  profileHeadWrapper: {
    flexDirection: 'row',
  },
  profileImageContainer:{
    flex: 1,
    alignItems: 'center',
  },
  profilePicture:{
    width: 75,
    height: 75,
    borderRadius: 37,
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detail: {
    alignItems: 'center',
  },
  detailNumber:{

  },
  detailTitle: {
    fontSize: 12,
    color: 'gray',
  },
  profileDescription:{
    padding: 10,
  },
  fullname:{
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#262626',
  },
});
