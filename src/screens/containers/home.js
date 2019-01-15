/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon type='SimpleLineIcons' name='home' />
        <Icon type='SimpleLineIcons' name='plus' />
        <Icon type='SimpleLineIcons' name='user' />
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
