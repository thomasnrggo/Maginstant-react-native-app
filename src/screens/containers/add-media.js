/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base'

export default class AddMedia extends Component {

  static navigationOptions = {
    title: 'Añadir',
    tabBarIcon: ({tintColor}) => (
      <Icon
        type='SimpleLineIcons'
        name='plus'
        style={{ color: tintColor }}
        size={10}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the AddMedia component</Text>
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
