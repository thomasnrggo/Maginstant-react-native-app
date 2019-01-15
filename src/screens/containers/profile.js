/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

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
      <View style={styles.container}>
        <Text>I'm the Profile component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
